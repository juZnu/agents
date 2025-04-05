import { ToolNode } from "@langchain/langgraph/prebuilt";
import {  DisputeInfoType } from "../types/types";
import { generateDisputeResponse } from "../actions";

// Define the state machine and workflow (as before)
const toolNode = new ToolNode([]);

// Function to call the model for generating dispute response
export const generateDisputeResolution = async (state: DisputeInfoType) => {
  console.log("Dispute Info:", state);
  const result = await generateDisputeResponse(state);
  console.log("Model result:", result);

  return { messages: typeof result === "string" ? result : JSON.stringify(result) };
};
