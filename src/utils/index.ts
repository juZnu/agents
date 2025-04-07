import { BusinessType, DisputeInfoType, StripeChargeType, StripeCustomerType } from "../types/types";
import { disputeRequirements } from "./variables"; // Assuming disputeRequirements is imported from variables.js

export const getEvidenceRequired = (cardType: string, disputeType: string, categoryType: string): string => {

    // Extract the evidence list for the matched category
    const evidenceList = disputeRequirements[cardType.trim()][disputeType.trim()]['evidence'][categoryType.trim()];

    // Return all the first items from the evidence list
    return evidenceList.map(item => item[0]).join('\n') || ""; 
};


export function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export const getDisputeDetails = (customer: StripeCustomerType, business: BusinessType, charge: StripeChargeType): DisputeInfoType => {
  return {
    customerId: customer.id || "",
    customerName: customer.name || "",
    customerEmail: customer.email || "",
    customerPhone: customer.phone || "",
    chargeId: charge.id || "",
    
    chargeAmount: charge.amount || 0,
    chargeCardType: charge.card_type || "",
    chargeLocation: charge.location || "",
    chargeDateCreated: charge.date_created || "",
    chargeLast4: charge.last4 || "",
    cahregebackReason: charge.cahrgeback_reason || "",
    
    businessName: business.companyName || "",
    businessWebsite: business.websiteUrl || "",
    businessIndustry: business.industry || "",

    evidence: charge.evidences || [],
  };
};