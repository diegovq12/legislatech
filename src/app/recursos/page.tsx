"use client";

import RecursoCard from "./componentes/recurso.card";
import Image from "next/image";



const recursos = [
    { 
        nombre: "Estadística de violencia política contra las mujeres", 
        descripcion: "Informe del Instituto Nacional Electoral (INE) que detalla las sanciones aplicadas por violencia política contra las mujeres en razón de género, con datos hasta julio de 2024.", 
        enlace: "https://centralelectoral.ine.mx/2024/07/07/han-sido-sancionadas-363-personas-por-violencia-politica-contra-las-mujeres-en-razon-de-genero-en-casi-cuatro-anos/"
    },
    { 
        nombre: "Historias de violencia hacia las mujeres en política en América Latina", 
        descripcion: "Publicación de ONU Mujeres que recopila testimonios de mujeres políticas de América Latina que han enfrentado violencia de género en su ejercicio político.", 
        enlace: "https://lac.unwomen.org/sites/default/files/Field%20Office%20Americas/Documentos/Publicaciones/2020/05/UNW_WEB_TestimoniosdeViolenciaPolitica.pdf"
    },
    { 
        nombre: "Lineamientos para que los partidos políticos prevengan, atiendan, sancionen, reparen y erradiquen la violencia política contra las mujeres en razón de género", 
        descripcion: "Documento del INE que establece las bases y procedimientos que los partidos políticos deben seguir para abordar la violencia política de género, incluyendo acciones de prevención y sanción.", 
        enlace: "https://igualdad.ine.mx/wp-content/uploads/2020/10/LINEAMIENTOS_Partidos_Prevengan_Atiendan_Sancionen_Reparen_Erradiquen_la_VP_Muejeres_Correc3.pdf"
    },   { 
        nombre: "Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer (Convención de Belém do Pará)", 
        descripcion: "Tratado internacional adoptado en 1994 por la Organización de Estados Americanos (OEA) que establece medidas para prevenir, sancionar y erradicar la violencia contra las mujeres, reconociéndola como una violación de los derechos humanos. Ha sido ratificado por 32 países de la OEA.", 
        enlace: "https://www.oas.org/es/mesecvi/docs/BelemPara-ES.pdf"
    },
    { 
        nombre: "Equipo Latinoamericano de Justicia y Género (ELA)", 
        descripcion: "Organización no gubernamental feminista independiente de Argentina, fundada en 2003, que trabaja en incidencia política, desarrollo de capacidades y redes para mejorar la situación social, política y económica de las mujeres en América Latina.", 
        enlace: "https://www.ela.org.ar/"
    },
    { 
        nombre: "Observatorio de Igualdad de Género de América Latina y el Caribe", 
        descripcion: "Iniciativa de la Comisión Económica para América Latina y el Caribe (CEPAL) que monitorea y analiza la situación de igualdad de género en la región, proporcionando datos y análisis sobre violencia política contra las mujeres.", 
        enlace: "https://oig.cepal.org/"
    },
    { 
        nombre: "Mecanismo de Seguimiento de la Convención de Belém do Pará (MESECVI)", 
        descripcion: "Órgano creado por los Estados parte de la Convención de Belém do Pará para monitorear y promover el cumplimiento de las obligaciones contraídas en materia de prevención, sanción y erradicación de la violencia contra las mujeres.", 
        enlace: "https://www.oas.org/es/mesecvi/"
    },
    { 
        nombre: "Informe Regional sobre Violencia Política contra las Mujeres en América Latina", 
        descripcion: "Estudio elaborado por la OEA que analiza la incidencia de la violencia política contra las mujeres en la región, identificando desafíos y proponiendo recomendaciones para su erradicación.", 
        enlace: "https://www.oas.org/es/mesecvi/docs/ViolenciaPoliticaMujeres.pdf"
    }
];

export default function Page() {
    return (
        <>
        <div className="container mx-auto p-6 flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold mb-2 p-2">
                Recursos de Apoyo
            </h2>
            <Image
                src="/apoyorecursos.webp"
                alt="recursos de apoyo"
                width={400}
                height={400}
                className="object-cover rounded-lg"
            />
            <p className="text-2xl text-gray-600">
                Esta sección tiene como objetivo brindar recursos de ayuda para la violencia política de género, ofreciendo información valiosa y accesible que puede ser de gran apoyo para las mujeres que enfrentan situaciones de violencia en su vida política. Aquí encontrarás enlaces a informes, guías y organizaciones que trabajan para prevenir y erradicar esta problemática, promoviendo así un entorno más seguro y equitativo para todas.
            </p>
        </div>  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {recursos.map((recurso, index) => (
                <RecursoCard
                    key={index}
                    nombre={recurso.nombre}
                    descripcion={recurso.descripcion}
                    enlace={recurso.enlace}
                    target="_blank"
                />
            ))}
        </div>
        </>
    );
}