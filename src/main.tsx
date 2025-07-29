import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import ProyectsDetailsPage from "./pages/proyectDetailsPage";
import ProyectosPage from "./pages/proyectsPage";
import "./i18n"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/proyectos/:slug" element={<ProyectsDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
