import { QdrantClient } from "@qdrant/js-client-rest";
import { randomUUID } from "crypto";
import dotenv from "dotenv";
import { getTextEmbedding } from "./embeddings";
dotenv.config();

const QDRANT_API_KEY = process.env.QDRANT_API_KEY!;
const QDRANT_HOST = process.env.QDRANT_HOST!;

export const client = new QdrantClient({
  host: QDRANT_HOST, // use env variable
  apiKey: QDRANT_API_KEY,
  port: 6333,
});

export async function createQdrantCollectionIfNotExists(
  collectionName: string,
  vectorSize: number,
  distance: "Cosine" | "Dot" | "Euclid" = "Cosine"
) {
  try {
    const collections = await client.getCollections();
    const exists = collections.collections.some((c) => c.name === collectionName);
    if (!exists) {
      await client.createCollection(collectionName, {
        vectors: { size: vectorSize, distance },
      });
      console.log(`✅ Created Qdrant collection: ${collectionName}`);
    } else {
      console.log(`ℹ️ Qdrant collection already exists: ${collectionName}`);
    }
  } catch (error) {
    console.error(`❌ Failed to check/create Qdrant collection: ${collectionName}`, error);
  }
}

export async function storeBusinessResponse(
  collectionName: string,
  text: string,
  embedding: number[],
  metadata: {
    businessName?: string;
    disputeType?: string;
    type: "policy" | "terms" | "invoice" | "other";
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
            text,
            ...metadata,
            created_at: new Date().toISOString(),
          },
        },
      ],
    });
    console.log(`✅ Stored ${metadata.type} in ${collectionName}: ${pointId}`);
  } catch (error) {
    console.error(`❌ Failed to store ${metadata.type} in ${collectionName}`, error);
  }
}

export async function storeEvidenceTextVector(
  collectionName: string,
  evidenceText: string,
  {
    disputeType,
    productType,
    cardType,
    evidences
  }: {
    disputeType: string;
    productType: string;
    cardType: string;
    evidences: string[];
  }
) {
  // Ensure the collection exists
  await createQdrantCollectionIfNotExists(collectionName, 1536); // 1536 for OpenAI embeddings

  // Get vector
  const embedding = await getTextEmbedding(evidenceText);

  // Upsert into Qdrant
  const pointId = randomUUID();
  try {
    await client.upsert(collectionName, {
      points: [
        {
          id: pointId,
          vector: embedding,
          payload: {
            text: evidenceText,
            disputeType,
            productType,
            cardType,
            evidences,
            type: "evidence_text",
            created_at: new Date().toISOString(),
          },
        },
      ],
    });

    console.log(`✅ Stored evidenceText in ${collectionName}: ${pointId}`);
  } catch (err) {
    console.error(`❌ Failed to store evidenceText in ${collectionName}`, err);
  }
}

export async function storeBusinessPolicyVector(
  type: "policy" | "terms",
  businessName: string,
  disputeType: string,
  text: string
) {
  const collectionName = "business_policies";

  // Ensure collection exists
  await createQdrantCollectionIfNotExists(collectionName, 1536); // assuming OpenAI embeddings

  // Get vector
  const embedding = await getTextEmbedding(text);

  // Prepare metadata
  const pointId = randomUUID();
  const payload = {
    text,
    businessName,
    disputeType,
    type,
    created_at: new Date().toISOString(),
  };

  try {
    await client.upsert(collectionName, {
      points: [
        {
          id: pointId,
          vector: embedding,
          payload,
        },
      ],
    });

    console.log(`✅ Stored ${type} for ${businessName} in Qdrant: ${pointId}`);
  } catch (error) {
    console.error(`❌ Failed to store ${type} for ${businessName}`, error);
  }
}
