// app/chatbot/components/ChatInterface.tsx
'use client'
import { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Message } from '../types';

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSendMessage = (content: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            content,
            sender: 'user',
        };

        setMessages(prev => [...prev, newMessage]);
    };

    return (
        <div className="flex flex-col h-full bg-white ">
            {/* Header del chat */}
            <div className=" border-b border-gray-200 p-4 mt-25">
                <h2 className="text-3xl font-semibold text-pink">Bot de asistencia</h2>
            </div>

            {/* Área de mensajes con scroll */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                <MessageList messages={messages} />
            </div>

            {/* Input fijo en la parte inferior */}
            <div className="bg-white border-t border-gray-200 p-4">
                <MessageInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}
