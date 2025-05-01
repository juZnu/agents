
import { DisputeInfoType } from "../types/types";

import { openai } from "../models";
import {  
  classifyDisputePrompt, 
  classifyProductPrompt, 
  disputeDetailsPrompt, 
  BusinessResponsePrompt, 
  requiredEvidencePrompt, 
  paymentCompanyResponsePrompt, 
  getRequiredEvidencesPrompt,
  disputeDetailsPromptEnhanced} from "../utils/prompts";

import { performTavilySearch } from "../models/Tavily";

export const generateDisputeType = async (transactionDetails: DisputeInfoType, cardType: string) => {
  
  const QUERY = 'I want all dispute categories with their description';
  // Base domain URL
  const BASE_URL = 'https://docs.stripe.com/disputes/reason-codes-defense-requirements';
  // Conditionally add the card network if cardType is provided
  const DOMAINS: string[] = cardType ? [`${BASE_URL}?card-network=${cardType}`] : [BASE_URL];

  const MAX_RESULTS = 1;

  const tavilyResult = await performTavilySearch({
    query: QUERY,
    domains: DOMAINS,
    max_results: MAX_RESULTS
  });

  const disputeContent = `${tavilyResult.results[0].content}\n\n${tavilyResult.results[0].rawContent}`;

  const systemMessages = [
    { role: "system", content: `${classifyDisputePrompt}\n\n use the below content for guidance to categorize the dispute \n${disputeContent}` }
  ];
  const userMessage = [{ role: "user", content: disputeDetailsPrompt(transactionDetails) }];

  const messages = [...systemMessages, ...userMessage];

  const response = await openai.invoke(messages);
  console.log("Response from OpenAI 1:", response.content);

  return response; 
};


export const generateCategoryType = async (transactionDetails: DisputeInfoType) => {

  const systemMessages = [
    { role: "system", content: classifyProductPrompt }
  ];

  const userMessage = [{ role: "user", content: disputeDetailsPrompt(transactionDetails) }];

  const messages = [...systemMessages, ...userMessage];

  const response = await openai.invoke(messages);

  console.log("Response from OpenAI 2:", response.content);
  
  return response; 
};


export const generateEvidences = async (transactionDetails: DisputeInfoType, cardType: string, disputeType: string, productType: string) => {

  const normalizedProductType = productType.toLowerCase().replace(/ /g, "_");
  const normalizedDisputeType = disputeType.toLowerCase().replace(/ /g, "_");
  const normalizedCardType = cardType.toLowerCase().replace(/ /g, "_");

  const BASE_URL = 'https://docs.stripe.com/disputes/categories';
  const dynamicURL = `${BASE_URL}?dispute-category=${normalizedDisputeType}&card-network=${normalizedCardType}&evidence-for=${normalizedProductType}`;

  const QUERY = `
  Provide a list of the required evidence for this type of dispute
  Product Type: ${productType}
  Card Type: ${cardType}
  Reason for Dispute: ${disputeType}
  `;


  const DOMAINS: string[] = [dynamicURL];

  const MAX_RESULTS = 4;

  const tavilyResult = await performTavilySearch({
    query: QUERY,
    domains: DOMAINS,
    max_results: MAX_RESULTS
  });

  const evidenceHelp = tavilyResult.results.map((item) => item.content).join('\n')

  const systemMessages = [
    { role: "system", content: getRequiredEvidencesPrompt(evidenceHelp) }
  ];
  const userMessage = [{ role: "user", content: disputeDetailsPrompt(transactionDetails) }];
  const messages = [...systemMessages, ...userMessage];

  const response = await openai.invoke(messages);

  console.log("Response from OpenAI 3:", response.content);
  
  return response; 

};


export const generateDisputeResponseBusiness = async (transactionDetails:DisputeInfoType,disputeType:string,productCategory:string,evidencesNeeded:string[],evidenceAvailable:string[]) => {

  const systemMessages = [
    { role: "system", content: BusinessResponsePrompt }
  ];

  const userMessage = [{ role: "user", content: disputeDetailsPromptEnhanced(transactionDetails,disputeType,productCategory,evidencesNeeded,evidenceAvailable) }];

  const messages = [...systemMessages, ...userMessage];

  const response = await openai.invoke(messages);

  
  return response; 

}

export const generateDisputeResponsePaymentCompany =  async (transactionDetails:DisputeInfoType,disputeType:string,productCategory:string,evidencesNeeded:string[],evidenceAvailable:string[]) => {
  

  const systemMessages = [
    { role: "system", content: paymentCompanyResponsePrompt }
  ];

  const userMessage = [{ role: "user", content: disputeDetailsPromptEnhanced(transactionDetails,disputeType,productCategory,evidencesNeeded,evidenceAvailable) }];

  const messages = [...systemMessages, ...userMessage];

  const response = await openai.invoke(messages);
  
  return response; 
};
