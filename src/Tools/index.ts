
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { receiptTool } from "./receiptTool";
import { refundPolicyTool } from "./refundPolicyTool";



export const toolNode = new ToolNode([
  receiptTool,
  refundPolicyTool,
]);

