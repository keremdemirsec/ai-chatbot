import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post('/gemini', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).send({ error: 'Prompt is required' });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const chat = model.startChat();
        const result = await chat.sendMessage(prompt);
        const response = await result.response;
        const text = response.text();

        console.log('Resp text:', text);
        res.send({ text });
    } catch (error) {
        console.error('API request failed:', error);
        res.status(500).send({ error: 'API request failed' });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
