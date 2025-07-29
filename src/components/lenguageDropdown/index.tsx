import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

import flagES from "../../assets/flags/es.png";
import flagEN from "../../assets/flags/en.png";
import flagDE from "../../assets/flags/de.png";

interface Props {
  onLanguageChange?: () => void;
}

const LanguageDropdown = ({ onLanguageChange }: Props) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const languages = [
    { code: "es", name: "Español", flag: flagES },
    { code: "en", name: "English", flag: flagEN },
    { code: "de", name: "Deutsch", flag: flagDE },
  ];

  const current =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
    onLanguageChange?.(); // 🔁 cerrar el menú si se definió
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative block pl-10 z-[9999] overflow-visible">
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center gap-2 px-2 py-1 hover:bg-gray-100 transition rounded cursor-pointer"
      >
        <img src={current.flag} alt={current.name} className="w-7 h-5" />
        <ChevronDown className="w-10 h-15 text-[#053158] transition-transform duration-200" />
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-0 w-40 bg-white border border-gray-200 shadow-lg rounded z-[9999] bottom-full mt-2 2xl:bottom-auto 2xl:top-full 2xl:mt-2"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full px-4 py-2 flex items-center text-black gap-2 hover:bg-gray-100 cursor-pointer text-sm ${
                i18n.language === lang.code ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
