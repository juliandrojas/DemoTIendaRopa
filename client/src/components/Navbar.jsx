import React from "react";

export default function Navbar({ brandName = "Catálogo de Moda" }) {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top border-bottom border-secondary py-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-white fs-4 mb-0" href="/">
          {brandName}
        </a>

        <div className="d-flex align-items-center gap-3">
          <a
            href="#catalogo"
            className="text-light text-decoration-none fs-7 d-none d-sm-inline"
          >
            Ver Productos
          </a>
        </div>
      </div>
    </nav>
  );
}
