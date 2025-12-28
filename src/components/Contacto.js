import React, { useState } from 'react';

const Contacto = () => {
    const [enviado, setEnviado] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        setEnviado(true);
    };

    if (enviado) {
        return (
            <div className="container text-center py-5">
                <div className="div1 p-5 shadow-lg rounded bg-white border-gold">
                    <h2 className="text-success">¡Consulta Recibida!</h2>
                    <p className="p1">Gracias por contactar a **The Continental™**. Nuestro equipo le responderá a la brevedad.</p>
                    <button onClick={() => setEnviado(false)} className="btn btn-dark mt-3">Volver a preguntar</button>
                </div>
            </div>
        );
    }

    return (
        <section id="contacto" className="container-fluid d-flex flex-column min-vh-100 py-4">
            <div className="flex-grow-1">
                <div className="contactoTitulos text-center mb-4">
                    <h2>THE CONTINENTAL™</h2>
                </div>

                {/* Información de Ubicación */}
                <div className="text-center mb-4">
                    {/*<p>
                        <img src="/assets/icons/geo-alt-fill.svg" alt="Direccion" style={{width: '20px', border:'none'}} /> 
                        Av. Valentín Alsina 4375
                    </p>*/}
                    <div id="mapa" className="mt-3">
                        <a href="https://www.google.com.ar/maps/search/la+catedral+del+tenis/" target="_blank" rel="noreferrer">
                            <img src="/assets/img/mapa1.jpg" alt="Mapa" className="img-fluid rounded shadow" style={{maxWidth: '600px'}} />
                        </a>
                    </div>
                </div>

                {/* Horarios y Contacto Directo */}
                <div className="row text-center mb-5">
                    <div className="col-md-8 mx-auto p-3 bg-white shadow-sm rounded border">
                        <p><strong>Para consultar reservas Lunes a Viernes:</strong> 8 a 13 y 17 a 22 hs.</p>
                        <p><strong>Para consultar reservas Sábados y Domingos:</strong> 8 a 13 hs.</p>
                        <hr />
                        <p><img src="/assets/icons/telephone.svg" alt="Phone" style={{width: '18px', border:'none'}} /> +54-3758-528794</p>
                        <p><img src="/assets/icons/envelope-at.svg" alt="Mail" style={{width: '18px', border:'none'}} /> the-Continental@gmail.com</p>
                    </div>
                </div>
                  
                {/* Formulario de Consulta */}
                <div className="contactoTitulos text-center mb-4">
                    <h2>ENVIANOS TU CONSULTA</h2>
                </div>

                <div className="container form-container col-lg-6 mb-5">
                    <form onSubmit={manejarEnvio} className="bg-white p-4 shadow rounded border">
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" required placeholder="Tu nombre" />
                            </div>
                            <div className="col">
                                <label className="form-label">Apellido</label>
                                <input type="text" className="form-control" required placeholder="Tu apellido" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input type="email" className="form-control" required placeholder="nombre@ejemplo.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" placeholder="Ej: +54 9..." />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <textarea className="form-control" rows="4" required placeholder="Escribe tu mensaje aquí..." maxLength="1000"></textarea>
                        </div>
                        <div className="d-flex gap-2 justify-content-center">
                            <button type="submit" className="btn btn-success px-4">Enviar</button>
                            <button type="reset" className="btn btn-secondary px-4">Limpiar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacto;