import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/layout";
import Hero from "./sections/hero";
import About from "./sections/aboutUs";
import Contact from "./components/contact";
import Services from "./sections/services";
import Separator from "./components/separator";

function App() {
  const location = useLocation();

  useEffect(() => {
    const { scrollToId, scrollToTop } = (location.state || {}) as {
      scrollToId?: string;
      scrollToTop?: boolean;
    };

    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        setTimeout(() => {
          window.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
          });
        }, 100);
      }
    } else if (scrollToTop) {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    } else {
      // Siempre que cambie de ruta sin scrollToId ni scrollToTop → sube arriba
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname]); // importante: solo cuando cambia el pathname

  return (
    <Layout>
      <Hero />
      <About />
      <Separator />
      <Services />
      <Contact />
    </Layout>
  );
}

export default App;
