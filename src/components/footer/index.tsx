import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();



  return (
    <footer className="bg-gray-100 w-full text-primary py-10 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 sm:flex sm:justify-between sm:items-center">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center w-full sm:w-[30%]">
          <img src="/LogoMDM.avif" alt="MDM Logo" className="w-36 mb-4" />
          <p className="mt-2 text-sm text-center">{t("footer.description")}</p>
        </div>

        {/* Navegación eliminada según solicitud */}

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">{t("legal.title")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/aviso-legal" className="hover:text-detail transition">
                {t("legal.legalNotice")}
              </a>
            </li>
            <li>
              <a href="/privacidad" className="hover:text-detail transition">
                {t("legal.privacy")}
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:text-detail transition">
                {t("legal.cookies")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-detail transition"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("openCookiePreferences"));
                }}
              >
                {t("nav.cookiePrefs")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold mb-3">{t("footer.contact.title")}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mallorca"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Mallorca, España
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <a href="tel:+34664686850" className="hover:underline">
                +34 664 68 68 50
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a
                href="mailto:info@managementmallorca.com"
                className="hover:underline"
              >
                info@managementmallorca.com
              </a>
            </li>
          </ul>
        </div>

        {/* Horario */}
        <div className="hidden lg:block">
          <h3 className="font-semibold mb-3">{t("footer.schedule.title")}</h3>
          <ul className="space-y-2 text-sm">
            <li>{t("footer.schedule.hours")}</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="md:pr-0 pr-5 md:pl-0 pl-5 mt-10 border-t pt-6 text-center text-sm text-secondary">
        &copy; {new Date().getFullYear()} MDM · Management Development Mallorca.{" "}
        {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
