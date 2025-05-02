import { StateGraph, START, END } from '@langchain/langgraph';
import { StripeDisputeAnnotation } from '../types/annotation';
import {
  classifyDisputeAndProductNode,
  getEvidencesNode,
  resolveDocumentsNode,
  getResponseBusinessNode,
  getResponsePaymentCompanyNode
} from '../nodes';


export const stripeWorkflow = new StateGraph(StripeDisputeAnnotation)
  .addNode("classifyDisputeAndProduct", classifyDisputeAndProductNode)
  .addNode('getEvidences', getEvidencesNode)
  .addNode("resolveDocuments", resolveDocumentsNode)
  .addNode("getBusinessResponse", getResponseBusinessNode)
  .addNode("getPaymentCompanyResponse", getResponsePaymentCompanyNode)

  .addEdge(START, 'classifyDisputeAndProduct')
  .addEdge('classifyDisputeAndProduct', 'getEvidences')
  .addEdge('getEvidences', 'resolveDocuments')
  .addEdge('resolveDocuments', 'getBusinessResponse')
  .addEdge('resolveDocuments', 'getPaymentCompanyResponse')
  .addEdge('getBusinessResponse', END)
  .addEdge('getPaymentCompanyResponse', END);
