import React from "react";
import { formatCOP } from "../utils/formatters";
import { products } from "../data/products";

export default function Promotions() {
  const promoProducts = products.filter(
    (product) => product.discount && product.discount > 0,
  );

  return (
    <div className="container my-4 px-3">
      <h1 className="text-center mb-4 fw-bold fs-3 fs-md-2">Promociones</h1>

      <div className="row g-3">
        {promoProducts.length === 0 ? (
          <p className="text-center text-muted col-12 py-5">
            No hay promociones disponibles en este momento.
          </p>
        ) : (
          promoProducts.map((product) => {
            const hasDiscount = Boolean(
              product.discount && product.discount > 0,
            );
            const finalPrice = hasDiscount
              ? product.price * (1 - product.discount)
              : product.price;

            return (
              <div className="col-12 col-sm-6 col-md-4" key={product.id}>
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                  {/* Badge de Descuento (Sin '0' fantasma) */}
                  {hasDiscount ? (
                    <span className="position-absolute top-0 end-0 bg-danger text-white fs-7 fw-bold px-2 py-1 z-1 m-2 rounded-2">
                      -{Math.round(product.discount * 100)}% OFF
                    </span>
                  ) : null}

                  {/* Imagen del Producto */}
                  <div
                    style={{ height: "220px" }}
                    className="bg-light position-relative overflow-hidden"
                  >
                    <img
                      src={product.image}
                      className="w-100 h-100 object-fit-cover"
                      alt={product.name}
                    />
                  </div>

                  {/* Detalle y Precios */}
                  <div className="card-body p-3 d-flex flex-column justify-content-between text-center">
                    <div>
                      <span className="text-muted text-uppercase fs-7 d-block mb-1">
                        {product.category}
                      </span>
                      <h6
                        className="card-title fw-bold mb-2 text-truncate"
                        title={product.name}
                      >
                        {product.name}
                      </h6>

                      {/* Zona de Precios limpia */}
                      <div className="mb-3">
                        {hasDiscount ? (
                          <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                            <span className="text-muted text-decoration-line-through fs-7">
                              {formatCOP(product.price)}
                            </span>
                            <span className="text-danger fw-bold fs-5">
                              {formatCOP(finalPrice)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-dark fw-bold fs-5">
                            {formatCOP(product.price)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button className="btn btn-dark w-100 rounded-pill btn-sm fw-medium py-2 disabled">
                      Agregar 🛒
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
