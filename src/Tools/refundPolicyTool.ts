import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { performTavilySearch } from "../models/Tavily";
import { openai } from "../models";
import { readFile } from "fs/promises";

export const refundPolicyTool = Object.assign(
  new DynamicStructuredTool({
    name: "refund_policy",
    description: "Retrieves and generates a structured, professional refund policy clause using Tavily + OpenAI.",
    schema: z.object({
      businessName: z.string(),
      businessUrl: z.string(),
      disputeReason: z.string(),
    }),
    func: async ({ businessName, businessUrl, disputeReason }) => {
      const domain = new URL(businessUrl).hostname;
      const query = "refund policy";

      const searchResults = await performTavilySearch({
        query,
        domains: [domain],
        max_results: 5,
        search_depth: "advanced",
        include_answer: "advanced",
      });

      const rawContent =
        searchResults.answer ||
        searchResults.results.map((r) => r.content).join("\n\n");

      if (!rawContent || rawContent.trim().length < 10) {
        return `No refund policy found on ${businessUrl}`;
      }

      const systemPrompt = await readFile('prompts/PromptRefundPolicy.md', "utf-8");

      const summaryResponse = await openai.invoke([
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `Business: ${businessName}
Dispute Reason: ${disputeReason}
Website: ${businessUrl}

--- Refund Policy Text Start ---
${rawContent}
--- Refund Policy Text End ---

Summarize the business's refund policy based on the above.`,
        },
      ]);

      return summaryResponse?.content?.toString() || "No summary could be generated.";
    },
  }),
  {
    prepareInput: (state: any) => ({
      businessName: state.business.companyName,
      businessUrl: state.business.websiteUrl,
      disputeReason: state.charge.disputeType,
    }),
  }
);

/**!SECTION
 * Previous Prompt
 * 
 * 
 * 
 * You are a policy analyst assistant. Using the provided refund policy content, generate a 
 * concise 2–5 sentence summary that reflects the policy in clear, structured legal-style 
 * language. Do not use customer-facing tone or conversational phrases. Format the output 
 * like a policy clause.
 */