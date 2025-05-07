import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { openai } from "../models";
import { performTavilySearch } from "../models/Tavily";
import { generatePDF } from "../utils";

// Invoice Tool (structured input for disputes)
export const invoiceTool = new DynamicStructuredTool({
  name: "invoice-info",
  description: "Generates invoice-like summary based on original transaction information for dispute evidence.",
  schema: z.object({
    amount: z.number().describe("Transaction amount"),
    chargeDate: z.string().describe("Original charge date"),
    items: z.array(z.string()).describe("Purchased items or services"),
    status: z.string().describe("Transaction status (e.g. Paid, Completed)"),
  }),
  func: async ({ amount, chargeDate, items, status }) => {
    const content = `Invoice Summary for Dispute:
    - Amount Charged: $${amount.toFixed(2)}
    - Charge Date: ${chargeDate}
    - Items: ${items.join(", ")}
    - Status: ${status}`;
    return content;
  },

});


export const refundPolicyTool = new DynamicStructuredTool({
  name: "refund-policy",
  description: "Provides refund policy relevant to a specific dispute context.",
  schema: z.object({
    businessName: z.string().describe("Name of the business"),
    businessUrl: z.string().describe("Business official website"),
    disputeReason: z.string().describe("Reason for dispute"),
  }),
  func: async ({ businessName, businessUrl, disputeReason }) => {
    const query = `Refund policy for ${businessName} related to ${disputeReason}`;
    const searchResults = await performTavilySearch({
      query,
      domains: [new URL(businessUrl).hostname],
    });

    const content = searchResults.answer || searchResults.results.map(r => r.content).join("\n");

    const llmResponse = await openai.invoke([
      {
        role: "system",
        content: `You are a legal assistant helping merchants handle refund-related disputes. Use the content below to generate a concise refund policy summary relevant to the given dispute.`,
      },
      {
        role: "user",
        content: `
Business: ${businessName}
Dispute Reason: ${disputeReason}

--- Search Content ---
${content}
---
Summarize the refund policy specific to this case.`,
      },
    ]);

    return llmResponse?.content.toString();
  },
});


export const termsTool = new DynamicStructuredTool({
  name: "terms-and-conditions",
  description: "Provides terms and conditions relevant to a specific dispute context.",
  schema: z.object({
    businessName: z.string().describe("Name of the business"),
    businessUrl: z.string().describe("Business official website"),
    disputeReason: z.string().describe("Reason for dispute"),
  }),
  func: async ({ businessName, businessUrl, disputeReason }) => {
    const query = `Terms and conditions for ${businessName} related to ${disputeReason}`;
    const searchResults = await performTavilySearch({
      query,
      domains: [new URL(businessUrl).hostname],
    });

    const content = searchResults.answer || searchResults.results.map(r => r.content).join("\n");

    const llmResponse = await openai.invoke([
      {
        role: "system",
        content: `You are a legal assistant summarizing terms and conditions for dispute resolution.`,
      },
      {
        role: "user",
        content: `
Business: ${businessName}
Dispute Reason: ${disputeReason}

--- Search Content ---
${content}
---
Summarize the relevant terms and conditions.`,
      },
    ]);

    return llmResponse.content.toString();
  },
});
