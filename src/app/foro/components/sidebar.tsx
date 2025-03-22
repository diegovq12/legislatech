// components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 p-6 bg-pink-50 shadow-lg rounded-lg mt-5 ml-10">
      <h2 className="text-2xl font-bold text-pink-600 mb-6">Filtros</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar testimonios"
          className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-pink-600 mb-2">Estado</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Baja California
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Sonora
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Chihuahua
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Nuevo Leon
          </label>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-pink-600 mb-2">Municipio</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Ensenada
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Tijuana
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Mexicali
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Monterrey
          </label>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-pink-600 mb-2">Año</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> 2025
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> 2024
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> 2023
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> 2022
          </label>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-pink-600 mb-2">Módulo</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Proceso electoral
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Violencia digital
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Seguridad
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;