import { Annotation, MessagesAnnotation } from '@langchain/langgraph';
import { BusinessType, StripeChargeType, StripeCustomerType } from './types';


export const StripeDisputeAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec,
  customer: Annotation<StripeCustomerType>(),
  charge: Annotation<StripeChargeType>(),
  business: Annotation<BusinessType>(),
  productCategory: Annotation<string>(),
  evidenceRequired: Annotation<string>(),
})

