// app/chatbot/components/MessageList.tsx
'use client'
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../types';

interface MessageListProps {
    messages: Message[];
}



export default function MessageList({ messages }: MessageListProps) {
    const welcomeMessage: Message = {
        id: uuidv4(),
        sender: 'bot',
        content: 'Bienvenido al chatbot de asistencia contra la violencia política de género. Estamos aquí para ayudarte de manera confiable y comprensiva.',
    };
    const displayedMessages = [welcomeMessage, ...messages];
    
    return (
        <div className="space-y-4 h-full">
            {displayedMessages.map((message) => (
                <div key={message.id} className={`w-full ${message.sender === 'user' ? 'flex justify-end' : ''}`}>
                    {message.sender === 'user' ? (
                        <div className="max-w-[70%] bg-pink-600 text-white rounded-xl rounded-tr-none p-4">
                            <p className="text-xl">{message.content}</p>
                        </div>
                    ) : (
                        <div className="w-full  text-gray-900 p-6 rounded-xl">
                            <p className="text-xl">{message.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
