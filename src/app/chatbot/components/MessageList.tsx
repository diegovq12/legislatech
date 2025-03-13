// app/chatbot/components/MessageList.tsx
'use client'
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../types';
import { FormattedMessage } from './FormattedMessage';

interface MessageListProps {
    messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
    const welcomeMessage: Message = {
        id: uuidv4(),
        sender: 'bot',
        content: 'Hola, bienvenido al chatbot de apoyo contra la violencia política de género. Este es un espacio seguro y confidencial donde estaremos aquí para ayudarte a encontrar soluciones y ofrecerte el apoyo que necesitas. No dudes en compartir tu experiencia, y juntos exploraremos las mejores opciones para tu bienestar.\n\nAquí algunas recomendaciones para comenzar:\n1. Relata de manera libre tu situación. Cuanto más detalle, mejor podremos asistirte.\n2. Si en algún momento necesitas apoyo emocional inmediato, te sugerimos contactar a un profesional de salud o a una organización especializada.\n3. Si estás en una situación de peligro, recuerda que puedes buscar ayuda en tu red de apoyo o realizar una denuncia según corresponda.\n\nEstamos aquí para ayudarte en todo lo que necesites.',
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
                        <div className="max-w-[85%] text-gray-900 p-6 rounded-xl text-xl">
                            <FormattedMessage content={message.content} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
