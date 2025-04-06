import { ToolNode } from "@langchain/langgraph/prebuilt";
import { generateCategoryType, generateDisputeResponseCustomer, generateDisputeResponsePaymentCompany, generateDisputeType } from "../actions";
import { DisputeEvidenceInfoType, DisputeInfoType, ResponseInfoType } from "../types/types";
import { Command } from "@langchain/langgraph";
import { StripeDisputeAnnotation } from "../types/annotation";
import { getEvidenceRequired } from "../utils";


// Define the state machine and workflow
const toolNode = new ToolNode([]);

// Define the initial node for classification (product category and dispute type)
export const classifyDisputeAndProductNode = async (state: typeof StripeDisputeAnnotation.State) => {
  // Call functions to classify dispute type and product category
  console.log("State in classifyDisputeAndProductNode:", state);
  const {paymentMethod} = state;
  const disputeType = await generateDisputeType(state); 
  const productCategory = await generateCategoryType(state); 
  const evidenceRequired = getEvidenceRequired(
    paymentMethod,
    disputeType.toString(),
    productCategory.toString()
  );
  return new Command({
    update :{
    disputeCategory : disputeType, 
    productCategory : productCategory,
    evidenceRequired: evidenceRequired,
  }});
};

export const disputeResponseCustomerNode = async (
  state: typeof StripeDisputeAnnotation.State
) => {
  // Destructure state to extract the specific fields needed for the response generation
  const { description, cardDetailsLast4, paymentMethod, amount, currency, chargebackReason, companyName, disputerName, websiteUrl, disputeCategory, productCategory, evidenceRequired } = state;

  // Call the function to generate the customer response using the destructured fields
  const response = await generateDisputeResponseCustomer(
    description, 
    cardDetailsLast4, 
    paymentMethod, 
    amount, 
    currency, 
    chargebackReason, 
    companyName, 
    disputerName, 
    websiteUrl, 
    disputeCategory, 
    productCategory, 
    evidenceRequired
  );

  // Return the generated response for the customer
  return new Command({
    update: {
      messages: [...state.messages,response] 
    }
  });
};


export const disputeResponsePaymentCompanyNode = async (
  state: typeof StripeDisputeAnnotation.State
) => {
  // Destructure state to extract the specific fields needed for the response generation
  const { description, cardDetailsLast4, paymentMethod, amount, currency, chargebackReason, companyName, disputerName, websiteUrl, disputeCategory, productCategory, evidenceRequired } = state;

  // Call the function to generate the payment company response using the destructured fields
  const response = await generateDisputeResponsePaymentCompany(
    description, 
    cardDetailsLast4, 
    paymentMethod, 
    amount, 
    currency, 
    chargebackReason, 
    companyName, 
    disputerName, 
    websiteUrl, 
    disputeCategory, 
    productCategory, 
    evidenceRequired
  );

  // Return the generated response for the payment company
  return new Command({
    update: {
      messages: [...state.messages,response] 
    }
  });
};
