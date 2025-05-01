import { DisputeRequirements } from "../types/types";

export const Evidence_Guidelines = `

Credit Not Processed   Digital:
- cancellation_policy
- refund_policy
- cancellation_policy_disclosure
- refund_policy_disclosure
- cancellation_rebuttal
- refund_refusal_explanation
- customer_communication
- uncategorized_text
- uncategorized_file

Credit Not Processed   Offline:
- cancellation_policy
- refund_policy
- cancellation_policy_disclosure
- refund_policy_disclosure
- cancellation_rebuttal
- refund_refusal_explanation
- customer_communication
- uncategorized_text
- uncategorized_file

Credit Not Processed Physical:
- refund_policy
- refund_policy_disclosure
- refund_refusal_explanation
- customer_communication
- uncategorized_text
- uncategorized_file

Fraudulent Physical:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- shipping_address
- shipping_documentation
- shipping_date
- shipping_carrier
- shipping_tracking_number
- uncategorized_file
- uncategorized_text

Fraudulent  Digital:
- customer_purchase_ip
- customer_name
- customer_email_address
- access_activity_log
- uncategorized_file
- uncategorized_text

Fraudulent Offline:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- service_date
- service_documentation
- uncategorized_text
- uncategorized_file

Fraudulent Physical.1:
- product_description
- uncategorized_file
- customer_communication
- refund_policy
- refund_policy_disclosure
- uncategorized_text
- uncategorized_file

Fraudulent Digital:
- product_description
- uncategorized_file
- customer_communication
- access_activity_log
- refund_policy
- refund_policy_disclosure
- uncategorized_text
- uncategorized_file

Fraudulent Offline.1:
- product_description
- uncategorized_file
- customer_communication
- refund_policy
- refund_policy_disclosure
- uncategorized_text
- uncategorized_file

Duplicate Charge Physical:
- duplicate_charge_id
- duplicate_charge_explanation
- duplicate_charge_documentation
- shipping_documentation
- customer_communication
- uncategorized_text
- uncategorized_file

Duplicate Charge Digital:
- duplicate_charge_id
- duplicate_charge_explanation
- duplicate_charge_documentation
- customer_communication
- uncategorized_text
- uncategorized_file

Duplicate Charge Offline:
- duplicate_charge_id
- duplicate_charge_explanation
- duplicate_charge_documentation
- service_documentation
- customer_communication
- uncategorized_text
- uncategorized_file

Subscription canceled Physical:
- cancellation_policy
- cancellation_policy_disclosure
- cancellation_rebuttal
- customer_communication
- uncategorized_text
- uncategorized_file

Subscription canceled Digital:
- cancellation_policy
- cancellation_policy_disclosure
- cancellation_rebuttal
- customer_communication
- uncategorized_text
- uncategorized_file

Subscription canceled Offline:
- cancellation_policy
- cancellation_policy_disclosure
- cancellation_rebuttal
- service_date
- service_documentation
- customer_communication
- uncategorized_text
- uncategorized_file

Product not received Physical:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- shipping_address
- shipping_documentation
- shipping_date
- shipping_carrier
- shipping_tracking_number
- uncategorized_file
- uncategorized_text

Product not received Digital:
- customer_purchase_ip
- customer_name
- customer_email_address
- access_activity_log
- customer_communication
- uncategorized_file
- uncategorized_text

Product not received Offline:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- service_date
- service_documentation
- uncategorized_text
- uncategorized_file

Unrecognized Physical:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- shipping_address
- shipping_documentation
- shipping_date
- shipping_carrier
- shipping_tracking_number
- uncategorized_file
- uncategorized_text

Unrecognized Digital:
- customer_purchase_ip
- customer_name
- customer_email_address
- access_activity_log
- uncategorized_file
- uncategorized_text

Unrecognized Offline:
- customer_communication
- uncategorized_text
- uncategorized_file
- customer_signature
- uncategorized_text
- uncategorized_file
- service_date
- service_documentation
- uncategorized_file
- uncategorized_text
`


export const chargebackReasons = [
  "credit_not_processed",
  "duplicate",
  "fraudulent",
  "general",
  "product_not_received",
  "product_unacceptable",
  "subscription_canceled"
];

export const productTypes = [
  ["physical_product", "Physical products are tangible goods that were either purchased in a store or shipped to the recipient, so evidence often proves the customer is in possession of the item."],
  ["digital_product_or_service","Digital products or services are often virtual in nature and don’t have trackable shipping data, so focus on evidence of usage, login, or download."],
  ["offline_service","Offline services include purchases that are made in advance, such as event tickets and reservations, where evidence of a cancellation policy can be material."]
];

