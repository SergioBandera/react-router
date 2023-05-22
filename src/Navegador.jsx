import React from "react";
import { Link } from "react-router-dom";
import "./navegador.css";

const Navegador = () => {
  return (
    <div className="header">
      <nav className="nav-header">
        <Link to={"/inicio"}>Inicio</Link>
        <Link to={"/app"}>App</Link>
        <Link to={"dashboard"}>Dashboard</Link>
      </nav>
    </div>
  );
};

export default Navegador;
