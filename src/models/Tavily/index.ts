import { tavily } from "@tavily/core";
import { PerformTavilySearchParams } from "./tavily.types";

const tavily_client = tavily({ apiKey: process.env.TAVILY_API_KEY });


export const performTavilySearch = async ({
  query,
  domains = ["www.google.com"],
  max_results = 5,
  search_depth = "advanced",
  include_answer = "advanced"
}: PerformTavilySearchParams) => {
  try {
    const response = await tavily_client.search(
      query,
      {
        search_depth: search_depth,
        max_results: max_results,
        include_answer: include_answer,
        include_domains: domains,
      }
    );
    return response;
  } catch (error) {
    console.error("Error performing Tavily search:", error);
    throw error;
  }
};
