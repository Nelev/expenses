import express from 'express';
import ollama from 'ollama';
import fs from 'fs';

import { extractPrompt } from './const';

const app = express();

app.use(express.json());

app.get("/", function(req, res) {
    return res.send("Express is running....");
});

app.post('/scan-document', async (req, res) => {
  try {
    req.setTimeout(500000);
    const imagePath = './assets/receipt1.png';
    const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });
    const response = await ollama.chat({
      model: 'llama3.2-vision:latest',
      messages: [{ role: 'user', content: extractPrompt, images: [imageBase64] }],
    });
    res.json({ reply: response.message.content });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});