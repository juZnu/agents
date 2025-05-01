// Define common types for customer, charge, and business
export type StripeCustomerType = {
  address?: string;
  connection_id?: string;
  date_created?: string; // Date as a string (you can parse it to Date type if needed)
  email?: string;
  id?: string;
  name?: string;
  phone?: string;
  provider_id?: string | null;
  user_id?: string;
  workspace_id?: string | null;
};

export type StripeChargeType = {
  amount?: number;
  card_type?: string;
  connection_id?: string;
  customer?: string | null;
  date_created?: string; // Date as a string (you can parse it to Date type if needed)
  id?: string;
  last4?: string;
  location?: string;
  provider_id?: string | null;
  user_id?: string;
  workspace_id?: string | null;
  disputeType?: string; // Added disputeType to the charge type
};


export type BusinessType = {
  companyName?: string;
  websiteUrl?: string; 
  companyType?: string; 
};

export interface DisputeInfoType {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;  // Added customer address
  chargeAmount: number;
  chargeCardType: string;
  chargeLocation: string;
  chargeDateCreated: string;
  chargeLast4: string;
  businessName: string;
  businessWebsite: string;
}


export interface DisputeEvidenceInfoType extends DisputeInfoType {
  disputeCategory: string;   // The category of the dispute (e.g., Fraudulent, Product Issue)
  productCategory: string;   // The category of the product (e.g., Physical Product, Digital Product)
  evidenceRequired: string;  // List of required evidence (as a string, or array if preferred)
};

export interface ResponseInfoType {
  transactionDetails: DisputeInfoType;  
  cardType: string;
  disputeCategory: string;
  productType: string;
  evidences: string;
}


// Type for the evidence list items
type EvidenceItem = [string, string];

// Type for the evidence object containing different categories of evidence
type EvidenceCategory = Record<string, EvidenceItem[]>;

// Type for each dispute type which includes system codes and evidence categories
type DisputeType = {
  system_codes: string[];
  evidence: EvidenceCategory;
};

// Type for the full dispute requirements, which includes different card types and dispute types
export type DisputeRequirements = Record<string, Record<string, DisputeType>>;


