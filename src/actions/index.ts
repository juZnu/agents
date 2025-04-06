
import { DisputeInfoType } from "../types/types";
import { openai } from "../models";
import {  
  classifyDisputePrompt, 
  classifyProductPrompt, 
  disputeDetailsPrompt, 
  BusinessResponsePrompt, 
  requiredEvidencePrompt, 
  paymentCompanyResponsePrompt } from "../utils/prompts";

export const generateDisputeType = async (transactionDetails: DisputeInfoType) => {
  // Define the system and user prompts
  const systemMessages = [
    { role: "system", content: classifyDisputePrompt }
  ];

  const userMessage = [{ role: "user", content: disputeDetailsPrompt(transactionDetails) }];

  // Prepare the complete set of messages
  const messages = [...systemMessages, ...userMessage];

  // Use the invoke method to call the model
  const response = await openai.invoke(messages);

  // Debug: Log the entire response object
  console.log("OpenAI Response1:", response.content);

  // Extract the generated response
  const generatedResponse = response.content;

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

  // Debug: Log the entire response object
  console.log("OpenAI Response2:", response.content);

  // Extract the generated response
  const generatedResponse = response.content;

  if (!generatedResponse) {
    throw new Error("Failed to generate response from OpenAI.");
  }

  return generatedResponse; // Return the generated response
};

export const generateDisputeResponseCustomer = async (
  description: string,
  cardDetailsLast4: string,
  paymentMethod: string,
  amount: string,
  currency: string,
  chargebackReason: string,
  companyName: string,
  disputerName: string,
  websiteUrl: string,
  disputeCategory: string,
  productCategory: string,
  evidenceRequired: string
) => {
  // Define the system and user prompts
  const systemMessages = [
    { role: "system", content: BusinessResponsePrompt },
    { role: "system", content: requiredEvidencePrompt(cardDetailsLast4, disputeCategory, productCategory, evidenceRequired) }
  ];

  const userMessage = [{ role: "user", content: disputeDetailsPrompt({ description, cardDetailsLast4, paymentMethod, amount, currency, chargebackReason, companyName, disputerName, websiteUrl }) }];

  // Prepare the complete set of messages
  const messages = [...systemMessages, ...userMessage];

  // Use the invoke method to call the model
  const response = await openai.invoke(messages);

  // Debug: Log the entire response object
  console.log("OpenAI Response Customer:", response.content);

  // Extract the generated response
  const generatedResponse = response.content;

  if (!generatedResponse) {
    throw new Error("Failed to generate response from OpenAI.");
  }

  return generatedResponse; // Return the generated response
};

// Updated generateDisputeResponsePaymentCompany function
export const generateDisputeResponsePaymentCompany = async (
  description: string,
  cardDetailsLast4: string,
  paymentMethod: string,
  amount: string,
  currency: string,
  chargebackReason: string,
  companyName: string,
  disputerName: string,
  websiteUrl: string,
  disputeCategory: string,
  productCategory: string,
  evidenceRequired: string
) => {
  // Define the system and user prompts for payment company response
  const systemMessages = [
    { role: "system", content: paymentCompanyResponsePrompt },
    { role: "system", content: requiredEvidencePrompt(cardDetailsLast4, disputeCategory, productCategory, evidenceRequired) }
  ];

  const userMessage = [{ role: "user", content: disputeDetailsPrompt({ description, cardDetailsLast4, paymentMethod, amount, currency, chargebackReason, companyName, disputerName, websiteUrl }) }];

  // Prepare the complete set of messages
  const messages = [...systemMessages, ...userMessage];

  // Use the invoke method to call the model
  const response = await openai.invoke(messages);

  // Debug: Log the entire response object
  console.log("OpenAI Response Payment:", response.content);

  // Extract the generated response
  const generatedResponse = response.content;

  if (!generatedResponse) {
    throw new Error("Failed to generate response from OpenAI.");
  }

  return generatedResponse; // Return the generated response
};



