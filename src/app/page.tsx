import Accordion from "@/components/Accordion";
import Image from "next/image";

export default function Home() {
  const accordionItems = [
    {
      title: "1. Violencia simbólica",
      content: "Se manifiesta a través de mensajes, imágenes, signos, objetos, tradiciones, valores, normas, reglas, estereotipos, entre otros, que transmiten y reproducen relaciones de dominación, desigualdad y discriminación."
    },
    {
      title: "2. Violencia política",
      content: "Se manifiesta a través de actos de violencia simbólica, política, psicológica, patrimonial, económica, física, sexual, laboral, obstétrica, mediática, digital, entre otras, que buscan menoscabar la participación política de las mujeres y su ejercicio de derechos políticos y electorales."
    },
    {
      title: "3. Violencia psicológica",
      content: "Se manifiesta a través de actos de intimidación, manipulación, amenaza, humillación, acoso, hostigamiento, discriminación, entre otros, que buscan menoscabar la autoestima, la dignidad, la integridad, la libertad, la autonomía, la seguridad, la salud mental y emocional de las mujeres."
    }
  ];

  return (
    <div className="relative">
      {/* Fondo de bgibelik*/}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Contenido */}

      <div className="flex flex-col bg-white">
        <div className="flex flex-col items-center justify-center p-8 max-w-4xlxl mx-auto">
          <h1 className="text-4xl font-bold mb-4 p-2 self-start w-full ml-4">
        Violencia política de género
          </h1>

          <Image
        src="/mujeresvpdg.png"
        alt="imagen de mujeres con derechos!"
        width={800}
        height={600}
          />
          <p className="text-xl text-gray-500 mt-6 max-w-5xl break-words">
        La violencia política de género es una forma de violencia de género que se manifiesta en actos de violencia simbólica, política, psicológica, patrimonial, económica, física, sexual, laboral, obstétrica, mediática, digital, entre otras, que buscan menoscabar la participación política de las mujeres y su ejercicio de derechos políticos y electorales.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4 p-2 self-start">
          Puedes identificar la Violencia política de género de las siguientes maneras
        </h2>
        <Accordion items={accordionItems} />
      </div>
    </div>
  );


}

