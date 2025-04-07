import { ToolNode } from "@langchain/langgraph/prebuilt";
import { generateCategoryType, generateDisputeResponseCustomer, generateDisputeResponsePaymentCompany, generateDisputeType } from "../actions";
import { DisputeEvidenceInfoType, DisputeInfoType, ResponseInfoType } from "../types/types";
import { Command } from "@langchain/langgraph";
import { StripeDisputeAnnotation } from "../types/annotation";
import { getDisputeDetails, getEvidenceRequired, sleep } from "../utils";


// Define the state machine and workflow
const toolNode = new ToolNode([]);

// Define the initial node for classification (product category and dispute type)
export const classifyDisputeAndProductNode = async (state: typeof StripeDisputeAnnotation.State) => {
  // Call functions to classify dispute type and product category
  const {customer, business, charge} = state;

  const disputeDetails: DisputeInfoType = getDisputeDetails(customer,business,charge); 
  
  let disputeType : string = charge.cahrgeback_reason?.toString() || "";

  if( !charge.cahrgeback_reason){
    disputeType = await generateDisputeType(disputeDetails); 
  }
  const productCategory = await generateCategoryType(disputeDetails); 
  
  const evidenceRequired = getEvidenceRequired(
    charge.card_type?.toString() || "",
    charge.cahrgeback_reason?.toString() || "",
    productCategory.toString()
  );

  await sleep(2000); // Simulate some processing time

  return new Command({
    update :{
    productCategory : productCategory,
    evidenceRequired: evidenceRequired,
  }});
};


export const disputeResponseCustomerNode = async (
  state: typeof StripeDisputeAnnotation.State
) => {
  // Destructure state to extract the specific fields needed for the response generation
  const { customer, business, charge, productCategory, evidenceRequired } = state;

  const disputeDetails: DisputeInfoType = getDisputeDetails(customer,business,charge); 
  
  // Call the function to generate the customer response using the destructured fields
  const response = await generateDisputeResponseCustomer(
    disputeDetails,
    evidenceRequired,
    productCategory,
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
  const { customer, business, charge, productCategory, evidenceRequired} = state;

  const disputeDetails: DisputeInfoType = getDisputeDetails(customer,business,charge); 

  
  // Call the function to generate the payment company response using the destructured fields
  const response = await generateDisputeResponsePaymentCompany(
    disputeDetails,
    evidenceRequired,
    productCategory,
  );
  // Return the generated response for the payment company
  return new Command({
    update: {
      messages: [...state.messages,response] 
    }
  });
};
