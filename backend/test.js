import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function findMyModels() {
  try {
    console.log("Fetching available models from Google...");
    const response = await genAI.models.list();

    console.log("--- Models with '3.1' in the name ---");
    for await (const model of response) {
      // Filtering the list just to show the new 3.1 models
      if (model.name.includes("3.1")) {
        console.log(`API String: ${model.name} | Status: ${model.state}`);
        console.log(model);
      }
    }
  } catch (error) {
    console.error("Failed to list models:", error);
  }
}

findMyModels();
