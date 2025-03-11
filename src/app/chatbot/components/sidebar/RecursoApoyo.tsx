import { RecursoApoyo as RecursoApoyoType } from "../../types/index.jsx";

interface RecursoApoyoProps {
  recurso: RecursoApoyoType;
}

export default function RecursoApoyo({ recurso }: RecursoApoyoProps) {
    const{titulo, descripcion, correo, telefono, link} = recurso;

    return(
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h3 className="text-lg font-semibold text-pink-600 mb-2">{titulo}</h3>
            <p className="text-gray-600 mb-3">{descripcion}</p>
            
            {correo && (
                <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${correo}`} className="text-blue-500 hover:underline">{correo}</a>
                </div>
            )}
            
            {telefono && (
                <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${telefono}`} className="text-blue-500 hover:underline">{telefono}</a>
                </div>
            )}
            
            {link && (
                <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Más información
                    </a>
                </div>
            )}
        </div>
    );


}