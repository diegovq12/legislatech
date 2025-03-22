// pages/index.js
import React from 'react';
import Sidebar from './components/sidebar';
import TestimonialCard from './components/testimonial.card';

const testimonials = [
    {
        "title": "Acoso en redes sociales durante la campaña",
        "preview": "Durante mi campaña electoral, fui víctima de acoso constante en redes sociales...",
        "tags": ["Tijuana", "Baja California", "2023", "Violencia digital"],
        "likes": 45,
        "comments": 12,
        "author": "anónimo",
        "date": "Febrero 15, 2023"
    },
    {
        "title": "Exclusión en reuniones políticas importantes",
        "preview": "A pesar de ser parte del equipo, fui excluida de reuniones clave...",
        "tags": ["Monterrey", "Nuevo León", "2024", "Discriminación"],
        "likes": 30,
        "comments": 8,
        "author": "anónimo",
        "date": "Abril 10, 2024"
    },
    // Puedes agregar más testimonios aquí
];

const Foro = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-8">
                <h1 className="text-3xl font-bold text-pink-600 mb-4">Testimonios de la comunidad</h1>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Foro;