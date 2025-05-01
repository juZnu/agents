
import { generateCategoryType, generateDisputeResponseBusiness, generateDisputeResponsePaymentCompany, generateDisputeType, generateEvidences } from "../actions";
import { DisputeInfoType } from "../types/types";
import { Command } from "@langchain/langgraph";
import { StripeDisputeAnnotation } from "../types/annotation";
import { getDisputeDetails, sleep } from "../utils";
import { invoiceTool, refundPolicyTool, termsTool } from "../Tools/functions";
import { storeBusinessPolicyVector, storeEvidenceTextVector } from "../models/vector";

export const classifyDisputeAndProductNode = async (state: typeof StripeDisputeAnnotation.State) => {
  const { customer, business, charge, messages } = state;

  const disputeDetails: DisputeInfoType = getDisputeDetails(customer, business, charge);
  
  const [productCategory] = await Promise.all([
    generateCategoryType(disputeDetails),
  ]);

  messages.push(productCategory);

  await sleep(10000);

  return new Command({
    update: {
      messages: [...messages],  
    },
  });
};

export const getEvidencesNode = async (state: typeof StripeDisputeAnnotation.State) => {
  const { customer, business, charge, messages } = state;
  const disputeDetails: DisputeInfoType = getDisputeDetails(customer, business, charge);

  const disputeType = charge.disputeType?.toString().trim() || '';
  const productCategory = messages[messages.length - 1].content.toString().trim(); 
  const cardType = charge.card_type?.toString().trim() || ''

  console.log('Dispute Type:', disputeType);
  console.log('Product Category:', productCategory);
  console.log('Card Type : ', charge.card_type?.toString().trim())

  const evidences = await generateEvidences(disputeDetails,cardType,disputeType,productCategory)
  messages.push(evidences);

  await sleep(10000); 

  return new Command({
    update: {
      messages: [...messages], 
    },
  });
};

export const resolveDocumentsNode = async (state: typeof StripeDisputeAnnotation.State) => {
  const { business, messages, charge } = state;
  const cardType = charge.card_type?.toString().trim() || '';

  const disputeType = charge.disputeType?.toString().trim() || '';
  const productCategory = messages[messages.length - 2]?.content?.toString().trim() || '';

  const evidences = messages[messages.length - 1].content
    .toString()
    .trim()
    .split(/,(?![^()]*\))/)
    .map((e) => e.trim().toLowerCase());

  const evidenceText = `Evidences required for:\n- Dispute Type: ${disputeType}\n- Product Type: ${productCategory}\n- Card Type: ${cardType}\nList: ${evidences.join(", ")}`;
  
  await storeEvidenceTextVector("evidence_templates", evidenceText, {
    disputeType,
    productType: productCategory,
    cardType,
    evidences,
  });


  const businessName = business.companyName || '';
  const businessUrl = business.websiteUrl || '';

  const outputs: Record<string, string> = {};
  const collectedEvidences: string[] = [];
  const missingEvidences: string[] = [];

  for (const item of evidences) {
    const normalized = item.toLowerCase();
    let matched = false;

    if (/\brefund\b/.test(normalized)) {
      const refund = await refundPolicyTool.func({
        businessName, businessUrl,
        disputeReason: ""
      });
      outputs["refund-policy"] = refund;

      await storeBusinessPolicyVector("policy", businessName, disputeType, refund);

      collectedEvidences.push("Refund Policy");
      matched = true;
    }

    if (/\bterms\b/.test(normalized)) {
      const terms = await termsTool.func({
        businessName, businessUrl,
        disputeReason: ""
      });
      outputs["terms-and-conditions"] = terms;

      await storeBusinessPolicyVector("terms", businessName, disputeType, terms);

      collectedEvidences.push("Terms & Conditions");
      matched = true;
    }

    if (/\bcontract\b|\binvoice\b/.test(normalized)) {
      const invoice = await invoiceTool.func({
        status: '',
        amount: Number(charge.amount) ?? 0,
        items: [],
        chargeDate: ""
      });
      outputs["invoice-info"] = invoice;
      collectedEvidences.push("Invoice Details");
      matched = true;
    }

    if (!matched) {
      missingEvidences.push(item);
    }
  }

  return {
    ...state,
    toolDocuments: outputs,
    collectedEvidences: [...new Set(collectedEvidences)],
    missingEvidences,
    invoice: outputs["invoice-info"] || '',
    termsConditions: outputs["terms-and-conditions"] || '',
    policy: outputs["refund-policy"] || '',
  };
};

export const getResponseBusinessNode = async (state: typeof StripeDisputeAnnotation.State) => {
  const { customer, business, charge, messages, collectedEvidences, missingEvidences} = state;
  const disputeDetails: DisputeInfoType = getDisputeDetails(customer, business, charge);

  const disputeType = charge.disputeType?.toString().trim() || ''; 
  const productCategory = messages[messages.length - 2].content.toString().trim(); 
  const evidencesNeeded = missingEvidences
  
  const evidenceAvailable : string[] = collectedEvidences
  console.log(evidenceAvailable,evidencesNeeded)
  const response = await generateDisputeResponseBusiness(disputeDetails,disputeType,productCategory,evidencesNeeded,evidenceAvailable)
  messages.push(response);
  
  await sleep(10000);
  return new Command({
    update: {
      messages: [...messages], 
      businessResponse:response.content.toString(),

    },
  });
  
}

export const getResponsePaymentCompanyNode = async (state: typeof StripeDisputeAnnotation.State) => {
  
  const { customer, business, charge, messages, collectedEvidences, missingEvidences} = state;
  const disputeDetails: DisputeInfoType = getDisputeDetails(customer, business, charge);

  const disputeType = charge.disputeType?.toString().trim() || ''; 
  const productCategory = messages[messages.length - 2].content.toString().trim(); 
  const evidencesNeeded = missingEvidences
  
  const evidenceAvailable : string[] = collectedEvidences
  console.log(evidenceAvailable,evidencesNeeded)
  const response = await generateDisputeResponsePaymentCompany(disputeDetails,disputeType,productCategory,evidencesNeeded,evidenceAvailable)
  messages.push(response);
  
  await sleep(10000);
  return new Command({
    update: {
      messages: [...messages], 
    paymentCompanyResponse:response.content.toString(),
    },

  });
}

