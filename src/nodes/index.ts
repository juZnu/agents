import { ToolNode } from "@langchain/langgraph/prebuilt";
import { DisputeInfoType } from "../types/types";
import { generateDisputeResponse } from "../actions";
import { Command } from "@langchain/langgraph";

// Define the state machine and workflow
const toolNode = new ToolNode([]);

// Function to call the model for generating dispute response
export const generateDisputeResolution = async (state: DisputeInfoType) => {

  // Call the function that generates the dispute response
  const result = await generateDisputeResponse(state);

  // Return an AIMessage with the generated response

  return new Command({
    update: {
      disputeResolution: result, 
    }
  });
};
