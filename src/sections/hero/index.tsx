import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "../../components/ui/customButton";

const Hero = () => {
  const { t } = useTranslation();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollToContact = () => {
    const target = document.getElementById("contacto");
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      {!videoLoaded && (
        <img
          src="/videoScreenshoot.avif"
          alt="Fondo de MDM"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        onCanPlayThrough={() => setVideoLoaded(true)}
      >
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido sobre el video */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-2xl md:text-6xl font-bold mb-6 drop-shadow-md uppercase">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl drop-shadow">
          {t("hero.subtitle")}
        </p>
        <CustomButton
          label={t("hero.button")}
          size="2xl"
          onClick={scrollToContact}
          variant="inverted"
        />
      </div>
    </section>
  );
};

export default Hero;
