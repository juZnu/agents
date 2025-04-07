
import { DisputeInfoType } from "../types/types";
import { openai } from "../models";
import {  
  classifyDisputePrompt, 
  classifyProductPrompt, 
  disputeDetailsPrompt, 
  BusinessResponsePrompt, 
  requiredEvidencePrompt, 
  paymentCompanyResponsePrompt } from "../utils/prompts";
import { sleep } from "../utils";
import { getTextEmbedding } from "../models/embeddings";
import { storeBusinessResponse } from "../models/vector";

export const generateDisputeType = async (transactionDetails: DisputeInfoType) : Promise<string> => {
  // Define the system and user prompts
  const systemMessages = [
    { role: "system", content: classifyDisputePrompt }
  ];
  
  const userMessage = [{ role: "user", content: disputeDetailsPrompt(transactionDetails) }];

  // Prepare the complete set of messages
  const messages = [...systemMessages, ...userMessage];

  // Use the invoke method to call the model
  const response = await openai.invoke(messages);
  await sleep(10000); // Adding a delay of 1 second between requests


  // Debug: Log the entire response object

  // Extract the generated response
  const generatedResponse : string = response?.content.toLocaleString();

  if (!generatedResponse) {
    throw new Error("Failed to generate response from OpenAI.");
  }
  return generatedResponse; // Return the generated response
};

export const generateCategoryType = async (transactionDetails: DisputeInfoType) => {
  // Define the system and user prompts
  const systemMessages = [
    { role: "system", content: classifyProductPrompt }
  ];
  
  const userMessage = [{ role: "user", content: disputeDetailsPrompt(transactionDetails) }];

  // Prepare the complete set of messages
  const messages = [...systemMessages, ...userMessage];

  // Use the invoke method to call the model

  const response = await openai.invoke(messages);
  await sleep(10000); // Adding a delay of 1 second between requests


  // Debug: Log the entire response object

  // Extract the generated response
  const generatedResponse = response.content;

  if (!generatedResponse) {
    throw new Error("Failed to generate response from OpenAI.");
  }

  return generatedResponse; 
};

export const generateDisputeResponseCustomer = async (
  disputeDetails: DisputeInfoType,
  productCategory: string,
  evidenceRequired: string,
) => {
  // Define the system and user prompts
  const systemMessages = [
    { role: "system", content: `${BusinessResponsePrompt}\n\n${requiredEvidencePrompt(disputeDetails.chargeCardType, disputeDetails.cahregebackReason, productCategory, evidenceRequired)}` },


    // { role: "system", content: BusinessResponsePrompt },
    // { role: "system", content: requiredEvidencePrompt(cardDetailsLast4, disputeCategory, productCategory, evidenceRequired) }
  ];

  const userMessage = [{ role: "user", content: disputeDetailsPrompt(disputeDetails,true) }];

  console.log("User Message:", userMessage);
  // Prepare the complete set of messages
  const messages = [...systemMessages, ...userMessage];

  await sleep(10000); // Adding a delay of 1 second between requests

  // Use the invoke method to call the model
  const response = await openai.invoke(messages);

  // Debug: Log the entire response object

  // Extract the generated response
  const generatedResponse = response.content;

  const businessResponseEmbedding = await getTextEmbedding(generatedResponse.toLocaleString());

  storeBusinessResponse(
    "business_responses",
    generatedResponse.toLocaleString(),
    businessResponseEmbedding,
    {
      disputeType: disputeDetails.cahregebackReason,
      paymentProvider: disputeDetails.chargeCardType,
      businessName: disputeDetails.businessName,
    }
  )

  console.log("Generated Business Response:", generatedResponse);

  if (!generatedResponse) {
    throw new Error("Failed to generate response from OpenAI.");
  }

  return generatedResponse; // Return the generated response
};

export const generateDisputeResponsePaymentCompany = async (
  disputeDetails: DisputeInfoType,
  productCategory: string,
  evidenceRequired: string,
) => {
  // Define the system and user prompts for payment company response
  const systemMessages = [
    { role: "system", content: `${paymentCompanyResponsePrompt}\n\n${requiredEvidencePrompt(disputeDetails.chargeCardType, disputeDetails.cahregebackReason, productCategory, evidenceRequired)}` },

  ];

  // const systemMessages = [
  //   { role: "system", content: paymentCompanyResponsePrompt },
  //   { role: "system", content: requiredEvidencePrompt(cardDetailsLast4, disputeCategory, productCategory, evidenceRequired) }
  // ];

  const userMessage = [{ role: "user", content: disputeDetailsPrompt(disputeDetails,true) }];

  // Prepare the complete set of messages
  const messages = [...systemMessages, ...userMessage];

  await sleep(10000); // Adding a delay of 1 second between requests
  
  // Use the invoke method to call the model
  const response = await openai.invoke(messages);

  // Debug: Log the entire response object

  // Extract the generated response
  const generatedResponse = response.content;
  console.log("Generated Payment Response:", generatedResponse);



  const paymentResponseEmbedding = await getTextEmbedding(generatedResponse.toLocaleString());

  storeBusinessResponse(
    "payment_responses",
    generatedResponse.toLocaleString(),
    paymentResponseEmbedding,
    {
      disputeType: disputeDetails.cahregebackReason,
      paymentProvider: disputeDetails.chargeCardType,
      businessName: disputeDetails.businessName,
    }
  )
  if (!generatedResponse) {
    throw new Error("Failed to generate response from OpenAI.");
  }

  return generatedResponse; // Return the generated response
};



