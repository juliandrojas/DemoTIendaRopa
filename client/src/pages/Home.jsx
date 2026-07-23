import React from "react";
import Navbar from "../components/Navbar";
import Catalog from "./Catalog";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar brandName="Catálogo de Moda" />

      <main className="flex-grow-1">
        <Hero />
        <Benefits />
        {/* Catálogo General Primero */}
        <section id="catalogo">
          <Catalog />
        </section>
      </main>

      {/* 3. Footer / Contacto */}
      <div id="contacto">
        <Footer brandName="Catálogo de Moda" />
      </div>
    </div>
  );
}
