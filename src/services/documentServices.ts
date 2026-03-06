import ollama from 'ollama';
import fs from 'fs';
import { extractPrompt } from '../prompts/index';


export const processDocument = async (): Promise<any> => {
  try {
    const imagePath = './assets/receipt1.png';
    const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });
    const response = await ollama.chat({
      model: 'llava',
      messages: [{ role: 'user', content: extractPrompt, images: [imageBase64] }],
    });
    return response.message.content;
} catch (error: any) {
    throw new Error(error.message);
  }
};