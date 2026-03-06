import express from 'express';
import ollama from 'ollama';
import fs from 'fs';

import { extractPrompt } from './const.ts';

const app = express();
const router = express.Router();

app.use(express.json());

router.post('/scan-document', async (req, res) => {
  try {
    req.setTimeout(500000);
    const imagePath = './assets/receipt1.png';
    const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });
    const response = await ollama.chat({
      model: 'llama3.2-vision:latest',
      messages: [{ role: 'user', content: extractPrompt, images: [imageBase64] }],
    });
    res.json({ reply: response.message.content });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});