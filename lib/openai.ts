"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getOpenAIResponse(
  aiprompt: string,
  file: File,
  questionCount: number,
  questionType: ("multiple-choice" | "fill-in-the-blank" | "true-false")[],
  difficulty: string,
) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OpenAI API key not configured");
  }

  const systemPrompt = `
You are a professional customer-insights analyst AI.

You ONLY answer using the data provided below.
Do NOT assume information that is not explicitly present.
If the data is insufficient, clearly say so.

=====================
PDF FILE INFORMATION
=====================
File Name: ${file.name}
File Type: ${file.type}
File Size: ${file.size}
File Last Modified: ${file.lastModified}

=====================
DATA SUMMARY
=====================
Question Count: ${questionCount}
Question Type: ${questionType.join(", ")}
Difficulty: ${difficulty}

=====================
AI PROMPT
=====================
${aiprompt}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-5.2", // Use valid model name
    messages: [{ role: "system", content: systemPrompt }],
    temperature: 0.7,
    max_tokens: 1200,
  });

  return completion.choices[0].message.content;
}
