import { useEffect, useState } from "react";
import proyectosData from "../../data/proyectos.json";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Proyecto {
  id: string;
  nombre: string;
  imagen: string;
  link: string;
}

const Proyectos = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const allProjects: Proyecto[] = proyectosData;
  const { t } = useTranslation();

  const loadMore = () => {
    setVisibleProjects((prev) => {
      const next = prev + 3;
      return next <= allProjects.length ? next : allProjects.length;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ⚠️ Solo depende de visibleProjects
  useEffect(() => {
    const currentVisible = allProjects.slice(0, visibleProjects);
    setLoadedImages((prev) => {
      const updated = { ...prev };
      currentVisible.forEach((proyecto) => {
        if (!(proyecto.id in updated)) {
          updated[proyecto.id] = false;
        }
      });
      return updated;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleProjects]);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="proyectos"
      className="w-full px-4 py-30 bg-white text-primary flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center uppercase">
        {t("projects.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:pl-20 md:pr-20 w-full">
        {allProjects.slice(0, visibleProjects).map((proyecto, idx) => (
          <a
            key={proyecto.id}
            href={proyecto.link}
            className="relative group overflow-hidden rounded-xl shadow-md transform transition-transform duration-500 hover:scale-[1.02] opacity-0 animate-fade-in"
            style={{
              animationDelay: `${idx * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            {!loadedImages[proyecto.id] && (
              <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
                <Loader2 className="animate-spin text-primary w-8 h-8" />
              </div>
            )}

            <img
              src={proyecto.imagen}
              alt={proyecto.nombre}
              className={`w-full h-[22rem] object-cover group-hover:scale-105 transition duration-300 ${
                loadedImages[proyecto.id] ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleImageLoad(proyecto.id)}
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold text-center px-4">
                {proyecto.nombre}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
