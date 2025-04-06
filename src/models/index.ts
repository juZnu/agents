import { ChatOpenAI } from "@langchain/openai";
import "dotenv/config";


export const openai = new ChatOpenAI({
  model: "gpt-4o",  
  temperature: 0, 
  apiKey: process.env.OPENAI_API_KEY, 
  maxRetries: 10
});
