'use client'  
import React, { useState } from "react";

interface AccordionItemProps {
    title: string;
    content: string | React.ReactNode;
}

interface AccordionProps {
    items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg mb-2">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="flex items-center justify-between w-full p-5 font-medium text-gray-500 hover:bg-gray-100"
                    >
                        <span className="fw-bold">{item.title}</span>
                        <svg
                            className={`w-3 h-3 transition-transform duration-800 ${openIndex === index ? 'rotate-180' : ''
                                }`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                    <div
                        className={`overflow-hidden transition-max-height duration-650 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'
                            }`}
                    >
                        <div className="p-5 border-t border-gray-200">
                            {typeof item.content === 'string' ? (
                                <p className="text-gray-500">{item.content}</p>
                            ) : (
                                item.content
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;