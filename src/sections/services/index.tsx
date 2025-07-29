import {
  Building2,
  ClipboardList,
  Lamp,
  ScrollText,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Servicios = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.engineering.title"),
      icon: <Building2 size={40} className="text-[#053158]" />,
      description: t("services.engineering.description"),
      items: t("services.engineering.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.management.title"),
      icon: <ClipboardList size={40} className="text-[#053158]" />,
      description: t("services.management.description"),
      items: t("services.management.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.interior.title"),
      icon: <Lamp size={40} className="text-[#053158]" />,
      description: t("services.interior.description"),
      items: t("services.interior.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.licensing.title"),
      icon: <ScrollText size={40} className="text-[#053158]" />,
      description: t("services.licensing.description"),
      items: t("services.licensing.items", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section
      id="servicios"
      className="w-full py-20 px-4 bg-gray-50 text-[#053158] flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center uppercase">
        {t("services.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center hover:shadow-xl hover:scale-[1.02] transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-sm text-[#053158]/80 mb-4">
              {service.description}
            </p>
            <ul className="text-sm text-[#053158] list-disc text-left pl-4 space-y-1">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
