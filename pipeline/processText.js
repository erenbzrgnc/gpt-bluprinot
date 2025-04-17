import { openai } from "../utils/openaiClient.js";

export async function processText(text) {
  const prompt = \`Process the following input and reply in simple language:\n\n\${text}\`;
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  });

  return response.choices[0].message.content.trim();
}
