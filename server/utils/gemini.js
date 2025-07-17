import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

export const gemini = new GoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});
