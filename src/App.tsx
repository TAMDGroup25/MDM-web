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
  const scrollToId = (location.state as { scrollToId?: string })?.scrollToId;
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
  }
}, [location]);

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
