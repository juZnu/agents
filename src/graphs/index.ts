import { StateGraph, START, END } from '@langchain/langgraph'
import { classifyDisputeAndProductNode, disputeResponseCustomerNode, disputeResponsePaymentCompanyNode } from '../nodes';
import { StripeDisputeAnnotation } from '../types/annotation';


export const stripeWorkflow = new StateGraph(StripeDisputeAnnotation)
  // Add nodes
  .addNode("classifyDisputeAndProduct", classifyDisputeAndProductNode)
  .addNode("disputeResponseCustomer", disputeResponseCustomerNode)
  .addNode("disputeResponsePaymentCompany", disputeResponsePaymentCompanyNode)

  // Add edges
  .addEdge(START, "classifyDisputeAndProduct") // Connect the START to the first node
  .addEdge("classifyDisputeAndProduct", "disputeResponseCustomer") // Link to customer response
  .addEdge("classifyDisputeAndProduct", "disputeResponsePaymentCompany") // Link to payment company response
  .addEdge("disputeResponseCustomer", END) // End after customer response
  .addEdge("disputeResponsePaymentCompany", END); // End after payment company response
