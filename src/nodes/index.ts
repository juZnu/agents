
import { generateBusinessResponseWithAI, generateDisputeResponsePaymentCompany } from "../actions";
import { DisputeInfoType } from "../types/types";
import { Command } from "@langchain/langgraph";
import { StripeDisputeAnnotation } from "../types/annotation";
import { getDisputeDetails } from "../utils";
import { evidenceGuide } from "../utils/variables";
import { toolNode } from "../Tools";

// export const classifyDisputeAndProductNode = async (state: typeof StripeDisputeAnnotation.State) => {
//   const { customer, business, charge, messages } = state;

//   const disputeDetails: DisputeInfoType = getDisputeDetails(customer, business, charge);
  
//   const [productCategory] = await Promise.all([
//     generateCategoryType(disputeDetails),
//   ]);

//   messages.push(productCategory);



//   return new Command({
//     update: {
//       messages: [...messages],  
//     },
//   });
// };

export const getEvidencesNode = async (state: typeof StripeDisputeAnnotation.State) => {
  const { charge, messages } = state;
  
  const disputeType = charge.disputeType?.toString().trim() || '';
  const productCategory = charge.productType?.toString().trim() || '';
  const cardType = charge.card_type?.toString().trim() || ''

  let evidenceList = evidenceGuide[disputeType]?.[productCategory] || [];

  if (charge.receipt_url !== null && charge.receipt_url !== '') {
    evidenceList.push(['receipt','']);
  }

  return new Command({
    update: {
      evidenceList: evidenceList,
    },

  });
};


export const resolveDocumentsNode = async (state: typeof StripeDisputeAnnotation.State) => {
  const evidenceList: [string, string][] = state.evidenceList || [];

  const collectedEvidences: Record<string, string> = {};
  const missingEvidences: Record<string, string> = {};

  // Extract tools from ToolNode
  const receiptTool = toolNode.tools.find((t) => t.name === "receipt");
  const refundPolicyTool = toolNode.tools.find((t) => t.name === "refund_policy");

  for (const [code, code_desc] of evidenceList) {
    try {
      let result = "";

      switch (code) {
        case "receipt": {
          if (
            !receiptTool ||
            typeof (receiptTool as any).prepareInput !== "function" ||
            typeof receiptTool.invoke !== "function"
          ) {
            missingEvidences[code] = code_desc || "Tool missing or not invokable";
            continue;
          }
          const input = (receiptTool as any).prepareInput(state);
          result = await receiptTool.invoke(input);
          break;
        }
      
        case "refund_policy": {
          if (
            !refundPolicyTool ||
            typeof (refundPolicyTool as any).prepareInput !== "function" ||
            typeof refundPolicyTool.invoke !== "function"
          ) {
            missingEvidences[code] = code_desc || "Tool missing or not invokable";
            continue;
          }
          const input = (refundPolicyTool as any).prepareInput(state);
          result = await refundPolicyTool.invoke(input); 
          break;
        }
      
        default:
          missingEvidences[code] = code_desc || "Unknown evidence type";
          continue;
      }
      
      collectedEvidences[code] = result;
    } catch (err: any) {
      missingEvidences[code] = code_desc || err?.message || "Unknown error";
    }
  }

  console.log("Collected Evidences:", collectedEvidences);
  console.log("Missing Evidences:", missingEvidences);

  return new Command({
    update: {
      collectedEvidences,
      missingEvidences,
    },
  });
};


export const getResponseBusinessNode = async (state: typeof StripeDisputeAnnotation.State) => {
  const { customer, business, charge, messages, collectedEvidences, missingEvidences } = state;

  const disputeType = charge.disputeType?.toString().trim() || ''; 
  const productCategory = charge.productType?.toString().trim() || '';

  const evidenceAvailable: string[] = collectedEvidences
    ? Object.entries(collectedEvidences).map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`)
    : [];

  const evidencesNeeded: string[] = missingEvidences
    ? Object.entries(missingEvidences).map(([key, desc]) => `${key.replace(/_/g, ' ')}: ${desc}`)
    : [];

  const aiResponse = await generateBusinessResponseWithAI({
    customer,
    business,
    charge,
    disputeType,
    productCategory,
    evidenceAvailable,
    evidencesNeeded
  });

  return new Command({
    update: {
      messages: [...messages],
      businessResponse: aiResponse,
    },
  });
};

export const getResponsePaymentCompanyNode = async (state: typeof StripeDisputeAnnotation.State) => {
  const { customer, business, charge, messages, collectedEvidences, missingEvidences } = state;

  const disputeDetails: DisputeInfoType = getDisputeDetails(customer, business, charge);
  const disputeType = charge.disputeType?.toString().trim() || ''; 
  const productCategory = charge.productType?.toString().trim() || '';

  const evidencesNeeded = Object.entries(missingEvidences || {}).map(([key, desc]) => `${key.replace(/_/g, ' ')}: ${desc}`);
  const evidenceAvailable: string[] = collectedEvidences
    ? Object.entries(collectedEvidences).map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`)
    : [];

  const response = await generateDisputeResponsePaymentCompany(
    disputeDetails,
    disputeType,
    productCategory,
    evidencesNeeded,
    evidenceAvailable
  );

  messages.push(response);

  return new Command({
    update: {
      messages: [...messages],
      paymentCompanyResponse: response.content.toString(),
    },
  });
};