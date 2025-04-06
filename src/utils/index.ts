import { disputeRequirements } from "./variables"; // Assuming disputeRequirements is imported from variables.js

export const getEvidenceRequired = (cardType: string, disputeType: string, categoryType: string): string => {
  // Check if the necessary properties exist in disputeRequirements
  const cardDispute = disputeRequirements[cardType]?.[disputeType];

  if (cardDispute && cardDispute.evidence[categoryType]) {
    // Extract the evidence list for the matched category
    const evidenceList = cardDispute.evidence[categoryType];

    // Return all the first items from the evidence list
    return evidenceList.map(item => item[0]).join('\n');
  }

  // Return an empty string or message if no evidence found
  return "No evidence found for the given parameters.";
};
