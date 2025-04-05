import {StateGraph, START, END} from '@langchain/langgraph'
import {  generateDisputeResolution } from '../nodes';
import { DisputeInfoAnnotation } from '../types/annotation';


export const stripeWorkflow = new StateGraph(DisputeInfoAnnotation)
  .addNode("disputeResponseCollector",generateDisputeResolution)
  .addEdge(START, "disputeResponseCollector")
  .addEdge("disputeResponseCollector", END)