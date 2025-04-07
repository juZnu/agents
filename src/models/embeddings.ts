import OpenAI from "openai";

const openai_model = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getTextEmbedding(text: string): Promise<number[]> {
  const response = await openai_model.embeddings.create({
    model: "text-embedding-3-small", // or `text-embedding-ada-002`
    input: text,
  });

  return response.data[0].embedding;
}

