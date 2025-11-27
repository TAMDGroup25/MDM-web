import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import ProyectsDetailsPage from "./pages/proyectDetailsPage";
import ProyectosPage from "./pages/proyectsPage";
import "./i18n"; 
import ScrollToTop from "./utils/scrollToTop";
import LegalNoticePage from "./pages/legalNoticePage";
import PrivacyPolicyPage from "./pages/privacyPolicyPage";
import CookiesPolicyPage from "./pages/cookiesPolicyPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/proyectos/:slug" element={<ProyectsDetailsPage />} />
        <Route path="/aviso-legal" element={<LegalNoticePage />} />
        <Route path="/privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/cookies" element={<CookiesPolicyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
