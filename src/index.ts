import { ToolNode } from "@langchain/langgraph/prebuilt";
import {
  END,
  MessagesAnnotation,
  START,
  StateGraph,
} from "@langchain/langgraph";
import { AIMessage, BaseMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

// Initialize the LLM (GPT model)
const llm = new ChatOpenAI({
  model: "gpt-4o",  // You can also choose other models like gpt-3.5-turbo
  temperature: 0,   // Low temperature for more deterministic output
});

// A simple tool node that doesn't use external tools (we're just processing the input and summarizing it)
const toolNode = new ToolNode([]);

// Function to call the model for summarizing text
const callModel = async (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;

  // Assuming the input message is the one that the agent should summarize
  const inputMessage = messages[messages.length - 1];

  // Constructing the prompt for summarization
  const prompt = `Summarize the following text: ${inputMessage.text}`;

  // Invoking the model with the summarization prompt
  const result = await llm.invoke([{
    role: "system",
    content: prompt,
  }]);

  // Return the summarized result as a message
  return { messages: [result] };
};

// Function to decide if the workflow should continue
const shouldContinue = (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;

  const lastMessage = messages[messages.length - 1];
  if (
    lastMessage._getType() !== "ai" ||  // If the last message isn't an AI message
    !(lastMessage as AIMessage).tool_calls?.length  // If no tools were called
  ) {
    return END;  // End the workflow
  }
  return "tools";  // Continue to the tools state (although in this case, we aren't using any external tools)
};

/**
 * Defining the state machine for the agent's workflow using StateGraph
 */
const workflow = new StateGraph(MessagesAnnotation)
  .addNode("agent", callModel)  // Add the "agent" node for processing
  .addEdge(START, "agent")  // Start the workflow with the agent node
  .addNode("tools", toolNode)  // Add a node for tools (even though we're not using tools here)
  .addEdge("tools", "agent")  // Allow transition from tools back to agent
  .addConditionalEdges("agent", shouldContinue, ["tools", END]);  // Conditional edge to decide if the workflow should continue or end

// Compile the workflow
export const graph = workflow.compile({
  // Uncomment this if running locally and using a checkpointer for workflow state saving
  // checkpointer: new MemorySaver(),
});
