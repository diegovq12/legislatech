import Accordion from "@/components/Accordion";
import Image from "next/image";
import GraficaViolencia from "./components/grafica";

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

      {/* Testimonio caso real */}
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 p-2 self-start">
          Testimonios de casos reales
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden">
              <Image
                src="/testimonio.webp"
                alt="imagen de testimonio"
                width={800}
                height={800}
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">
              Elisa Zepeda Lagunas: Caso real de Violencia política de género
            </h2>
            <p className="text-xl text-gray-500">
              En un principio, las mujeres no teníamos voz en las decisiones importantes de nuestro pueblo, nuestra participación se limitaba a levantar la mano. Sin embargo, comencé a trabajar en la planeación participativa para el desarrollo comunitario, conectando con otras organizaciones y ganando espacio en los comités y el consejo indígena.
            </p>
            <br />
            <p className="text-xl text-gray-500">
              Al volverme visible en estos espacios, empecé a vivir violencia política de género, especialmente de aquellos que ostentaban el poder. El 14 de diciembre, mi equipo y yo fuimos atacados por personas armadas que querían "mi cabeza" y la de mi familia. Nos secuestraron, golpearon brutalmente y asesinaron a mi hermano.
            </p>
            <br />
            <p className="text-xl text-gray-500">
              A pesar del dolor y la culpa, el apoyo de mi comunidad, especialmente de las mujeres, me impulsó a seguir adelante. Decidí no convertirme en una víctima invisible, sino luchar por nuestros derechos. En 2016, fui elegida presidenta municipal, y en 2018 diputada, convencida de que la alianza entre mujeres es clave para enfrentar la violencia política y eliminar la impunidad.
            </p>
            <br />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 self-start ml-4">
          Gráfica de tipos de Violencia política de género
        </h2>
        <GraficaViolencia />
        <p className="text-gray-500 mt-2 self-end">Fuente: Base de datos Noria--MXAC sobre violencia politica y electoral en México 2021.</p>
      </div>

      {/* Ayuda aqui debera ir algo como de informacion de contacto que te redigira a una pagina para poder llenar un formato de denuncia
 */}<div className="container mx-auto my-10 p-8 bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg shadow-xl mt-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Contacto y Denuncias</h2>
          <p className="text-xl text-gray-700 mb-6">
            Si necesitas ayuda o deseas reportar un caso de violencia política de género, por favor contáctanos o llena el formulario de denuncia.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://igualdad.ine.mx/wp-content/uploads/2020/12/Formulario_Formato_de_Denuncia_VPCMRG_listo.pdf"
              className="bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105"
              target="_blank"
            >
              Ir al formulario de denuncia
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center p-4">
          <Image
            src="/denuncia.webp"
            alt="imagen de denuncia"
            width={400}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
