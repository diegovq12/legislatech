// app/chatbot/components/MessageInput.tsx
'use client'
import { useState, FormEvent, KeyboardEvent } from 'react';

interface MessageInputProps {
    onSendMessage: (message: string) => void;
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message.trim());
            setMessage('');
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2 w-full">
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje aquí..."
                className="flex-1 resize-none rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                rows={1}
                style={{
                    minHeight: '20px',
                    maxHeight: '60px' // Reducido para que sea más compacto
                }}
            />
            <button
                type="submit"
                disabled={!message.trim()}
                className={`px-4 py-2 rounded-lg font-medium ${
                    message.trim()
                        ? 'bg-pink-600 text-white hover:bg-pink-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
                Enviar
            </button>
        </form>
    );
}