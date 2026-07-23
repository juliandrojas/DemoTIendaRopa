import React from "react";

export default function Hero({
  badgeText = "Nueva Colección",
  title = "Estilo & Moda a tu Alcance",
  subtitle = "Descubre las últimas tendencias en prendas con descuentos exclusivos de temporada.",
  buttonText = "Explorar Catálogo 🛍️",
  buttonLink = "#catalogo",
}) {
  return (
    <section className="bg-light text-dark py-5 border-bottom position-relative overflow-hidden">
      <div className="container py-4 text-center">
        {/* Badge personalizable */}
        {badgeText && (
          <span className="badge bg-danger text-uppercase px-3 py-2 rounded-pill mb-3 fw-semibold tracking-wide">
            {badgeText}
          </span>
        )}

        {/* Título Principal */}
        <h1 className="display-4 fw-extrabold mb-3 text-dark">{title}</h1>

        {/* Subtítulo */}
        <p
          className="lead text-muted mx-auto mb-4 fs-6 fs-md-5"
          style={{ maxWidth: "600px" }}
        >
          {subtitle}
        </p>

        {/* Botón CTA */}
        {buttonText && (
          <a
            href={buttonLink}
            className="btn btn-danger btn-lg rounded-pill px-4 fw-medium shadow-sm fs-6"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
