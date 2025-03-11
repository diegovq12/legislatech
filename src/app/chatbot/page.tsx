'use client'// app/chatbot/page.tsx
import { useState } from 'react';


import ChatInterface from './components/ChatInterface';
import Sidebar from './components/sidebar/Sidebar';

export default function Chatbot() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex absolute inset-0 overflow-hidden bg-gray-100">
            <aside
                className={`fixed md:static md:block transform transition-transform duration-300 ease-in-out h-full z-40
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:translate-x-0`}
            >
                <Sidebar />
            </aside>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Chat Interface */}
            <main className="flex-1 flex flex-col relative">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="md:hidden absolute top-20 right-10 z-50 bg-pink-600 text-white p-2 rounded-lg shadow-lg"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4h16v16H4zM4 8l8 6 8-6"
                        />
                    </svg>

                </button>
                <ChatInterface />
            </main>
        </div>
    );
}