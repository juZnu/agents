export interface DisputeInfoType{
  description: string;
  cardDetailsLast4: string;
  paymentMethod: string;
  amount: string;
  currency: string;
  chargebackReason: string;
  companyName: string;
  disputerName: string;
  websiteUrl: string;
};

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
