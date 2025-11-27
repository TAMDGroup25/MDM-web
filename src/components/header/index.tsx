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
  const [isMobileBreakpoint, setIsMobileBreakpoint] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigate = useNavigate();
  const { t } = useTranslation();

  const paddingLeftClass = isMobileBreakpoint ? "pl-4" : "pl-[25rem]";

  const toggleMenu = () => {
    if (!menuOpen) {
      setShowMenu(true);
      setMenuOpen(true);
      // Bloquear el scroll de la página
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setShowMenu(false);
          setMenuOpen(false);
          // Restaurar el scroll de la página
          document.body.style.overflow = "";
        },
      });
    }
  };

  const handleScrollToTopOrNavigateHome = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToTop: true } });
    }
  };

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      const headerEl = document.querySelector("header");
      const topOffset = headerEl ? headerEl.getBoundingClientRect().height : 0;
      setMenuTop(topOffset);
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        {
          height: Math.max(window.innerHeight - topOffset, 0),
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        (event.target as HTMLElement)?.closest("button[aria-label='Menu']") ===
          null
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileBreakpoint(window.innerWidth < 1800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: t("nav.home"), id: "inicio" },
    { label: t("nav.services"), id: "servicios" },
    { label: t("nav.projects"), path: "/proyectos" },
    { label: t("nav.about"), id: "nosotros" },
    { label: t("nav.contact"), id: "contacto" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div
        className={`relative w-full flex justify-between items-center h-30 pr-4 sm:pr-8 ${paddingLeftClass}`}
      >
        {/* Logo */}
        <img
          src="/LogoMDM.avif"
          alt="Logo MDM"
          className="object-contain w-[8rem] sm:w-[10rem] cursor-pointer"
          onClick={handleScrollToTopOrNavigateHome}
        />

        {/* NAV DESKTOP */}
        {!isMobileBreakpoint && (
          <nav className="flex space-x-8 text-primary font-medium absolute left-1/2 transform -translate-x-1/2">
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
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-detail transition-all duration-300 origin-left group-hover:w-full group-hover:origin-right" />
                  </Link>
                );
              } else if (item.id === "inicio") {
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      handleScrollToTopOrNavigateHome();
                      toggleMenu();
                    }}
                    className="group relative transition cursor-pointer"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-detail transition-all duration-300 origin-left group-hover:w-full group-hover:origin-right" />
                  </button>
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
                    className="group relative transition"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-detail transition-all duration-300 origin-left group-hover:w-full group-hover:origin-right" />
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
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-detail transition-all duration-300 origin-left group-hover:w-full group-hover:origin-right" />
                  </button>
                );
              }
              return null;
            })}
          </nav>
        )}

        {/* CONTACTO + BUTTON + IDIOMA */}
        {!isMobileBreakpoint && (
          <div className="flex items-center pr-20">
            <div className="mr-10">
              <ul>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <a
                    href="tel:+34664686850"
                    className="hover:underline text-primary"
                  >
                    +34 664 68 68 50
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <a
                    href="mailto:info@managementmallorca.com"
                    className="hover:underline text-primary"
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
                if (location.pathname === "/") {
                  const target = document.getElementById("contacto");
                  if (target) {
                    window.scrollTo({
                      top: target.offsetTop,
                      behavior: "smooth",
                    });
                  }
                } else {
                  navigate("/", { state: { scrollToId: "contacto" } });
                }
                toggleMenu();
              }}
            />

            <LanguageDropdown />
          </div>
        )}

        {/* BOTÓN MENU MOBILE */}
        {isMobileBreakpoint && (
          <div className="flex items-center gap-3">
            <LanguageDropdown />
            <button onClick={toggleMenu} aria-label="Menu">
              {menuOpen ? (
                <X className="w-8 h-8 text-primary" />
              ) : (
                <Menu className="w-8 h-8 text-primary" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* MENÚ MOBILE */}
      {showMenu && isMobileBreakpoint && (
        <div
          ref={menuRef}
          className="fixed left-0 right-0 bg-white border-t border-gray-200 z-50 overflow-hidden"
          style={{ top: menuTop, height: 0, opacity: 0 }}
        >
          <nav className="flex flex-col space-y-4 p-6 text-primary font-medium h-full overflow-y-auto pb-40">
            {navItems.map((item) => {
              if (item.path) {
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="hover:text-primary/70 transition"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                );
              } else if (item.id === "inicio") {
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      handleScrollToTopOrNavigateHome();
                      toggleMenu();
                    }}
                    className="hover:text-primary/70 transition text-left"
                  >
                    {item.label}
                  </button>
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
                    className="hover:text-primary/70 transition"
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
                    className="hover:text-primary/70 transition text-left"
                  >
                    {item.label}
                  </button>
                );
              }
              return null;
            })}

            {/* Selector de idioma eliminado del menú móvil; ahora está en el header */}

            {/* Legal group in mobile menu */}
            <div className="mt-4 border-t pt-4">
              <span className="font-semibold mb-2">{t("legal.title")}</span>
              <div className="flex flex-col space-y-2 mt-2">
                <Link
                  to="/aviso-legal"
                  onClick={toggleMenu}
                  className="hover:text-primary/70 transition"
                >
                  {t("legal.legalNotice")}
                </Link>
                <Link
                  to="/privacidad"
                  onClick={toggleMenu}
                  className="hover:text-primary/70 transition"
                >
                  {t("legal.privacy")}
                </Link>
                <Link
                  to="/cookies"
                  onClick={toggleMenu}
                  className="hover:text-primary/70 transition"
                >
                  {t("legal.cookies")}
                </Link>
                <a
                  href="#"
                  className="hover:text-detail transition"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new Event("openCookiePreferences"));
                    toggleMenu();
                  }}
                >
                  {t("nav.cookiePrefs")}
                </a>
              </div>
            </div>

            {/* Botón de contacto eliminado en menú móvil */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
