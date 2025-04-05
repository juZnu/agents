
import { DisputeInfoType } from "../types/types";
import { openai } from "../models";
import { chargebackClassificationAndEvidencePrompt, disputeDetailsPrompt, outputStructurePrompt } from "../utils/prompts";

export const generateDisputeResponse = async (transactionDetails: DisputeInfoType) => {
  // Define the system and user prompts
  const systemMessages = [
    { role: "system", content: outputStructurePrompt() },
    { role: "system", content: chargebackClassificationAndEvidencePrompt() }
  ];

  const userMessage = [{ role: "user", content: disputeDetailsPrompt(transactionDetails) }];

  // Prepare the complete set of messages
  const messages = [...systemMessages, ...userMessage];

  // Use the invoke method to call the model
  const response = await openai.invoke(messages);

  // Debug: Log the entire response object
  console.log("OpenAI Response:", response);

  // Extract the generated response
  const generatedResponse = response.content;

  if (!generatedResponse) {
    throw new Error("Failed to generate response from OpenAI.");
  }

  return generatedResponse; // Return the generated response
};
