import fs from 'fs';
import { extractPrompt } from '../prompts/index';


export const processDocument = async (): Promise<any> => {
  try {
    const imagePath = './assets/receipt1.png';
    const modelUrl = process.env.MODEL_URL ?? "http://model:11434";
    const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });
     const response = await fetch(`${modelUrl}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        model: process.env.AI_MODEL_NAME,
        prompt: extractPrompt,
        stream: false,
        images: [imageBase64]
  })
    });
    const data = await response.json();
    return data;
} catch (error: any) {
    throw new Error(error.message);
  }
};