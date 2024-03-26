import OpenAI from "openai";

export default async function fetchOpenAI(userInput) {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI,
    dangerouslyAllowBrowser: true,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: userInput }],
    model: "gpt-3.5-turbo",
  });

  return chatCompletion;
}
