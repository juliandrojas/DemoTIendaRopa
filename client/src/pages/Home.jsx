import React from "react";
import Navbar from "../components/Navbar";
import Catalog from "./Catalog";
import Promotions from "./Promotions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar brandName="Catálogo de Moda" />

      <main className="flex-grow-1">
        {/* 1. Catálogo General Primero */}
        <section id="catalogo">
          <Catalog />
        </section>

        {/* 2. Promociones / Descuentos Después */}
        <section id="promos">
          <Promotions />
        </section>
      </main>

      {/* 3. Footer / Contacto */}
      <div id="contacto">
        <Footer brandName="Catálogo de Moda" />
      </div>
    </div>
  );
}
