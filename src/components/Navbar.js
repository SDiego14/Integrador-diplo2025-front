import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
      <div className="container">
        {/* Marca del Hotel con Icono de Castillo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
        {/* Icono del castillo (Bootstrap Icons) */}
        <i className="bi bi-fort-fill me-2" style={{ fontSize: '1.5rem', color: '#4c6643' }}></i>
    
         {/* Texto de la marca */}
         THE CONTINENTAL™
        </Link>
        
        {/* Botón para móviles */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/QuienesSomos">QUIENES SOMOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Reservas">RESERVAS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contacto">CONTACTO</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;