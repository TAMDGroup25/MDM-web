import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="nosotros"
      className="w-full py-20 px-4 bg-gray-50 text-[#053158] flex flex-col items-center text-center"
    >
      <div className="w-full px-4 mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left uppercase">
          {t("about.title")}
        </h2>

        <div className="grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start mb-8">
          {/* Imagen */}
          <div className="h-full flex">
            <img
              src="/us.avif"
              alt="Equipo de MDM"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Textos */}
          <div className="grid grid-cols-1 gap-6 text-left">
            <p className="text-lg md:text-xl leading-relaxed">
              {t("about.paragraph1")}
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              {t("about.paragraph2")}
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              {t("about.paragraph3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
