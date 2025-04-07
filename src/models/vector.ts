import { QdrantClient } from "@qdrant/js-client-rest";
import { randomUUID } from "crypto";
import dotenv from "dotenv";
dotenv.config();

// 🔐 Load from .env
const QDRANT_API_KEY = process.env.QDRANT_API_KEY!;
const QDRANT_HOST = process.env.QDRANT_HOST!; // e.g., "https://eb076059-492d-4762-9876-5ce6633441bb.us-west-2-0.aws.cloud.qdrant.io:6333"

// ✅ Initialize client
const client = new QdrantClient({
    host: "eb076059-492d-4762-9876-5ce6633441bb.us-west-2-0.aws.cloud.qdrant.io",
    apiKey: QDRANT_API_KEY,
    port: 6333,
});


export async function storeBusinessResponse(
    collectionName: string,
  message: string,
  embedding: number[],
  metadata: {
    disputeType?: string;
    paymentProvider?: string;
    businessName?: string;
  }
) {
  try {
    const pointId = randomUUID();

    await client.upsert(collectionName, {
      points: [
        {
          id: pointId,
          vector: embedding,
          payload: {
            text: message,
            ...metadata,
            created_at: new Date().toISOString(),
          },
        },
      ],
    });

    console.log(`✅ Stored response in Qdrant with id: ${pointId}`);
  } catch (error) {
    console.error("❌ Failed to store business response:", error);
  }
}
