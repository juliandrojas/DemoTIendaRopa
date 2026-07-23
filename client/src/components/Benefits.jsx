import React from "react";

export default function Benefits({
  title = "¿Por qué comprar con nosotros?",
  subtitle = "Te ofrecemos la mejor experiencia de compra en cada pedido.",
}) {
  return (
    <section className="py-5 bg-light border-top border-bottom">
      <div className="container">
        {/* Encabezado de la Sección */}
        <div className="text-center mb-4">
          <h3 className="fw-bold fs-4 text-dark mb-1">{title}</h3>
          {subtitle && <p className="text-muted fs-7 mb-0">{subtitle}</p>}
        </div>

        {/* Rejilla de Beneficios */}
        <div className="row text-center gy-4">
          <div className="col-12 col-md-4">
            <div className="fs-2 mb-2">🚚</div>
            <h6 className="fw-bold mb-1">Envíos Nacionales</h6>
            <small className="text-muted">
              Entregas seguras a toda Colombia
            </small>
          </div>

          <div className="col-12 col-md-4">
            <div className="fs-2 mb-2">💬</div>
            <h6 className="fw-bold mb-1">Atención Personalizada</h6>
            <small className="text-muted">Asesoría directa vía WhatsApp</small>
          </div>

          <div className="col-12 col-md-4">
            <div className="fs-2 mb-2">✨</div>
            <h6 className="fw-bold mb-1">Calidad Garantizada</h6>
            <small className="text-muted">
              Prendas con acabados de primera
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
