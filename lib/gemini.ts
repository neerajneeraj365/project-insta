"use server";

import { GoogleGenAI } from "@google/genai";

export async function getGeminiResponse(
  aiprompt: string,
  file: File,
  questionCount: number,
  questionType: ("multiple-choice" | "fill-in-the-blank" | "true-false")[],
  difficulty: string,   
) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Gemini API key not configured");
  }

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });



  /* ---------- Prompt ---------- */
  const prompt = `
You are a professional customer-insights analyst AI.

You ONLY answer using the data provided below.
Do NOT assume information that is not explicitly present.
If the data is insufficient, clearly say so.

=====================
PROJECT INFORMATION
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

=====================
AI PROMPT
=====================
${aiprompt}

=====================
USER QUESTION
=====================
${aiprompt}
`;


  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response.text;
}