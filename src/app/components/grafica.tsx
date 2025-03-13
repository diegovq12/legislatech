"use client";

import { useEffect, useState, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    { name: "Arma de fuego", porcentaje: 61.6, color: "#DB2777" },
    { name: "Amenaza", porcentaje: 15.1, color: "#F472B6" },
    { name: "Secuestro", porcentaje: 7.4, color: "#FB7185" },
    { name: "Renuncia forzada", porcentaje: 1.9, color: "#BE185D" },
    { name: "Retención", porcentaje: 1.9, color: "#F43F5E" },
];

export default function GraficaViolencia() {
    const [chartWidth, setChartWidth] = useState(0); 
    const chartContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (chartContainerRef.current) {
                setChartWidth(chartContainerRef.current.offsetWidth * 0.9); 
            }
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={chartContainerRef} className="w-full">
            <BarChart width={chartWidth} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend
                    formatter={(value, entry, index) => {
                        const percentage = data[index].porcentaje;
                        return `${data[index].name}: ${percentage}%`;
                    }}
                />
                {data.map((entry, index) => (
                    <Bar
                        key={index}
                        dataKey="porcentaje"
                        fill={entry.color}
                        name={`${entry.name}: ${entry.porcentaje}%`}
                    />
                ))}
            </BarChart>
        </div>
    );
}