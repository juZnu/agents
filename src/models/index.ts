import { ChatOpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import "dotenv/config";


export const openai = new ChatOpenAI({
  model: "gpt-4o",  
  temperature: 0, 
  apiKey: process.env.OPENAI_API_KEY, 
  maxRetries: 10
});


// export const openai = new ChatAnthropic({
//   model: "Claude 3 Opus", // Or claude-3-opus, etc.
//   temperature: 0,
//   apiKey: process.env.ANTHROPIC_API_KEY,
//   maxRetries: 10,
// });

// export const openai = new ChatGoogleGenerativeAI({
//   model: "gemini-1.5-pro", // Or gemini-1.5-pro
//   temperature: 0,
//   apiKey: process.env.GOOGLE_API_KEY,
//   maxRetries: 10,
// });