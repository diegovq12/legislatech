// components/TestimonialCard.js
import React from 'react';

const TestimonialCard = ({ title, preview, tags, likes, comments, author, date }: { title: string; preview: string; tags: string[]; likes: number; comments: number; author: string; date: string }) => {
  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h3 className="text-2xl font-bold text-pink-600">{title}</h3>
      <p className="text-gray-700">{preview}</p>
      <div className="flex flex-wrap mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-pink-200 text-pink-800 px-2 py-1 rounded mr-2">{tag}</span>
        ))}
      </div>
      <a href="#" className="text-pink-600 mt-2 block">Leer el testimonio completo &gt;</a>
      <div className="flex justify-between items-center mt-4 text-gray-600">
        <div>
          <span>Like ({likes})</span> | <span>Comentarios ({comments})</span>
        </div>
        <div>
          Posteado por {author} - {date}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;