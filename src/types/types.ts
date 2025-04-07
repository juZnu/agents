// Define common types for customer, charge, and business
export type StripeCustomerType = {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  connection_id?: string;
  date_created?: string;
  provider_id?: string | null;
  user_id?: string;
  workspace_id?: string | null;
};

export type StripeChargeType = {
  id?: string;
  amount?: number;
  card_type?: string;
  location?: string;
  connection_id?: string;
  customer?: string | null;
  customer_id?: string;
  date_created?: string;
  cahrgeback_reason?: string;
  last4?: string;
  provider_id?: string | null;
  user_id?: string;
  workspace_id?: string | null;
  evidences?: string[];
};

export type BusinessType = {
  companyName?: string;
  websiteUrl?: string;
  industry?: string;
};

export interface DisputeInfoType {
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  chargeId: string;
  chargeAmount: number;
  chargeCardType: string;
  chargeLocation: string;
  chargeDateCreated: string;
  cahregebackReason: string;
  chargeLast4: string;
  businessName: string;
  businessWebsite: string;
  businessIndustry: string;
  evidence?: string[]; // List of evidence items
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


