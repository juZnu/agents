import { DisputeInfoType } from "../types/types";
import { chargebackReasons, productTypes } from "./variables";

export const classifyDisputePrompt = `
You are a dispute analyst.

Based on the provided transaction details, dispute information, and business context (including the business name and type), your task is to classify the dispute into **one of the following categories**:

${chargebackReasons.map((category) => `- ${category}`).join("\n")}

Instructions:
1. Review the dispute details carefully, including:
   - The description of the dispute.
   - The payment method used (e.g., card type, last 4 digits).
   - The reason provided by the customer for the dispute (e.g., fraudulent charge, item not received).
   - The business name and type (e.g., AMC Theatres, a cinema chain).
2. Consider how the business's industry, products, and services might relate to the dispute. For example:
   - If the business is a subscription service, the dispute may be related to cancellation or non-receipt of services.
   - If the business sells physical products, disputes could relate to product issues or non-receipt.
   - If the business offers digital services, consider issues related to unauthorized charges or fraud.
3. Based on your review, choose the **most appropriate category** from the list of chargeback reasons above.
4. Only return the **category name exactly as it appears above**. Do not add any extra text, explanations, or formatting. Your response should be one of the categories listed, and nothing else.
   
Respond with:
(one of the category values exactly as listed above — no formatting, no labels, just the category name)

Only use the categories provided. Do not create new ones. Base your response strictly on the dispute details and the business context.
`;

export const classifyProductPrompt = `
You are a product analyst.

Based on the provided Dispute details, classify the product into **one** of the following categories:
${productTypes.map((type) => `- ${type[0]} (${type[1]})`).join("\n")}

Instructions:
1. Carefully read the Dispute details.
2. Select the **most fitting product category** from the list above.
3. Return **ONLY** the product category name (the first value in each list item). Do not include explanations or extra text.

Respond with:
(one of the following exactly as listed: physical_product, digital_product_or_service, offline_service)

Use only the provided categories. Do not create new ones. Base your decision strictly on the transaction and product details.
`;

export const disputeDetailsPrompt = (disputeDetails: DisputeInfoType) => {
  return `
Here are the details of the dispute:

- **Customer Name**: ${disputeDetails.customerName}
- **Customer Email**: ${disputeDetails.customerEmail}
- **Customer Phone**: ${disputeDetails.customerPhone}
- **Charge Amount**: $${disputeDetails.chargeAmount.toFixed(2)}
- **Charge Card Type**: ${disputeDetails.chargeCardType}
- **Charge Location**: ${disputeDetails.chargeLocation}
- **Charge Date**: ${disputeDetails.chargeDateCreated}
- **Card Last 4 Digits**: ${disputeDetails.chargeLast4}
- **Business Name**: ${disputeDetails.businessName}
- **Business Website**: ${disputeDetails.businessWebsite}
`;
};

export const disputeDetailsPromptEnhanced = (
  disputeDetails: DisputeInfoType,
  disputeType: string,
  productCategory: string,
  evidencesNeeded: string[],
  evidenceAvailable: string[]
) => {
  return `
Here are the details of the dispute:

- **Customer Name**: ${disputeDetails.customerName}
- **Customer Email**: ${disputeDetails.customerEmail}
- **Customer Phone**: ${disputeDetails.customerPhone}
- **Charge Amount**: $${disputeDetails.chargeAmount.toFixed(2)}
- **Charge Card Type**: ${disputeDetails.chargeCardType}
- **Charge Location**: ${disputeDetails.chargeLocation}
- **Charge Date**: ${disputeDetails.chargeDateCreated}
- **Card Last 4 Digits**: ${disputeDetails.chargeLast4}
- **Business Name**: ${disputeDetails.businessName}
- **Business Website**: ${disputeDetails.businessWebsite}

- **Dispute Type**: ${disputeType}
- **Product Category**: ${productCategory}

- **Evidence Currently Available**:
${evidenceAvailable.length > 0 ? evidenceAvailable.map(evidence => `- ${evidence}`).join('\n') : '- None provided'}

- **evidences Still Needed**: ${evidencesNeeded.map(evidence => `- ${evidence}`).join('\n') || ''}
`;
};

export const getRequiredEvidencesPrompt = (searchResultsContent: string) => {
  return `
You are an expert in analyzing dispute evidence.
Based on the following information extracted from search results about dispute evidence, identify the key pieces of evidence a merchant should submit to effectively respond to a customer dispute.
---
${searchResultsContent}
---
Output Format:
- Return a **concise, comma-separated list**
- Use **clear, human-readable titles** (e.g., “Refund Policy”, not “refund_policy”)
- Do **not** include explanations or extra commentary
---
Identify only the essential compelling evidence required to clearly demonstrate that this dispute is invalid. Include terms and conditions, refund policy, and invoice details if they are relevant and applicable to this dispute. Avoid general recommendations and provide actionable, specific evidence directly relevant to this case.
Return a concise, comma-separated list of these critical evidence items.
`;
};

