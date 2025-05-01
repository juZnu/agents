import { Annotation, MessagesAnnotation } from '@langchain/langgraph';
import { BusinessType, StripeChargeType, StripeCustomerType } from './types';


export const StripeDisputeAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec,
  customer: Annotation<StripeCustomerType>(),
  charge: Annotation<StripeChargeType>(),
  business: Annotation<BusinessType>(),
  collectedEvidences:Annotation<string[]>(),
  missingEvidences:Annotation<string[]>(),
  invoice:Annotation<string>(),
  termsConditions: Annotation<String>(),
  policy:Annotation<string>(),
  businessResponse: Annotation<string>(),
  paymentCompanyResponse:Annotation<string>(),



})

