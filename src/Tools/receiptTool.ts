import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";

export const receiptTool = Object.assign(
  new DynamicStructuredTool({
    name: "receipt",
    description: "Returns receipt summary for disputes",
    schema: z.object({
      receiptUrl: z.string(),
    }),
    func: async ({ receiptUrl }) => {
      return `Receipt found at: ${receiptUrl}`;
    },
  }),
  {
    prepareInput: (state: any) => ({
      receiptUrl: state.charge.receipt_url,
    }),
  }
);