export const requiredEvidencePrompt = (
  cardType: string,
  disputeCategory: string,
  productType: string,
  evidences :string,
) => {
  return `You are a chargeback specialist.

        Here are the pieces of evidence that are typically required for this type of dispute:
        - **Card Type**: ${cardType}
        - **Dispute Category**: ${disputeCategory}
        - **Product Type**: ${productType}
        
        - **Required Evidence for This Case:**
          ${evidences}`;
};


export const BusinessResponsePrompt = `
You are a customer service agent assisting with chargeback dispute investigations. Your objective is to draft a clear and concise response to the business regarding a customer dispute.

Hi (business_name),

This email concerns the dispute initiated by (disputer_name) for a transaction with the following details:

- Customer: (disputer_name) - (disputer_email)
- Transaction Amount: (amount)
- Payment Method: (payment_method) (Card ending in: (card_digits))
- Reason for Dispute: (dispute_reason)
- Product/Service: (product_type)

Based on the dispute details, here is the evidence we currently have:

Existing Evidence:
- (Format the provided list of existing evidence into clear bullet points.)

Potential Supporting Evidence:
To further strengthen your case, consider providing any of the following, if available:

- (Format the provided list of needed evidence into clear bullet points.)

Providing any of the above can increase the likelihood of a favorable outcome for this dispute.

We will proceed with the evidence currently available. Please let us know if you have any questions or if you can provide any of the potential supporting evidence listed above.

Thank you for your prompt attention to this matter.

Best regards,
Safe Service Team
`;

export const paymentCompanyResponsePrompt = `
You are a customer service agent handling chargeback disputes. Your objective is to draft a response to the payment company, providing the available evidence for the dispute.

Hi (payment_method from the user),

This email is regarding the dispute raised by (disputer_name) concerning the transaction with (business_name). Below are the key details of the dispute:

- Dispute Reason**: (dispute_reason)
- Amount: (amount)
- Card Digits: (card_digits)
- Product Type: (product_type)
- Disputer Name: (disputer_name)
- Disputer Email: (disputer_email)

We have the following evidence available to support the validity of this transaction and refute the dispute:

Supporting Evidence:
- (evidence_1)
- (evidence_2)
- (evidence_3)

We believe the provided evidence clearly demonstrates [**Here, you would add a concise statement summarizing how the evidence supports your case. For example:** the customer received the purchased goods, the service was provided as agreed, the charge was authorized by the cardholder, etc.].

We trust that this information will be sufficient to resolve the dispute in our favor. Please let us know if you require any clarification on the provided documents.

Thank you for your cooperation in this matter.

Best regards,
Safe Service Team
`;

export function formatBusinessResponse({
  businessName,
  disputerName,
  disputerEmail,
  amount,
  paymentMethod,
  cardDigits,
  disputeReason,
  productType,
  evidenceAvailable,
  evidencesNeeded
}: {
  businessName: string;
  disputerName: string;
  disputerEmail: string;
  amount: number;
  paymentMethod: string;
  cardDigits: string;
  disputeReason: string;
  productType: string;
  evidenceAvailable: string[];
  evidencesNeeded: string[];
}): string {
  return `
Hi ${businessName},

We’ve gathered the following information regarding an open chargeback dispute that needs your attention:

Customer Details
* Email: ${disputerEmail}
* Name / Phone Number: ${disputerName || 'Not provided'}

Dispute Summary
* Amount: $${(amount / 100).toFixed(2)} USD
* Payment Method: ${paymentMethod} ending in ${cardDigits}
* Reason: ${disputeReason}
* Product Type: ${productType}

Evidence Collected So Far
${evidenceAvailable.length > 0 ? evidenceAvailable.map((e, i) => `${i + 1}. ${e}`).join('\n') : '1. None'}

Missing Evidence That Could Strengthen the Case
${evidencesNeeded.length > 0 ? evidencesNeeded.map((e, i) => `${i + 1}. ${e}`).join('\n') : 'None'}

Next Steps
Since this dispute is categorized as ${disputeReason.toLowerCase()} and the product is ${productType.toLowerCase()}, Stripe recommends submitting compelling evidence to prove that:
* The cardholder authorized the transaction.
* The product or service was provided, accessed, or used by the cardholder.
* Any supporting logs or records (e.g. IP addresses, login timestamps, user activity) are available.

To help strengthen our response, could you please confirm the following:
1. Do you have any customer communications (emails, messages, support tickets)?
2. Do you have logs or records showing the customer accessed or used the digital service?

Final submission deadline: [Insert Deadline Here]
• That gives us [X] days to respond.
• We plan to submit the dispute response one day before expiration using the evidence we’ve collected.

Even if this information isn’t available, we will proceed and submit the evidence we currently have.

Let us know if you’re able to send any additional documents or insights.

Thanks,
Safe App Disputes Team
  `.trim();
}
