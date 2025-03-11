// app/chatbot/components/MessageList.tsx
'use client'
import { Message } from '../types';

interface MessageListProps {
    messages: Message[];
}



export default function MessageList({ messages }: MessageListProps) {
    const welcomeMessage: Message = {
        id: 'welcome',
        sender: 'bot',
        content: 'Bienvenido al chatbot de asistencia contra la violencia política de género. Estamos aquí para ayudarte de manera confiable y comprensiva.',
    };
    const contestacionMensaje: Message = {
        id: 'respuesta',
        sender: 'user',
        content: 'Necesito ayuda con un caso de violencia política de género',
    };

    const contestacionMensajebot: Message = {
        id: 'respuestaarespuesta',
        sender: 'bot',
        content: 'Para realizar una denuncia, sigue estos pasos: 1. Reúne pruebas. 2. Acude a la autoridad competente. 3. Presenta tu denuncia formalmente. 4. Sigue el proceso legal.',
    };

    if (messages.length === 0 || messages[0].id !== 'welcome') {
        messages.unshift(welcomeMessage);
    }
    
    if (messages.length === 1 || messages[1].id !== 'respuesta') {
        messages.push(contestacionMensaje);
    }

    if (messages.length === 2 || messages[2].id !== 'respuestaarespuesta') {
        messages.push(contestacionMensajebot);
    }

    return (
        <div className="space-y-4 h-full">
            {messages.map((message) => (
                <div key={message.id} className={`w-full ${message.sender === 'user' ? 'flex justify-end' : ''}`}>
                    {message.sender === 'user' ? (
                        <div className="max-w-[70%] bg-pink-600 text-white rounded-xl rounded-tr-none p-4">
                            <p className="text-xl">{message.content}</p>
                        </div>
                    ) : (
                        <div className="w-full bg-gray-200 text-gray-800 p-6 rounded-xl">
                            <p className="text-xl">{message.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
