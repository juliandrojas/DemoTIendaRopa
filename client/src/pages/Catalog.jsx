import React, { useState, useMemo } from "react";
import { products } from "../data/products.js";
import { categories } from "../data/categories.js";
import { formatCOP } from "../utils/formatters.js";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [sortAsc, setSortAsc] = useState(false);

  const visibleItems = useMemo(() => {
    let items =
      activeCategory === "Todo"
        ? products
        : products.filter((item) => item.category === activeCategory);

    if (sortAsc) {
      items = [...items].sort((a, b) => {
        const priceA = a.discount ? a.price * (1 - a.discount) : a.price;
        const priceB = b.discount ? b.price * (1 - b.discount) : b.price;
        return priceA - priceB;
      });
    }

    return items;
  }, [activeCategory, sortAsc]);

  return (
    <div className="container my-4 my-md-5 px-3">
      <h2 className="text-center mb-4 fw-bold fs-3 fs-md-2">
        Catálogo de Productos
      </h2>

      {/* Barra de Filtros y Ordenamiento adaptativa */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-4">
        <div className="d-flex flex-wrap gap-2 justify-content-center w-100 w-md-auto">
          {categories.map((category) => {
            const active = category === activeCategory;
            return (
              <button
                key={category}
                className={`btn btn-sm rounded-pill px-3 ${
                  active ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        <button
          className="btn btn-outline-secondary btn-sm rounded-pill px-3 d-flex align-items-center justify-content-center gap-2 w-100 w-md-auto"
          onClick={() => setSortAsc((prev) => !prev)}
        >
          {sortAsc ? "▲ Precio: Menor a Mayor" : "⇅ Ordenar por Precio"}
        </button>
      </div>

      {/* Grid de Productos */}
      <div className="row g-3">
        {visibleItems.map((item) => {
          const hasDiscount = Boolean(item.discount && item.discount > 0);
          const finalPrice = hasDiscount
            ? item.price * (1 - item.discount)
            : item.price;

          return (
            <div key={item.id} className="col-12 col-sm-6 col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                {/* Badge de Descuento */}
                {hasDiscount ? (
                  <span className="position-absolute top-0 end-0 bg-danger text-white fs-7 fw-bold px-2 py-1 z-1 m-2 rounded-2">
                    -{Math.round(item.discount * 100)}% OFF
                  </span>
                ) : null}

                {/* Imagen del Producto */}
                <div
                  style={{ height: "220px" }}
                  className="bg-light position-relative overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Detalle del Producto */}
                <div className="card-body p-3 d-flex flex-column justify-content-between text-center">
                  <div>
                    <span className="text-muted text-uppercase fs-7 d-block mb-1">
                      {item.category}
                    </span>
                    <h6
                      className="card-title fw-bold mb-2 text-truncate"
                      title={item.name}
                    >
                      {item.name}
                    </h6>

                    <div className="mb-3">
                      {hasDiscount ? (
                        <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                          <span className="text-muted text-decoration-line-through fs-7">
                            {formatCOP(item.price)}
                          </span>
                          <span className="text-danger fw-bold fs-5">
                            {formatCOP(finalPrice)}
                          </span>
                        </div>
                      ) : (
                        <span className="text-dark fw-bold fs-5">
                          {formatCOP(item.price)}
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
        })}

        {visibleItems.length === 0 && (
          <div className="col-12 py-5 text-center text-muted">
            No se encontraron productos en esta categoría.
          </div>
        )}
      </div>
    </div>
  );
}
