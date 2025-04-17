import { config } from "dotenv";
import OpenAI from "openai";

config(); // loads .env before client is created

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});