import { Annotation } from '@langchain/langgraph';

export const DisputeInfoAnnotation = Annotation.Root({
  description: Annotation<string>,
  cardDetailsLast4: Annotation<string>,
  paymentMethod: Annotation<string>,
  amount: Annotation<number>,
  currency: Annotation<string>,
  chargebackReason: Annotation<string>,
  companyName: Annotation<string>,
  disputerName: Annotation<string>,
  websiteUrl: Annotation<string>,
});
