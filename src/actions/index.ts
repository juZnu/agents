
import { BusinessType, DisputeInfoType, StripeChargeType, StripeCustomerType } from "../types/types";

import { openai } from "../models";
import {  
  classifyDisputePrompt, 
  classifyProductPrompt, 
  disputeDetailsPrompt, 
  BusinessResponsePrompt, 
  requiredEvidencePrompt, 
  paymentCompanyResponsePrompt, 
  getRequiredEvidencesPrompt,
  disputeDetailsPromptEnhanced,
  formatBusinessResponse} from "../utils/prompts";

import { performTavilySearch } from "../models/Tavily";

// export const generateDisputeType = async (transactionDetails: DisputeInfoType, cardType: string) => {
  
//   const QUERY = 'I want all dispute categories with their description';
//   // Base domain URL
//   const BASE_URL = 'https://docs.stripe.com/disputes/reason-codes-defense-requirements';
//   // Conditionally add the card network if cardType is provided
//   const DOMAINS: string[] = cardType ? [`${BASE_URL}?card-network=${cardType}`] : [BASE_URL];

//   const MAX_RESULTS = 1;

//   const tavilyResult = await performTavilySearch({
//     query: QUERY,
//     domains: DOMAINS,
//     max_results: MAX_RESULTS
//   });

//   const disputeContent = `${tavilyResult.results[0].content}\n\n${tavilyResult.results[0].rawContent}`;

//   const systemMessages = [
//     { role: "system", content: `${classifyDisputePrompt}\n\n use the below content for guidance to categorize the dispute \n${disputeContent}` }
//   ];
//   const userMessage = [{ role: "user", content: disputeDetailsPrompt(transactionDetails) }];

//   const messages = [...systemMessages, ...userMessage];

//   const response = await openai.invoke(messages);
//   console.log("Response from OpenAI 1:", response.content);

//   return response; 
// };


// export const generateCategoryType = async (transactionDetails: DisputeInfoType) => {

//   const systemMessages = [
//     { role: "system", content: classifyProductPrompt }
//   ];

//   const userMessage = [{ role: "user", content: disputeDetailsPrompt(transactionDetails) }];

//   const messages = [...systemMessages, ...userMessage];

//   const response = await openai.invoke(messages);

//   console.log("Response from OpenAI 2:", response.content);
  
//   return response; 
// };


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


export const generateDisputeResponseBusiness = async (
  customer: StripeCustomerType,
  business: BusinessType,
  charge: StripeChargeType,
  disputeType: string,
  productCategory: string,
  evidencesNeeded: string[],
  evidenceAvailable: string[]
) => {
  const response = formatBusinessResponse({
    businessName: business.companyName || 'Business',
    disputerName: customer.name || 'Customer',
    disputerEmail: customer.email || 'Not provided',
    amount: charge.amount || 0,
    paymentMethod: charge.card_type || 'Unknown',
    cardDigits: charge.last4 || 'XXXX',
    disputeReason: disputeType,
    productType: productCategory,
    evidenceAvailable,
    evidencesNeeded
  });

  return response;
};

export const generateBusinessResponseWithAI = async ({
  customer,
  business,
  charge,
  disputeType,
  productCategory,
  evidenceAvailable,
  evidencesNeeded
}: {
  customer: StripeCustomerType;
  business: BusinessType;
  charge: StripeChargeType;
  disputeType: string;
  productCategory: string;
  evidenceAvailable: string[];
  evidencesNeeded: string[];
}) => {

  const dueDate = charge.duedata || '[Insert Due Date]';
  const prompt = `
  You are a dispute assistant. Write a personalized message to the business (${business.companyName}) about a Stripe dispute.
  Start with "Hi" and use a clear and professional tone. Do not include a subject line.
  Include:
  - Customer name: ${customer.name || 'N/A'}
  - Email: ${customer.email || 'N/A'}
  - Amount: $${(charge.amount || 0) / 100}
  - Card Type: ${charge.card_type || 'N/A'} ending in ${charge.last4 || 'XXXX'}
  - Reason: ${disputeType}
  - Product Type: ${productCategory}
  -Dispute Due Date: ${dueDate} 

  Collected Evidence (bullet list):
  ${evidenceAvailable.length ? evidenceAvailable.map(e => `- ${e}`).join("\n") : '- None'}

  Next Steps (list the missing evidence items and frame them as documents that would help strengthen the response):
  ${evidencesNeeded.length ? evidencesNeeded.map(e => `- ${e}`).join("\n") : '- None'}

  Close with a friendly, helpful sentence from the Safe App Disputes Team.
  `;

  const aiResponse = await openai.invoke([
    {
      role: "system",
      content: "You are a helpful assistant that writes clear, professional dispute emails for businesses."
    },
    {
      role: "user",
      content: prompt
    }
  ]);

  return aiResponse.content.toString();
};

export const generateDisputeResponsePaymentCompany = async (
  transactionDetails: DisputeInfoType,
  disputeType: string,
  productCategory: string,
  evidencesNeeded: string[],
  evidenceAvailable: string[]
) => {
  const systemMessages = [
    { role: "system", content: paymentCompanyResponsePrompt }
  ];

  const userMessage = [
    {
      role: "user",
      content: `
Please draft a formal and professional message to the payment company explaining why this dispute should be resolved in favor of the business. Do not refer to the customer being wrong or ask for further clarification. Use only the following collected evidence to logically support the position:

- Customer: ${transactionDetails.customerName} (${transactionDetails.customerEmail})
- Amount: $${transactionDetails.chargeAmount}
- Card Type: ${transactionDetails.chargeCardType} ending in ${transactionDetails.chargeLast4}
- Dispute Reason: ${disputeType}
- Product Type: ${productCategory}
- Business Name: ${transactionDetails.businessName}

Collected Evidence:
${evidenceAvailable.length ? evidenceAvailable.map(e => `- ${e}`).join('\n') : '- None'}

The response should maintain a professional tone and represent the business's position clearly, without mentioning "we" or "our". Use the business name when appropriate.

Conclude respectfully and formally.
`
    }
  ];

  const messages = [...systemMessages, ...userMessage];

  const response = await openai.invoke(messages);
  return response;
};
