import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
});

import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

let messageHistory: ChatCompletionMessageParam[] = [];

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'No message provided' }, { status: 400 });
        }

        messageHistory.push({ role: 'user', content: message });

        const completion = await openai.chat.completions.create({
            model: process.env.OPENAI_MODEL as string,
            messages: [
                { role: 'system', content: 'Eres un asistente útil' },
                ...messageHistory, 
            ],
        });
        if (!completion.choices || completion.choices.length === 0) {
            return NextResponse.json({ error: 'No response from OpenAI' }, { status: 500 });
        }

        const botResponse = completion.choices[0].message.content;
        messageHistory.push({ role: 'assistant', content: botResponse });

        return NextResponse.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('Error en la API de OpenAI:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}