export const disputeRequirements : DisputeRequirements ={
  "visa": {
    "credit_not_processed": {
      "system_codes": [
        "Credit not processed",
        "Cancelled Merchandise/Services"
      ],
      "evidence": {
        "physical_product": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`refund_policy`"
          ],
          [
            "An explanation of how and where the applicable policy was provided to your customer prior to purchase.",
            "`refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund, or no further refund, if you already issued a partial refund.",
            "`refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer returned the merchandise in whole or in part. If they partially used the merchandise or returned it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The language of the applicable cancellation or refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a cancellation or refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer used the digital product or service in whole or in part. If they partially used it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* If they partially used the service, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "duplicate": {
      "system_codes": [
        "Duplicate processing",
        "Paid by other means"
      ],
      "evidence": {
        "physical_product": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. This document should be paired with a similar document from the disputed payment that proves the two are separate. This should also include a separate shipping label or receipt for the other payment. If multiple products were shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A shipping label or receipt for the product the disputed payment is for.",
            "`shipping_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any and all information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Each receipt should clearly indicate that the payments are for separate purchases of items or services.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, be sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the one that is disputed. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A copy of a service agreement or documentation for the disputed payment.",
            "`service_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure that each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, make sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "fraudulent": {
      "system_codes": [
        "Fraud analysis request",
        "EMV Liability Shift Counterfeit Fraud",
        "EMV Liability Shift Non-Counterfeit Fraud",
        "Other Fraud - Card Present Environment",
        "Other Fraud - Card Absent Environment",
        "Visa Fraud Monitoring Program"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "general": {
      "system_codes": [
        "Request for copy bearing signature",
        "Cardholder request due to dispute",
        "Legal process request",
        "Card Recovery Bulletin",
        "Declined Authorization",
        "No Authorization",
        "Late Presentment",
        "Incorrect Transaction Code",
        "Incorrect Currency",
        "Incorrect Account Number",
        "Incorrect Amount",
        "Invalid Data",
        "Original Credit Transaction Not Accepted"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_not_received": {
      "system_codes": [
        "Merchandise/Services Not Received",
        "Non-Receipt of Cash or Load Transaction Value"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence proving that the cardholder disputing the transaction is in possession of the products.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that someone signed for the products when they were picked up or delivered. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address needs to match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing you shipped the product to the cardholder at the same address the cardholder provided to you. Ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after the payment was made. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different electronic deliveries and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived items\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence proving that the cardholder disputing the transaction received the service.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that the service was signed for. If possible, you should provide:\n\n* Cardholder signature\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon service date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you have already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_unacceptable": {
      "system_codes": [
        "Not as Described or Defective Merchandise/Services",
        "Counterfeit Merchandise",
        "Misrepresentation"
      ],
      "evidence": {
        "physical_product": [
          [
            "A description of the product as you represented it to the customer, or images that display how you showed the product to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether or not the customer returned the product to you.\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you have already provided a replacement product\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "A description of the digital product or service as it was represented to the customer, or images that display how the customer was shown the product prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any server or activity logs showing proof that the cardholder accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "A description of the service as you represented it to the customer, or images that display how you advertised the service to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how it was disclosed to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was only partially used, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "subscription_canceled": {
      "system_codes": [
        "Cancelled Recurring"
      ],
      "evidence": {
        "physical_product": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription was not canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was consumed prior to the billing (in cases where billing occurs regularly, but consumption of whatever is being billed for happens prior to the billing)\n* If the product was partially used, whether the dispute amount exceeds the value of the unused portion\n* If customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* If the payment was actually an [installment payment](/payments/buy-now-pay-later) (some networks permit this dispute reason code only for genuinely recurring transactions, not installments of a single payment)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription wasn\u2019t canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* What controls you have in place for customers to regulate automated spending, monitor their own usage, and prevent inadvertent automated billing.\n* If the digital product or service was consumed prior to the billing (in cases where billing occurs regularly, but consumption whatever is being billed for happens prior to the billing)\n* If the product was partially used, whether the dispute amount exceeds the value of the unused portion\n* If the customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* If the payment was actually an [installment payment](/payments/buy-now-pay-later) (some networks permit this dispute reason code only for genuinely recurring transactions, not installments of a single payment)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement product or service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription wasn\u2019t canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "The date on which the cardholder received or began receiving the purchased service in a clear, human-readable format.",
            "`service_date`"
          ],
          [
            "Documentation showing proof that a service was provided to the cardholder. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_documentation`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was consumed prior to the billing (in cases where billing occurs regularly, but consumption of whatever is being billed for happens prior to the billing)\n* If the service was partially used, whether the dispute amount exceeds the value of the unused portion\n* If the customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "unrecognized": {
      "system_codes": [],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014cardholder. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after making the payment. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, weren\u2019t disputed",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    }
  },
  "mastercard": {
    "credit_not_processed": {
      "system_codes": [
        "Credit Not Processed",
        "Timeshares",
        "Credit Posted as a Purchase"
      ],
      "evidence": {
        "physical_product": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`refund_policy`"
          ],
          [
            "An explanation of how and where the applicable policy was provided to your customer prior to purchase.",
            "`refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund, or no further refund, if you already issued a partial refund.",
            "`refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer returned the merchandise in whole or in part. If they partially used the merchandise or returned it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The language of the applicable cancellation or refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a cancellation or refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer used the digital product or service in whole or in part. If they partially used it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* If they partially used the service, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "duplicate": {
      "system_codes": [
        "Transaction Amount Differs",
        "Cardholder Debited More than Once for the Same Goods or Services",
        "ATM Disputes",
        "Charges for Loss, Theft, or Damages",
        "Late Presentment",
        "POI Currency Conversion (Dynamic Currency Conversion)",
        "Merchant Credit Correcting Error Resulting in Cardholder Currency Exchange Loss",
        "Improper Merchant Surcharge (Intra-European and Inter-European transactions only)",
        "Unreasonable Amount\u2014Intra-European Economic Area (EEA) Transactions Only"
      ],
      "evidence": {
        "physical_product": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. This document should be paired with a similar document from the disputed payment that proves the two are separate. This should also include a separate shipping label or receipt for the other payment. If multiple products were shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A shipping label or receipt for the product the disputed payment is for.",
            "`shipping_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any and all information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Each receipt should clearly indicate that the payments are for separate purchases of items or services.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, be sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the one that is disputed. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A copy of a service agreement or documentation for the disputed payment.",
            "`service_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure that each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, make sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "fraudulent": {
      "system_codes": [
        "Fraud investigation",
        "No Cardholder Authorization",
        "Questionable Merchant Activity",
        "Chip Liability Shift",
        "Chip Liability Shift\u2014Lost/Stolen/Never Received Issue (NRI) Fraud"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "general": {
      "system_codes": [
        "Cardholder does not agree with amount billed",
        "Request Transaction Certificate for a chip transaction",
        "Cardholder needs information for personal records",
        "Potential chargeback or compliance documentation is required",
        "IIAS Audit (for healthcare transactions only)",
        "Identifies a syntax error return",
        "General Chargeback AND General Arbitration Chargeback",
        "Deprecated",
        "Account number not on file",
        "Addendum, No-show, or ATM Dispute",
        "German Domestic Rule - Card Acceptor Unwilling or Unable to Render Services",
        "Addendum Dispute",
        "No-show Hotel Charge",
        "Transaction Amount Differs",
        "Cardholder Debited More than Once for the Same Goods or Services",
        "Merchant Credit Correcting Error Resulting in Cardholder Currency Exchange Loss",
        "DEPRECATED: Late Presentment",
        "DEPRECATED: POI Currency Conversion (Dynamic Currency Conversion)",
        "Required Documentation Not Received to Support Second Presentment",
        "Documentation Received was Illegible",
        "Scanning error\u2014Unrelated Documents or Partial Scan",
        "Acquirer Reference Data (ARD) Does Not Match or is Invalid",
        "Invalid Acquirer Reference Data; Documentation Received",
        "bad code - needs investigation",
        "bad code - needs investigation"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_not_received": {
      "system_codes": [
        "Transaction Did Not Complete"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence proving that the cardholder disputing the transaction is in possession of the products.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that someone signed for the products when they were picked up or delivered. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address needs to match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing you shipped the product to the cardholder at the same address the cardholder provided to you. Ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after the payment was made. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different electronic deliveries and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived items\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence proving that the cardholder disputing the transaction received the service.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that the service was signed for. If possible, you should provide:\n\n* Cardholder signature\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon service date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you have already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_unacceptable": {
      "system_codes": [
        "General Defective/Not as Described",
        "Goods or Services Were Either Not as Described or Defective",
        "Goods or Services Not Provided",
        "Failed Travel Merchant\u2014Intra-EEA and Domestic European Transactions Only",
        "Digital Goods Purchase of USD 25 or Less",
        "Credit Not Processed",
        "Counterfeit Goods",
        "Cardholder Dispute of a Recurring Transaction",
        "Issuer Dispute of a Recurring Transaction",
        "Addendum Dispute",
        "No-show Hotel Charge",
        "Transaction Did Not Complete",
        "Timeshares",
        "Credit Posted as a Purchase"
      ],
      "evidence": {
        "physical_product": [
          [
            "A description of the product as you represented it to the customer, or images that display how you showed the product to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether or not the customer returned the product to you.\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you have already provided a replacement product\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "A description of the digital product or service as it was represented to the customer, or images that display how the customer was shown the product prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any server or activity logs showing proof that the cardholder accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "A description of the service as you represented it to the customer, or images that display how you advertised the service to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how it was disclosed to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was only partially used, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "subscription_canceled": {
      "system_codes": [
        "Digital Goods Purchase of USD 25 or Less",
        "Canceled Recurring or Digital Goods Transactions",
        "Cardholder Dispute of a Recurring Transaction",
        "Issuer Dispute of a Recurring Transaction"
      ],
      "evidence": {
        "physical_product": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription was not canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was consumed prior to the billing (in cases where billing occurs regularly, but consumption of whatever is being billed for happens prior to the billing)\n* If the product was partially used, whether the dispute amount exceeds the value of the unused portion\n* If customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* If the payment was actually an [installment payment](/payments/buy-now-pay-later) (some networks permit this dispute reason code only for genuinely recurring transactions, not installments of a single payment)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription wasn\u2019t canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* What controls you have in place for customers to regulate automated spending, monitor their own usage, and prevent inadvertent automated billing.\n* If the digital product or service was consumed prior to the billing (in cases where billing occurs regularly, but consumption whatever is being billed for happens prior to the billing)\n* If the product was partially used, whether the dispute amount exceeds the value of the unused portion\n* If the customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* If the payment was actually an [installment payment](/payments/buy-now-pay-later) (some networks permit this dispute reason code only for genuinely recurring transactions, not installments of a single payment)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement product or service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription wasn\u2019t canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "The date on which the cardholder received or began receiving the purchased service in a clear, human-readable format.",
            "`service_date`"
          ],
          [
            "Documentation showing proof that a service was provided to the cardholder. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_documentation`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was consumed prior to the billing (in cases where billing occurs regularly, but consumption of whatever is being billed for happens prior to the billing)\n* If the service was partially used, whether the dispute amount exceeds the value of the unused portion\n* If the customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "unrecognized": {
      "system_codes": [
        "Cardholder does not recognize transaction",
        "Cardholder Does Not Recognize\u2014Potential Fraud"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014cardholder. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after making the payment. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, weren\u2019t disputed",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    }
  },
  "american_express": {
    "credit_not_processed": {
      "system_codes": [
        "Charge Amount Exceeds Authorization Amount",
        "Credit Not Processed",
        "Goods/Services Returned or Refused",
        "Goods/Services Cancelled",
        "\u201cNo Show\u201d or CARDeposit Cancelled",
        "Credit Processed as Charge",
        "Incorrect Charge Amount",
        "Credit Processed as Charge",
        "Charge Processed as Credit",
        "Goods/Services Cancelled/Refused",
        "Goods Returned (Request Credit)",
        "Cancelled lodging reservation/CARDeposit not received",
        "Credit Not Processed",
        "Incorrect Charge Amount"
      ],
      "evidence": {
        "physical_product": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`refund_policy`"
          ],
          [
            "An explanation of how and where the applicable policy was provided to your customer prior to purchase.",
            "`refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund, or no further refund, if you already issued a partial refund.",
            "`refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer returned the merchandise in whole or in part. If they partially used the merchandise or returned it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The language of the applicable cancellation or refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a cancellation or refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer used the digital product or service in whole or in part. If they partially used it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* If they partially used the service, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "duplicate": {
      "system_codes": [
        "Paid by Other Means",
        "Duplicate Charge",
        "Duplicate Charge",
        "Paid by Other Means"
      ],
      "evidence": {
        "physical_product": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. This document should be paired with a similar document from the disputed payment that proves the two are separate. This should also include a separate shipping label or receipt for the other payment. If multiple products were shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A shipping label or receipt for the product the disputed payment is for.",
            "`shipping_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any and all information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Each receipt should clearly indicate that the payments are for separate purchases of items or services.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, be sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the one that is disputed. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A copy of a service agreement or documentation for the disputed payment.",
            "`service_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure that each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, make sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "fraudulent": {
      "system_codes": [
        "Missing Imprint",
        "Multiple ROCs",
        "Card Not Present",
        "EMV Liability Shift - Counterfeit",
        "EMV Liability Shift - Lost/Stolen/Non-Received",
        "Fraud Full Recourse Program",
        "Immediate Chargeback Program",
        "Immediate Chargeback Program",
        "Partial Immediate Chargeback Program",
        "Unauthorized Charge",
        "Fraudulent Charge"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "general": {
      "system_codes": [
        "No Valid Authorization",
        "Authorization Approval Expired",
        "Vehicle Rental - Capital Damages, Theft, or Loss of Use",
        "Insufficient Reply",
        "No Reply",
        "Chargeback Authorization",
        "Unassigned Card Number",
        "Charge Processed as Credit",
        "Late Submission",
        "Non-Matching Card Number",
        "Currency Discrepancy",
        "Merchant Accepted",
        "Reversal Due To Credit",
        "See Notes",
        "Reversal",
        "Correct a Previous Transaction",
        "Reversal Request Too Late",
        "Reversal Request Denied",
        "Reversal Request Under Review, Please Wait",
        "General",
        "Charge paid by Insurance Company",
        "Charge submitted in an invalid currency",
        "Questioning Charge for Damage/Theft/Loss",
        "Reviewed Support; Will not be Debiting Account",
        "Support received"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_not_received": {
      "system_codes": [
        "Goods/Services Not Received or Only Partially Received",
        "Product Not Received",
        "Goods not Received (Request Credit)"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence proving that the cardholder disputing the transaction is in possession of the products.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that someone signed for the products when they were picked up or delivered. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address needs to match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing you shipped the product to the cardholder at the same address the cardholder provided to you. Ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after the payment was made. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different electronic deliveries and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived items\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence proving that the cardholder disputing the transaction received the service.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that the service was signed for. If possible, you should provide:\n\n* Cardholder signature\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon service date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you have already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_unacceptable": {
      "system_codes": [
        "Goods/Services Not As Described",
        "Goods/Services Damaged or Defective",
        "Goods Damaged/Defective",
        "Goods Damaged/Defective (Request Repair)",
        "Product Quality Unacceptable"
      ],
      "evidence": {
        "physical_product": [
          [
            "A description of the product as you represented it to the customer, or images that display how you showed the product to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether or not the customer returned the product to you.\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you have already provided a replacement product\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "A description of the digital product or service as it was represented to the customer, or images that display how the customer was shown the product prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any server or activity logs showing proof that the cardholder accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "A description of the service as you represented it to the customer, or images that display how you advertised the service to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how it was disclosed to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was only partially used, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "subscription_canceled": {
      "system_codes": [
        "Cancelled Recurring Billing",
        "Goods/Services Cancelled/Expired"
      ],
      "evidence": {
        "physical_product": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription was not canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was consumed prior to the billing (in cases where billing occurs regularly, but consumption of whatever is being billed for happens prior to the billing)\n* If the product was partially used, whether the dispute amount exceeds the value of the unused portion\n* If customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* If the payment was actually an [installment payment](/payments/buy-now-pay-later) (some networks permit this dispute reason code only for genuinely recurring transactions, not installments of a single payment)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription wasn\u2019t canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* What controls you have in place for customers to regulate automated spending, monitor their own usage, and prevent inadvertent automated billing.\n* If the digital product or service was consumed prior to the billing (in cases where billing occurs regularly, but consumption whatever is being billed for happens prior to the billing)\n* If the product was partially used, whether the dispute amount exceeds the value of the unused portion\n* If the customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* If the payment was actually an [installment payment](/payments/buy-now-pay-later) (some networks permit this dispute reason code only for genuinely recurring transactions, not installments of a single payment)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement product or service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription wasn\u2019t canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "The date on which the cardholder received or began receiving the purchased service in a clear, human-readable format.",
            "`service_date`"
          ],
          [
            "Documentation showing proof that a service was provided to the cardholder. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_documentation`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was consumed prior to the billing (in cases where billing occurs regularly, but consumption of whatever is being billed for happens prior to the billing)\n* If the service was partially used, whether the dispute amount exceeds the value of the unused portion\n* If the customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "unrecognized": {
      "system_codes": [
        "Unrecognized Charge",
        "Unrecognized Charge (Card Not Present)",
        "Requesting Support"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014cardholder. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after making the payment. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, weren\u2019t disputed",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    }
  },
  "discover": {
    "credit_not_processed": {
      "system_codes": [
        "Credit Not Processed"
      ],
      "evidence": {
        "physical_product": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`refund_policy`"
          ],
          [
            "An explanation of how and where the applicable policy was provided to your customer prior to purchase.",
            "`refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund, or no further refund, if you already issued a partial refund.",
            "`refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer returned the merchandise in whole or in part. If they partially used the merchandise or returned it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The language of the applicable cancellation or refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a cancellation or refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer used the digital product or service in whole or in part. If they partially used it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* If they partially used the service, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "duplicate": {
      "system_codes": [
        "Duplicate Processing",
        "Paid By Other Means"
      ],
      "evidence": {
        "physical_product": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. This document should be paired with a similar document from the disputed payment that proves the two are separate. This should also include a separate shipping label or receipt for the other payment. If multiple products were shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A shipping label or receipt for the product the disputed payment is for.",
            "`shipping_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any and all information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Each receipt should clearly indicate that the payments are for separate purchases of items or services.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, be sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the one that is disputed. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A copy of a service agreement or documentation for the disputed payment.",
            "`service_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure that each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, make sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "fraudulent": {
      "system_codes": [
        "Transaction Documentation Request for Fraud Analysis",
        "Fraud Chip Card Counterfeit Transaction",
        "Fraud Chip Card and PIN Transaction",
        "Fraud Card Present Transaction",
        "Fraud Card Not Present Transaction"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "general": {
      "system_codes": [
        "Transaction Documentation Request",
        "Transaction Documentation Request Due to Cardholder Dispute",
        "Good Faith Investigation",
        "Late Presentation",
        "Credit/Debit Posted Incorrectly",
        "Cardholder Disputes Quality of Goods or Services",
        "Altered Amount",
        "Does Not Recognize",
        "Invalid Cardholder Number",
        "Violation of Operating Regulations",
        "Good Faith Investigation",
        "Authorization Non Compliance",
        "Disputes Compliance"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_not_received": {
      "system_codes": [
        "Non-Receipt of Goods or Services",
        "Non Receipt Of Cash From ATM"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence proving that the cardholder disputing the transaction is in possession of the products.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that someone signed for the products when they were picked up or delivered. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address needs to match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing you shipped the product to the cardholder at the same address the cardholder provided to you. Ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after the payment was made. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different electronic deliveries and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived items\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence proving that the cardholder disputing the transaction received the service.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that the service was signed for. If possible, you should provide:\n\n* Cardholder signature\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon service date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you have already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_unacceptable": {
      "system_codes": [],
      "evidence": {
        "physical_product": [
          [
            "A description of the product as you represented it to the customer, or images that display how you showed the product to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether or not the customer returned the product to you.\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you have already provided a replacement product\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "A description of the digital product or service as it was represented to the customer, or images that display how the customer was shown the product prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any server or activity logs showing proof that the cardholder accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "A description of the service as you represented it to the customer, or images that display how you advertised the service to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how it was disclosed to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was only partially used, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "subscription_canceled": {
      "system_codes": [
        "Recurring Payment"
      ],
      "evidence": {
        "physical_product": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription was not canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was consumed prior to the billing (in cases where billing occurs regularly, but consumption of whatever is being billed for happens prior to the billing)\n* If the product was partially used, whether the dispute amount exceeds the value of the unused portion\n* If customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* If the payment was actually an [installment payment](/payments/buy-now-pay-later) (some networks permit this dispute reason code only for genuinely recurring transactions, not installments of a single payment)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription wasn\u2019t canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* What controls you have in place for customers to regulate automated spending, monitor their own usage, and prevent inadvertent automated billing.\n* If the digital product or service was consumed prior to the billing (in cases where billing occurs regularly, but consumption whatever is being billed for happens prior to the billing)\n* If the product was partially used, whether the dispute amount exceeds the value of the unused portion\n* If the customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* If the payment was actually an [installment payment](/payments/buy-now-pay-later) (some networks permit this dispute reason code only for genuinely recurring transactions, not installments of a single payment)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement product or service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription wasn\u2019t canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "The date on which the cardholder received or began receiving the purchased service in a clear, human-readable format.",
            "`service_date`"
          ],
          [
            "Documentation showing proof that a service was provided to the cardholder. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_documentation`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was consumed prior to the billing (in cases where billing occurs regularly, but consumption of whatever is being billed for happens prior to the billing)\n* If the service was partially used, whether the dispute amount exceeds the value of the unused portion\n* If the customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "unrecognized": {
      "system_codes": [],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014cardholder. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after making the payment. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, weren\u2019t disputed",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    }
  },
  "klarna": {
    "credit_not_processed": {
      "system_codes": [],
      "evidence": {
        "physical_product": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`refund_policy`"
          ],
          [
            "An explanation of how and where the applicable policy was provided to your customer prior to purchase.",
            "`refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund, or no further refund, if you already issued a partial refund.",
            "`refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer returned the merchandise in whole or in part. If they partially used the merchandise or returned it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The language of the applicable cancellation or refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a cancellation or refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer used the digital product or service in whole or in part. If they partially used it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* If they partially used the service, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "duplicate": {
      "system_codes": [
        "paid"
      ],
      "evidence": {
        "physical_product": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. This document should be paired with a similar document from the disputed payment that proves the two are separate. This should also include a separate shipping label or receipt for the other payment. If multiple products were shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A shipping label or receipt for the product the disputed payment is for.",
            "`shipping_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any and all information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Each receipt should clearly indicate that the payments are for separate purchases of items or services.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, be sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the one that is disputed. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A copy of a service agreement or documentation for the disputed payment.",
            "`service_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure that each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, make sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "fraudulent": {
      "system_codes": [
        "purchase"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "general": {
      "system_codes": [
        "invoice",
        "impact",
        "risk order"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_not_received": {
      "system_codes": [
        "not received"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence proving that the cardholder disputing the transaction is in possession of the products.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that someone signed for the products when they were picked up or delivered. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address needs to match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing you shipped the product to the cardholder at the same address the cardholder provided to you. Ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after the payment was made. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different electronic deliveries and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived items\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence proving that the cardholder disputing the transaction received the service.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that the service was signed for. If possible, you should provide:\n\n* Cardholder signature\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon service date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you have already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_unacceptable": {
      "system_codes": [
        "goods"
      ],
      "evidence": {
        "physical_product": [
          [
            "A description of the product as you represented it to the customer, or images that display how you showed the product to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether or not the customer returned the product to you.\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you have already provided a replacement product\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "A description of the digital product or service as it was represented to the customer, or images that display how the customer was shown the product prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any server or activity logs showing proof that the cardholder accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "A description of the service as you represented it to the customer, or images that display how you advertised the service to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how it was disclosed to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was only partially used, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    }
  },
  "paypal": {
    "credit_not_processed": {
      "system_codes": [
        "not processed"
      ],
      "evidence": {
        "physical_product": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`refund_policy`"
          ],
          [
            "An explanation of how and where the applicable policy was provided to your customer prior to purchase.",
            "`refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund, or no further refund, if you already issued a partial refund.",
            "`refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer returned the merchandise in whole or in part. If they partially used the merchandise or returned it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The language of the applicable cancellation or refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a cancellation or refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* Whether or not the customer used the digital product or service in whole or in part. If they partially used it, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The language of your refund policy, as provided to the customer. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions",
            "`cancellation_policy` `refund_policy`"
          ],
          [
            "An explanation of how and where you provided the applicable policy to your customer prior to purchase.",
            "`cancellation_policy_disclosure` `refund_policy_disclosure`"
          ],
          [
            "Your explanation for why the customer isn\u2019t entitled to a refund.",
            "`cancellation_rebuttal` `refund_refusal_explanation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether you already issued the refund the cardholder is entitled to\n* If they partially used the service, or whether the dispute amount exceeds the value of the unused portion\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "duplicate": {
      "system_codes": [
        "transaction",
        "by other means"
      ],
      "evidence": {
        "physical_product": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. This document should be paired with a similar document from the disputed payment that proves the two are separate. This should also include a separate shipping label or receipt for the other payment. If multiple products were shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A shipping label or receipt for the product the disputed payment is for.",
            "`shipping_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any and all information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Each receipt should clearly indicate that the payments are for separate purchases of items or services.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "digital_product_or_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the disputed one. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, be sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ],
        "offline_service": [
          [
            "The charge ID for the previous payment that appears to be a duplicate of the one that is disputed. If no duplicate charge exists, you can\u2019t provide a duplicate charge ID when prompted to supply evidence in the Dashboard. In such cases, you can select **All Fields** from the gear menu and provide alternate evidence that is applicable to the dispute in question.",
            "`duplicate_charge_id`"
          ],
          [
            "An explanation of the difference between the disputed payment and the one the customer believes it\u2019s a duplicate of.",
            "`duplicate_charge_explanation`"
          ],
          [
            "Documentation for the prior payment that can uniquely identify it, such as a separate receipt. Pair this document with a similar document from the disputed payment that proves the two are separate. Also include a separate shipping label or receipt for the other payment. If multiple products shipped together, provide a packing list that shows each purchase.",
            "`duplicate_charge_documentation`"
          ],
          [
            "A copy of a service agreement or documentation for the disputed payment.",
            "`service_documentation`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Any information documenting that each payment was made separately, such as copies of receipts. If the receipts don\u2019t include the items purchased, be sure to include an itemized list. Make sure that each receipt clearly indicates that the payments are for separate purchases of items or services. If you\u2019ve been able to get in touch with the customer, make sure to address any concerns they had in your evidence.\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_text` `uncategorized_file`"
          ]
        ]
      }
    },
    "fraudulent": {
      "system_codes": [],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "general": {
      "system_codes": [],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014the cardholder. If the products were collected from a physical location, you should provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.\n\nCompelling Evidence",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.\n\nCompelling Evidence",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.\n\nCompelling Evidence",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.\n\nCompelling Evidence",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.\n\nCompelling Evidence",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase\n\nCompelling Evidence",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer\n\nCompelling Evidence",
            "`customer_name`"
          ],
          [
            "Email address of customer\n\nCompelling Evidence",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after they made the payment. This should ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.\n\nCompelling Evidence",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.\n\nCompelling Evidence",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder\n\nCompelling Evidence",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, were not disputed\n\nCompelling Evidence",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute\n\nCompelling Evidence",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_not_received": {
      "system_codes": [
        "or service not received"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence proving that the cardholder disputing the transaction is in possession of the products.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that someone signed for the products when they were picked up or delivered. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address needs to match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing you shipped the product to the cardholder at the same address the cardholder provided to you. Ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after the payment was made. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the agreed-upon delivery date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different electronic deliveries and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived items\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence proving that the cardholder disputing the transaction received the service.",
            "`uncategorized_text` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Evidence that the service was signed for. If possible, you should provide:\n\n* Cardholder signature\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Evidence that the agreed-upon service date hasn\u2019t arrived yet\n* If the purchase was made up of multiple different shipments and some of them were delivered successfully, evidence that the dispute amount exceeds the value of the unreceived shipments\n* Evidence that delivery is being held by customs in the cardholder\u2019s country\n* Whether you have already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "product_unacceptable": {
      "system_codes": [
        "or service not as described"
      ],
      "evidence": {
        "physical_product": [
          [
            "A description of the product as you represented it to the customer, or images that display how you showed the product to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Whether or not the customer returned the product to you.\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you have already provided a replacement product\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "A description of the digital product or service as it was represented to the customer, or images that display how the customer was shown the product prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "Any server or activity logs showing proof that the cardholder accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "The language of your refund policy and how you disclosed it to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was partially used or consumed, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "A description of the service as you represented it to the customer, or images that display how you advertised the service to the customer prior to purchase.",
            "`product_description` `uncategorized_file`"
          ],
          [
            "Whether or not the customer attempted to resolve the issue with you prior to filing a dispute. If they didn\u2019t reach out to you before the dispute, state that clearly.\n\nIf you did communicate with them prior to the dispute, or if later conversations shed light on the facts of the case, submit this with your evidence. This could look like:\n\n* A screenshot of a text conversation\n* A PDF of an email exchange\n* A PDF of your written account of a phone conversation, including dates of contact",
            "`customer_communication`"
          ],
          [
            "The language of your refund policy and how it was disclosed to the customer prior to purchase. This might be:\n\n* The text copied from your policy page\n* A screenshot of the policy on a receipt\n* A PDF of the applicable part of your business\u2019s terms and conditions\n\nDepending on network and context, the issuer might or might not take this into consideration, but it can\u2019t hurt your case and is generally worth including.",
            "`refund_policy` `refund_policy_disclosure`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was only partially used, whether the dispute amount exceeds the value of the unused portion\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "subscription_canceled": {
      "system_codes": [
        "recurring billing"
      ],
      "evidence": {
        "physical_product": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription was not canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the product was consumed prior to the billing (in cases where billing occurs regularly, but consumption of whatever is being billed for happens prior to the billing)\n* If the product was partially used, whether the dispute amount exceeds the value of the unused portion\n* If customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* If the payment was actually an [installment payment](/payments/buy-now-pay-later) (some networks permit this dispute reason code only for genuinely recurring transactions, not installments of a single payment)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription wasn\u2019t canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* What controls you have in place for customers to regulate automated spending, monitor their own usage, and prevent inadvertent automated billing.\n* If the digital product or service was consumed prior to the billing (in cases where billing occurs regularly, but consumption whatever is being billed for happens prior to the billing)\n* If the product was partially used, whether the dispute amount exceeds the value of the unused portion\n* If the customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* If the payment was actually an [installment payment](/payments/buy-now-pay-later) (some networks permit this dispute reason code only for genuinely recurring transactions, not installments of a single payment)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement product or service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Your subscription cancellation policy, as shown to the customer.",
            "`cancellation_policy`"
          ],
          [
            "An explanation of how and when the customer was shown your cancellation policy prior to purchase.",
            "`cancellation_policy_disclosure`"
          ],
          [
            "A justification for why the customer\u2019s subscription wasn\u2019t canceled, or if it was canceled, why this particular payment is still valid.",
            "`cancellation_rebuttal`"
          ],
          [
            "The date on which the cardholder received or began receiving the purchased service in a clear, human-readable format.",
            "`service_date`"
          ],
          [
            "Documentation showing proof that a service was provided to the cardholder. This could include a copy of a signed contract, work order, or other form of written agreement.",
            "`service_documentation`"
          ],
          [
            "A notification sent to the customer of a renewal or continuation of the subscription, or an acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).",
            "`customer_communication`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* If the service was consumed prior to the billing (in cases where billing occurs regularly, but consumption of whatever is being billed for happens prior to the billing)\n* If the service was partially used, whether the dispute amount exceeds the value of the unused portion\n* If the customer is mistaken about what the actual cancellation date was (for example, in cases where the cancellation was set for a future date)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether you already provided a replacement service\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    },
    "unrecognized": {
      "system_codes": [
        "amount"
      ],
      "evidence": {
        "physical_product": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the products was authorized to sign for\u2014or is known by\u2014cardholder. If they collected the products from a physical location, make sure you provide:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "The address you shipped a physical product to. The shipping address must match a billing address verified with [AVS](/disputes/prevention/verification#avs-check) or be the address of a business that\u2019s connected to the legitimate cardholder in some way.",
            "`shipping_address`"
          ],
          [
            "Documentation showing the product was shipped to the cardholder at the same address the cardholder provided to you. This should ideally include a copy of the shipment receipt or label, and show the full shipping address of the cardholder.",
            "`shipping_documentation`"
          ],
          [
            "The date that a physical product began its route to the shipping address in a clear, human-readable format. This date is prior to the date of the dispute.",
            "`shipping_date`"
          ],
          [
            "The delivery service that shipped a physical product, such as Fedex, UPS, USPS, and so on. If multiple carriers were used for this purchase, separate them with commas.",
            "`shipping_carrier`"
          ],
          [
            "The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, separate them with commas. When Stripe compiles your evidence into a single document, these tracking numbers are expanded to include detailed delivery information from the carrier.",
            "`shipping_tracking_number`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "digital_product_or_service": [
          [
            "Customer\u2019s IP address at the time of purchase",
            "`customer_purchase_ip`"
          ],
          [
            "Name of customer",
            "`customer_name`"
          ],
          [
            "Email address of customer",
            "`customer_email_address`"
          ],
          [
            "Server or activity logs showing proof that the customer accessed or downloaded the purchased digital product after making the payment. Ideally include IP addresses, corresponding timestamps, and any detailed recorded activity.",
            "`access_activity_log`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* Device geographical location at the date and time of transaction\n* Device ID, number, and name (if applicable)\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ],
        "offline_service": [
          [
            "Evidence (for example, photographs or emails) to prove a link between the person receiving the service and the cardholder, or proving that the cardholder disputing the transaction has used or is still using the service.",
            "`customer_communication` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Evidence that the person who signed for the service was authorized to sign for\u2014or is known by\u2014the cardholder. Provide any of the following, if you have them:\n\n* Cardholder signature on the pickup form\n* A copy of identification presented by the cardholder\n* Details of identification presented by the cardholder",
            "`customer_signature` `uncategorized_text` `uncategorized_file`"
          ],
          [
            "Documentation showing that the service was provided to the cardholder, including the date that the cardholder received or began receiving the purchased service in a clear, human-readable format. This could include a copy of a signed contract, work order, or other form of written agreement.\n\nFor passenger transportation or services or travel and expense transactions, evidence that the service was provided and any of the following:\n\n* Proof that the ticket was received at the cardholder\u2019s billing address\n* Evidence of payments related to the disputed payment, such as seat upgrades, extra baggage, and purchases made on board the passenger transport\n* Details of loyalty program rewards earned or redeemed, including address and phone number, that establish a link to the cardholder\n* Evidence that other payments related to the original payment, like upgrades, weren\u2019t disputed",
            "`service_date` `service_documentation`"
          ],
          [
            "Any argument invalidating the dispute reason, such as a PDF or screenshot showing:\n\n* A signed order form for products purchased by mail or phone order\n* Evidence that the transaction was completed by a member of the cardholder\u2019s family or household\n* Evidence of one or more non-disputed payments on the same card\n* Evidence that payments on the same card had been disputed as fraud prior to the issuer authorizing this transaction\n* Evidence that the card\u2019s CVC value was presented at purchase, but the issuer either authorized the charge despite the check failing (`cvc_check` value of `fail`), or didn\u2019t verify it in the first place (`cvc_check` value of `unchecked`)\n* For recurring payments, evidence of a legally binding contract held between your business and the cardholder, that the cardholder is using the products, and of any previous payments not disputed\n* Whether you already issued the refund the cardholder is entitled to\n* Whether the cardholder withdrew the dispute",
            "`uncategorized_file` `uncategorized_text`"
          ]
        ]
      }
    }
  }
}


