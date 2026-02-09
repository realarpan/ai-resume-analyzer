"use server";

import { openai } from "@/lib/openai";

export async function analyzeResume(resume: string, job: string) {
  try {
    if (!resume || !job) {
      return "❌ Please provide both resume and job description.";
    }

    const prompt = `
You are an ATS system and career coach.

Analyze this resume against the job description.

Resume:
${resume}

Job Description:
${job}

Return:
- Match percentage
- Missing skills
- Strengths
- Improvement suggestions
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content ?? "⚠️ No response from AI";
  } catch (error: any) {
    console.error("AI ERROR:", error);
    return "❌ AI service failed. Check API key or usage limits.";
  }
}
