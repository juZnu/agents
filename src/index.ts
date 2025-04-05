import { ToolNode } from "@langchain/langgraph/prebuilt";
import {
  END,
  MessagesAnnotation,
  START,
  StateGraph,
} from "@langchain/langgraph";
import { AIMessage, BaseMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import "dotenv/config";


// Initialize the LLM (GPT model)
const llm = new ChatOpenAI({
  model: "gpt-4",  
  temperature: 0,  
});

// Define the Evidence Guidelines (You can modify this with your actual guidelines)
const Evidence_Guidelines = `

Credit Not Processed   Digital:
- cancellation_policy
- refund_policy
- cancellation_policy_disclosure
- refund_policy_disclosure
- cancellation_rebuttal
- refund_refusal_explanation
- customer_communication
- uncategorized_text
- uncategorized_file

Credit Not Processed   Offline:
- cancellation_policy
- refund_policy
- cancellation_policy_disclosure
- refund_policy_disclosure
- cancellation_rebuttal
- refund_refusal_explanation
- customer_communication
- uncategorized_text
- uncategorized_file

Credit Not Processed Physical:
- refund_policy
- refund_policy_disclosure
- refund_refusal_explanation
- customer_communication
- uncategorized_text
- uncategorized_file

Fraudulent Physical:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- shipping_address
- shipping_documentation
- shipping_date
- shipping_carrier
- shipping_tracking_number
- uncategorized_file
- uncategorized_text

Fraudulent  Digital:
- customer_purchase_ip
- customer_name
- customer_email_address
- access_activity_log
- uncategorized_file
- uncategorized_text

Fraudulent Offline:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- service_date
- service_documentation
- uncategorized_text
- uncategorized_file

Fraudulent Physical.1:
- product_description
- uncategorized_file
- customer_communication
- refund_policy
- refund_policy_disclosure
- uncategorized_text
- uncategorized_file

Fraudulent Digital:
- product_description
- uncategorized_file
- customer_communication
- access_activity_log
- refund_policy
- refund_policy_disclosure
- uncategorized_text
- uncategorized_file

Fraudulent Offline.1:
- product_description
- uncategorized_file
- customer_communication
- refund_policy
- refund_policy_disclosure
- uncategorized_text
- uncategorized_file

Duplicate Charge Physical:
- duplicate_charge_id
- duplicate_charge_explanation
- duplicate_charge_documentation
- shipping_documentation
- customer_communication
- uncategorized_text
- uncategorized_file

Duplicate Charge Digital:
- duplicate_charge_id
- duplicate_charge_explanation
- duplicate_charge_documentation
- customer_communication
- uncategorized_text
- uncategorized_file

Duplicate Charge Offline:
- duplicate_charge_id
- duplicate_charge_explanation
- duplicate_charge_documentation
- service_documentation
- customer_communication
- uncategorized_text
- uncategorized_file

Subscription canceled Physical:
- cancellation_policy
- cancellation_policy_disclosure
- cancellation_rebuttal
- customer_communication
- uncategorized_text
- uncategorized_file

Subscription canceled Digital:
- cancellation_policy
- cancellation_policy_disclosure
- cancellation_rebuttal
- customer_communication
- uncategorized_text
- uncategorized_file

Subscription canceled Offline:
- cancellation_policy
- cancellation_policy_disclosure
- cancellation_rebuttal
- service_date
- service_documentation
- customer_communication
- uncategorized_text
- uncategorized_file

Product not received Physical:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- shipping_address
- shipping_documentation
- shipping_date
- shipping_carrier
- shipping_tracking_number
- uncategorized_file
- uncategorized_text

Product not received Digital:
- customer_purchase_ip
- customer_name
- customer_email_address
- access_activity_log
- customer_communication
- uncategorized_file
- uncategorized_text

Product not received Offline:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- service_date
- service_documentation
- uncategorized_text
- uncategorized_file

Unrecognized Physical:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- shipping_address
- shipping_documentation
- shipping_date
- shipping_carrier
- shipping_tracking_number
- uncategorized_file
- uncategorized_text

Unrecognized Digital:
- customer_purchase_ip
- customer_name
- customer_email_address
- access_activity_log
- uncategorized_file
- uncategorized_text

Unrecognized Offline:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- service_date
- service_documentation
- uncategorized_file
- uncategorized_text
`
const classifyAndFetchEvidenceAI = async (
  transactionDetails: string, chargebackReason: string, companyName: string, websiteUrl: string,
  amount: string, cardDigits: string, paymentMethod: string, disputerName: string
) => {
  // Constructing the prompt to classify and generate evidence requirements
  const prompt = `Hi '${companyName}', you have a dispute from '${disputerName}' and the details are: 
  'Amount': '${amount}' 
  'Card digits': '${cardDigits}' 
  'Chargeback reason': '${chargebackReason}' 
  'Payment method': '${paymentMethod}' 
  'Refund': (Refund decision will be made here based on policies)
  
  Add here the reason for the refusal and explanation about why it was rejected using the company's refund policies gathered from the website. 
  Also, classify the product into one of these categories: 'physical_product', 'online_product', 'offline_service'. 
  Based on the chargeback reason and product type, provide the appropriate evidence required: ${JSON.stringify(Evidence_Guidelines)}.`;

  console.log("Calling LLM with the prompt:", prompt);

  // Make the AI call
  const response = await llm.invoke([
    { role: "system", content: prompt },
    { role: "user", content: `Product description: ${transactionDetails}` },
  ]);

  console.log("LLM response:", response);

  if ('content' in response) {
    return response.content;
  }

  throw new Error("Unexpected response format from AI model");
};

// Function to generate structured response using GPT
const generateEvidenceResponse = async (disputeJson: any) => {
  console.log("Generating evidence response for dispute:", disputeJson);
  
  return await classifyAndFetchEvidenceAI(
    disputeJson.description,
    disputeJson.chargeback_reason,
    disputeJson.company_name,
    disputeJson.website_url,
    disputeJson.amount,
    disputeJson["Card Details last 4 digits"],
    disputeJson.payment_method,
    disputeJson.Disputer_name
  );
};

// A simple tool node that doesn't use external tools (we're just processing the input and summarizing it)
const toolNode = new ToolNode([]);

// Function to call the model for summarizing text and processing chargebacks
const callModel = async (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;

  // Extract relevant details for AI processing
  const inputMessage = messages[messages.length - 1];

  console.log("Processing message:", inputMessage);

  // Call the AI model to classify and fetch evidence
  const result = await generateEvidenceResponse({
    description: inputMessage.content,
    chargeback_reason: (inputMessage as any).chargeback_reason,
    company_name: (inputMessage as any).company_name,
    website_url: (inputMessage as any).website_url,
    amount: (inputMessage as any).amount,
    "Card Details last 4 digits": (inputMessage as any)["Card Details last 4 digits"],
    payment_method: (inputMessage as any).payment_method,
    Disputer_name: (inputMessage as any).Disputer_name,
  });

  console.log("Model result:", result);

  // Return the result of the classification and evidence generation
  return { messages: [new AIMessage(typeof result === "string" ? result : JSON.stringify(result))] };
};

// Function to decide if the workflow should continue
const shouldContinue = (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;
  const lastMessage = messages[messages.length - 1];

  console.log("Checking if workflow should continue. Last message:", lastMessage);

  // Check if the last message is from AI and contains the tools call, otherwise end
  if (lastMessage._getType() !== "ai" || !(lastMessage as AIMessage).tool_calls?.length) {
    console.log("No tool calls. Ending workflow.");
    return END;  // End the workflow if no tool calls were made
  }

  return "tools";
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

console.log("Compiled workflow:", workflow);

// Compile the workflow
export const graph = workflow.compile({
  // Uncomment this if running locally and using a checkpointer for workflow state saving
  // checkpointer: new MemorySaver(),
});