import { StateGraph, START, END } from '@langchain/langgraph';
import { StripeDisputeAnnotation } from '../types/annotation';
import {
  getEvidencesNode,
  resolveDocumentsNode,
  getResponseBusinessNode,
  getResponsePaymentCompanyNode
} from '../nodes';


export const stripeWorkflow = new StateGraph(StripeDisputeAnnotation)
  .addNode('getEvidences', getEvidencesNode)
  .addNode("resolveDocuments", resolveDocumentsNode)
  .addNode("getBusinessResponse", getResponseBusinessNode)
  .addNode("getPaymentCompanyResponse", getResponsePaymentCompanyNode)

  .addEdge(START, 'getEvidences')
  .addEdge('getEvidences', 'resolveDocuments')
  .addEdge('resolveDocuments', 'getBusinessResponse')
  .addEdge('resolveDocuments', 'getPaymentCompanyResponse')
  .addEdge('getBusinessResponse', END)
  .addEdge('getPaymentCompanyResponse', END);
