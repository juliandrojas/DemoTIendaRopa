import React from "react";

const PORTFOLIO_URL = "https://juliandrojas.vercel.app/";

export default function Footer({
  brandName = "Mi Tienda",
  whatsappUrl = "#", // Se puede pasar por props o dejar por defecto en "#"
}) {
  return (
    <footer className="bg-dark text-white py-4 mt-auto border-top border-secondary">
      <div className="container">
        <div className="row gy-3 align-items-center">
          {/* Nombre/Marca */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h5 className="fw-bold mb-0 text-danger">{brandName}</h5>
            <small className="text-secondary d-block">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </small>
          </div>

          {/* WhatsApp / Atención rápida */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <a
              href={whatsappUrl}
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

              <span className="text-white fw-semibold">JULIAN ROJAS</span>

              <span className="d-none d-sm-inline text-secondary">•</span>

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
