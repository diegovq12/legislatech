
import RecursoApoyo from "./RecursoApoyo";
import { RecursoApoyo as RecursoApoyoType } from "../../types"

const recursosEjemplo: RecursoApoyoType[] = [
    {
        titulo: "Línea Nacional contra la Violencia de Género",
        descripcion: "Servicio de atención 24/7 para emergencias",
        telefono: "55 5322 4200",
        correo: "contacto@inmujeres.gob.mx",
        link: "https://www.gob.mx/inmujeres/en"
    },
    {
        titulo: "Centro de Atención a Víctimas de Violencia",
        descripcion: "Atención psicológica y legal gratuita",
        telefono: "55 1234 5678",
        correo: "inmujeres@correo.com",
        link: "https://www.gob.mx/inmujeres/en"
    },
    {
        titulo: "Red Nacional de Refugios",
        descripcion: "Refugios para mujeres en situación de violencia",
        telefono: "(686)5586364",
        correo: "ejemplocjm@gmail.com",
        link: "https://www.gob.mx/inmujeres/en"
    }
];

export default function Sidebar() {
    return (
        <div className="w-80 mt-15 xs:mt-25 bg-white h-full flex flex-col border-r border-gray-200 ">
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-pink-600 ">Recursos de Apoyo</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                {recursosEjemplo.map((recurso, index) => (
                    <RecursoApoyo key={index} recurso={recurso} />
                ))}
            </div>
        </div>
    );
}