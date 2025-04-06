import { Annotation, MessagesAnnotation } from '@langchain/langgraph';


export const StripeDisputeAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec,
  description: Annotation<string>(),
  cardDetailsLast4: Annotation<string>(),
  paymentMethod: Annotation<string>(),
  amount: Annotation<string>(),
  currency: Annotation<string>(),
  chargebackReason: Annotation<string>(),
  companyName: Annotation<string>(),
  disputerName: Annotation<string>(),
  websiteUrl: Annotation<string>(),
  disputeCategory: Annotation<string>(),
  productCategory: Annotation<string>(),
  evidenceRequired: Annotation<string>(),
  responsePaymentCompanyOutput: Annotation<string>(),
  responseCustomerOutput: Annotation<string>(),
})
