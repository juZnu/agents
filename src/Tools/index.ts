
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { refundPolicyTool, termsTool } from "./functions";


export const toolNode = new ToolNode([
  refundPolicyTool,
  termsTool,
]);

