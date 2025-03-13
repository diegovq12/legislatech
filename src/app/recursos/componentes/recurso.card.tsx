export default function RecursoCard({ nombre, descripcion, enlace, target }: { 
    nombre: string, 
    descripcion: string, 
    enlace: string,
    target?: string 
}) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{nombre}</h2>
            <p className="text-gray-500 mb-4">{descripcion}</p>
            <a
                href={enlace}
                target={target}
                className="bg-pink-600 text-white mb-4 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105 float-right"
            >
                Ir al recurso
            </a>
        </div>
    );
}