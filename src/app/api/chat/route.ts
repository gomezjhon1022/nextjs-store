import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message } from 'ai';


// // Create an OpenAI API client (that's edge friendly!)
// const openai = new OpenAI({
//   apiKey: process.env.OPEN_AI_KEY,
// });

// // IMPORTANT! Set the runtime to edge
// export const runtime = 'edge';

// export async function POST(req: Request) {
//   // Extract the `messages` from the body of the request
//   const { messages } = await req.json();

//   // Ask OpenAI for a streaming chat completion given the prompt
//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     stream: true,
//     messages,
//   });
//   // Convert the response into a friendly text-stream
//   const stream = OpenAIStream(response);
//   // Respond with the stream
//   return new StreamingTextResponse(stream);
// }

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
    .filter(message => message.role === 'user' || message.role === 'assistant')
    .map(message => ({
      role: message.role === 'user' ? 'user' : 'model',
      parts: [{ text: message.content }],
    })),
});

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();

  const geminiStream = await genAI
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContentStream(buildGoogleGenAIPrompt(messages));

  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(geminiStream);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}