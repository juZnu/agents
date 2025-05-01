import { BusinessType, DisputeInfoType, StripeChargeType, StripeCustomerType } from "../types/types";
import { disputeRequirements } from "./variables"; // Assuming disputeRequirements is imported from variables.js

export const getEvidenceRequired = (cardType: string, disputeType: string, categoryType: string): string => {

    // Extract the evidence list for the matched category

    const evidenceList = disputeRequirements[cardType.trim()][disputeType.trim()]['evidence'][categoryType.trim()];
    const evidences = evidenceList.map(item => ` - ${item[0]}`).join('\n') 
    // Return all the first items from the evidence list
    return evidences|| ""; 
};


export function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export const getDisputeDetails = (customer: StripeCustomerType, business: BusinessType, charge: StripeChargeType): DisputeInfoType => {
  return {
    // Customer Information
    customerName: customer.name || "",
    customerEmail: customer.email || "",
    customerPhone: customer.phone || "",
    customerAddress: customer.address || "", // Using customer address from StripeCustomerType

    // Charge Information
    chargeAmount: charge.amount || 0,
    chargeCardType: charge.card_type || "",
    chargeLocation: charge.location || "",
    chargeDateCreated: charge.date_created || "",
    chargeLast4: charge.last4 || "",


    // Business Information
    businessName: business.companyName || "",
    businessWebsite: business.websiteUrl || "",
  };
};

export async function generatePDF(content: string, fileName: string): Promise<string> {
  const url = `https://chargebackdoc.sreenivaspagadala1999.workers.dev/generate-pdf/${fileName}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ "content" : wrapMultilineText(content, 70) }),
  });

  if (!response.ok) {
    throw new Error(`Failed to generate PDF. Status: ${response.status}`);
  }

  const data = await response.json();
  return data.file_url; // correctly returning file_url
}


export function wrapMultilineText(text: string, maxLength: number): string {
  const wrappedLines: string[] = [];

  // Split by existing newlines first
  const lines = text.split('\n');

  for (const line of lines) {
    const words = line.split(' ');
    let currentLine = '';

    for (const word of words) {
      if ((currentLine + word).length > maxLength) {
        wrappedLines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine += word + ' ';
      }
    }

    if (currentLine.trim()) {
      wrappedLines.push(currentLine.trim());
    }
  }

  return wrappedLines.join('\n');
}
