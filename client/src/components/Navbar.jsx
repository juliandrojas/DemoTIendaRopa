import React from "react";
import { navOptions } from "../data/sections";

export default function Navbar({ brandName = "Mi Tienda" }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm sticky-top"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-white fs-5" href="#">
          {brandName}
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center text-lg-start py-2 py-lg-0">
            {navOptions.map((option, index) => {
              const isActive = Boolean(option.active);
              const isDisabled = Boolean(option.disabled);

              return (
                <li
                  className="nav-item px-1"
                  key={option.id || option.label || index}
                >
                  <a
                    className={`nav-link fw-medium ${isActive ? "active" : ""} ${
                      isDisabled ? "disabled" : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    aria-disabled={isDisabled ? "true" : undefined}
                    href={option.href || "#"}
                  >
                    {option.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
