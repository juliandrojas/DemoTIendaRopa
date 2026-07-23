import React from "react";
import { WHATSAPP_URL } from "../data/contact.js";

// Tu URL personalizada
const PORTFOLIO_URL = "https://juliandrojas.vercel.app/";

export default function Footer({ brandName = "Mi Tienda" }) {
  return (
    <footer className="bg-dark text-white py-4 mt-auto border-top border-secondary">
      <div className="container">
        <div className="row gy-3 align-items-center">
          {/* Nombre/Marca */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-0 text-danger">{brandName}</h5>
            <small className="text-secondary d-block">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </small>
          </div>

          {/* Enlaces de interés */}
          <div className="col-12 col-md-4 text-center">
            <a
              href="#catalogo"
              className="text-light text-decoration-none mx-2 fs-7"
            >
              Catálogo
            </a>
            <a
              href="#promos"
              className="text-light text-decoration-none mx-2 fs-7"
            >
              Promociones
            </a>
            <a
              href="#contacto"
              className="text-light text-decoration-none mx-2 fs-7"
            >
              Contacto
            </a>
          </div>

          {/* WhatsApp / Atención rápida */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success px-3 py-2 fs-7 fw-medium rounded-pill shadow-sm d-inline-flex align-items-center justify-content-center gap-1"
            >
              💬 Pedidos por WhatsApp
            </a>
          </div>
        </div>

        {/* Separador y Créditos */}
        <hr className="border-secondary my-3 opacity-25" />

        <div className="row">
          <div className="col-12 text-center">
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2 gap-sm-3 fs-7 text-secondary">
              <span>Desarrollado por</span>

              {/* 1. Enlace a WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none fw-semibold link-light"
              >
                JULIAN ROJAS
              </a>

              <span className="d-none d-sm-inline text-secondary">•</span>

              {/* 2. Enlace a tu Web Personal */}
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm rounded-pill px-3 py-1 fs-7 fw-medium ms-sm-1"
              >
                🌐 Visita mi página web
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
