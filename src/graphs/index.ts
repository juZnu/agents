import { StateGraph, START, END } from '@langchain/langgraph'
import { classifyDisputeAndProductNode, disputeResponseCustomerNode, disputeResponsePaymentCompanyNode} from '../nodes';
import { StripeDisputeAnnotation } from '../types/annotation';


export const stripeWorkflow = new StateGraph(StripeDisputeAnnotation)
  // Add nodes
  .addNode("classifyDisputeAndProduct", classifyDisputeAndProductNode)
  .addNode("disputeResponseCustomer", disputeResponseCustomerNode)
  .addNode("disputeResponsePaymentCompany", disputeResponsePaymentCompanyNode)

  // Add edges
  .addEdge(START, "classifyDisputeAndProduct") 
  .addEdge("classifyDisputeAndProduct", "disputeResponseCustomer") 
  .addEdge("classifyDisputeAndProduct", "disputeResponsePaymentCompany")
  .addEdge("disputeResponseCustomer", END) 
  .addEdge("disputeResponsePaymentCompany", END); 
