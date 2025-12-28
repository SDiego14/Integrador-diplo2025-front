import React from 'react';

const Footer = () => {
    return (
        <footer className="container-fluid text-center text-md-start bg-dark text-white p-4 mt-5">
            <div className="container">
                <div className="row mt-3">
                    {/* Sección de Marca */}
                    <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            The Continental™
                        </h6>
                        <p>
                            Tu lugar de confianza, ofreciendo calidad, seguridad y una excelente gastronomía.
                        </p>
                    </div>

        {/* Sección de Redes Sociales */}
    <div className="col-md-4 text-center"> {/* Asegura que el contenido de la columna se centre */}
         <h5 className="text-uppercase fw-bold mb-3">SÍGUENOS</h5>
    
        {/* Contenedor flex centrado para los iconos */}
        <div className="d-flex justify-content-center gap-3 mb-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-facebook" style={{ fontSize: '1.8rem' }}></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-instagram" style={{ fontSize: '1.8rem' }}></i>
            </a>
        </div>

        {/* Texto de usuario centrado */}
        <p className="small mb-0">@ElHotelContinental</p>
    </div>

                    {/* Sección de Copyright */}
                    <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                        <p className="small">Av. Valentín Alsina 4375</p>
                        <p className="small">+54-3758-528794</p>
                    </div>
                </div>
                <hr className="bg-white" />
                <div className="text-center pb-2">
                    <span className="small">© 2025 Copyright: The Continental™ Hotel</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;