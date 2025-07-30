import { useParams } from "react-router-dom";
import proyectos from "../../data/proyectos.json";
import Separator from "../../components/separator";
import {
  MapPin,
  Ruler,
  Users,
  GanttChart,
  FileText,
  BadgeCheck,
} from "lucide-react";

const ProyectsDetailsPage = () => {
  const { slug } = useParams();
  const proyecto = proyectos.find((p) => p.id === slug);

  if (!proyecto) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Proyecto no encontrado.
      </div>
    );
  }

  return (
    <section
      id="sobre"
      className="bg-white w-full md:scroll-mt-[13rem] scroll-mt-[2rem] mt-10 md:mt-0"
    >
      {/* Bloque principal con imagen destacada y texto */}
      <div className="w-full h-[80vh] flex flex-col md:flex-row items-stretch overflow-hidden">
        <div className="w-full md:w-1/2 hidden md:block h-full relative">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${proyecto.imagen}')`,
            }}
          />

          <svg
            className="hidden md:block absolute top-0 right-0 h-full w-[25rem] z-10"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="
                M10,0 
                L6.5,0 L6.5,20 L10,20
                L10,20 L4,20 L4,45 L10,45
                L10,45 L7.5,45 L7.5,65 L10,65
                L10,65 L5.5,65 L5.5,85 L10,85
                L10,85 L8.5,85 L8.5,100 L10,100
                Z
              "
            />
          </svg>
        </div>

        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 py-10">
          <div className="text-[#053158] max-w-2xl w-full space-y-6">
            <div className="mb-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-center leading-tight uppercase">
                {proyecto.nombre}
              </h2>
              <Separator />
              <div className="flex items-center justify-start">
                <MapPin className="mr-4" size={15} color="#053158" />
                <span className="uppercase text-sm tracking-widest text-gray-500">
                  {proyecto.ubicacion} –{" "}
                  {new Date(proyecto.inicio).toLocaleDateString("es-ES", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            <p className="text-lg md:text-xl leading-relaxed">
              {proyecto.descripcion}
            </p>

            <ul className="text-base md:text-lg space-y-3">
              {proyecto.tipo && (
                <li className="flex items-center">
                  <GanttChart className="w-5 h-5 mr-4 text-[#053158]" />
                  <span>{proyecto.tipo}</span>
                </li>
              )}
              {proyecto.superficie && (
                <li className="flex items-center">
                  <Ruler className="w-5 h-5 mr-4 text-[#053158]" />
                  <span>{proyecto.superficie}</span>
                </li>
              )}
              {proyecto.colaboradores && proyecto.colaboradores.length > 0 && (
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-4 text-[#053158]" />
                  <span>{proyecto.colaboradores.join(", ")}</span>
                </li>
              )}
              {proyecto.descripcionTecnica && (
                <li className="flex items-center">
                  <FileText className="w-5 h-5 mr-4 text-[#053158]" />
                  <span>{proyecto.descripcionTecnica}</span>
                </li>
              )}
              {proyecto.enProceso && (
                <li className="flex items-center">
                  <BadgeCheck className="w-5 h-5 mr-4 text-green-600" />
                  <span className="uppercase text-sm font-medium text-green-600">
                    En proceso
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Galería de imágenes adicionales */}
      {proyecto.galeria && proyecto.galeria.length > 0 && (
        <div className="w-full px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Galería del Proyecto
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {proyecto.galeria.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Imagen ${i + 1} del proyecto ${proyecto.nombre}`}
                className="w-full h-[18rem] object-cover rounded-xl shadow"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProyectsDetailsPage;
