import { useState, useRef, useEffect } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import CustomButton from "../ui/customButton";
import LanguageDropdown from "../lenguageDropdown";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleMenu = () => {
    if (!menuOpen) {
      setShowMenu(true);
      setMenuOpen(true);
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setShowMenu(false);
          setMenuOpen(false);
        },
      });
    }
  };

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        (event.target as HTMLElement)?.closest("button[aria-label='Menu']") === null
      ) {
        toggleMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen]);

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.services"), id: "servicios" },
    { label: t("nav.projects"), path: "/proyectos" },
    { label: t("nav.about"), id: "nosotros" },
    { label: t("nav.contact"), id: "contacto" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="relative w-full flex justify-between items-center h-30 px-4 sm:px-8 2xl:pl-[25rem]">
        <Link to="/">
          <img
            className="object-contain w-[5rem] sm:w-[7rem]"
            src="/LogoMDM.avif"
            alt="Logo MDM"
          />
        </Link>

        <nav className="hidden 2xl:flex space-x-8 text-[#053158] font-medium absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => {
            if (item.path) {
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="group relative transition"
                  onClick={toggleMenu}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#053158] transition-all duration-300 origin-left group-hover:w-full group-hover:origin-right" />
                </Link>
              );
            } else if (isHome && item.id) {
              return (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(item.id);
                    if (target) {
                      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
                      toggleMenu();
                    }
                  }}
                  className="group relative transition"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#053158] transition-all duration-300 origin-left group-hover:w-full group-hover:origin-right" />
                </a>
              );
            } else if (!isHome && item.id) {
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    navigate("/", { state: { scrollToId: item.id } });
                    toggleMenu();
                  }}
                  className="group relative transition"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#053158] transition-all duration-300 origin-left group-hover:w-full group-hover:origin-right" />
                </button>
              );
            }
            return null;
          })}
        </nav>

        <div className="hidden 2xl:flex items-center pr-20">
          <div className="mr-10">
            <ul>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#053158]" />
                <a
                  href="tel:+34664686850"
                  className="hover:underline text-[#053158]"
                >
                  +34 664 68 68 50
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#053158]" />
                <a
                  href="mailto:info@managementmallorca.com"
                  className="hover:underline text-[#053158]"
                >
                  info@managementmallorca.com
                </a>
              </li>
            </ul>
          </div>

          <CustomButton
            label={t("nav.contact")}
            size="xl"
            onClick={() => {
              const target = document.getElementById("contacto");
              if (target) {
                window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
              }
              toggleMenu();
            }}
          />

          <LanguageDropdown />
        </div>

        <button className="2xl:hidden" onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? (
            <X className="w-8 h-8 text-[#053158]" />
          ) : (
            <Menu className="w-8 h-8 text-[#053158]" />
          )}
        </button>
      </div>

      {showMenu && (
        <div
          ref={menuRef}
          className="2xl:hidden bg-white border-t border-gray-200 z-50 overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <nav className="flex flex-col space-y-4 p-4 text-[#053158] font-medium">
            {navItems.map((item) => {
              if (item.path) {
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="hover:text-[#053158]/70 transition"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                );
              } else if (isHome && item.id) {
                return (
                  <a
                    key={item.label}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(item.id);
                      if (target) {
                        window.scrollTo({
                          top: target.offsetTop,
                          behavior: "smooth",
                        });
                        toggleMenu();
                      }
                    }}
                    className="hover:text-[#053158]/70 transition"
                  >
                    {item.label}
                  </a>
                );
              } else if (!isHome && item.id) {
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      navigate("/", { state: { scrollToId: item.id } });
                      toggleMenu();
                    }}
                    className="hover:text-[#053158]/70 transition text-left"
                  >
                    {item.label}
                  </button>
                );
              }
              return null;
            })}

            <div className="flex items-center justify-center mt-2 gap-4">
              <CustomButton
                label={t("nav.contact")}
                size="md"
                onClick={() => {
                  const target = document.getElementById("contacto");
                  if (target) {
                    window.scrollTo({
                      top: target.offsetTop,
                      behavior: "smooth",
                    });
                  }
                  toggleMenu();
                }}
              />
              <LanguageDropdown onLanguageChange={() => menuOpen && toggleMenu()} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
