import {StateGraph, START, END} from '@langchain/langgraph'
import {  generateDisputeResolution } from '../nodes';
import { DisputeInfoAnnotation } from '../types/annotation';


export const stripeWorkflow = new StateGraph(DisputeInfoAnnotation)
  .addNode("agent", generateDisputeResolution)
  .addEdge(START, "agent")
  .addEdge("agent", END)