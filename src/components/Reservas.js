import React, { useState } from 'react';

const Reservas = () => {
    const [enviado, setEnviado] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        setEnviado(true);
    };

    if (enviado) {
        return (
            <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
                <div className="text-center" style={{ border: '2px solid #4c6643', padding: '40px', borderRadius: '15px', backgroundColor: '#fff' }}>
                    <h2 style={{ color: '#4c6643' }}>¡Reserva Exitosa!</h2>
                    <p>Hemos recibido tu solicitud para <strong>The Continental™</strong>.</p>
                    <button 
                        onClick={() => setEnviado(false)} 
                        className="btn mt-3"
                        style={{ backgroundColor: '#4c6643', color: 'white' }}
                    >
                        Hacer otra reserva
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="container-fluid min-vh-100" style={{ padding: '40px' }}>
            <div className="container my-5 py-5">
                <div className="row justify-content-center align-items-center g-5">
                    {/* Lado Izquierdo: María Sharápova */}
                    <div className="col-md-5 text-center">
                        <div className="p-4 border rounded shadow-sm bg-light">
                            <h4 className="mb-4 fw-bold" style={{ color: '#4c6643' }}>ATENCIÓN PERSONALIZADA</h4>
                            <img 
                                src="/assets/img/Sharapova.jpg" 
                                alt="María Sharápova" 
                                className="rounded-circle shadow mb-3" 
                                style={{ width: '180px', height: '180px', objectFit: 'cover', border: '4px solid #4c6643' }} 
                            />
                            <h3 className="fw-bold">María Sharápova</h3>
                            <p className="text-muted text-uppercase small">Directora de Reservas</p>
                        </div>
                    </div>

                    {/* Lado Derecho: Formulario */}
                    <div className="col-md-6">
                        <div className="card border-0 shadow-lg p-4 bg-dark text-white">
                            <h2 className="mb-4" style={{ color: '#4c6643' }}>RESERVAS</h2>
                            <form onSubmit={manejarEnvio}>
                                <div className="mb-3">
                                    <label className="form-label small">Fecha de Ingreso</label>
                                    <input type="date" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small">Tipo de Suite</label>
                                    <select className="form-select">
                                        <option>Suite Ejecutiva</option>
                                        <option>Suite Presidencial</option>
                                        <option>Penthouse Continental</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn w-100 fw-bold" style={{ backgroundColor: '#4c6643', color: 'white' }}>
                                    SOLICITAR DISPONIBILIDAD
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Iconos de Servicios */}
            <div className="container pb-5">
                <div className="text-center mb-5">
                    <h4 className="text-uppercase fw-bold" style={{ color: '#4c6643', letterSpacing: '3px' }}>Servicios Exclusivos</h4>
                </div>
                <div className="row text-center g-4">
                    <div className="col"><i className="bi bi-water" style={{color: '#4c6643', fontSize: '2.5rem'}}></i><p className="fw-bold mt-2">PISCINA</p></div>
                    <div className="col"><i className="bi bi-lightning-charge" style={{color: '#4c6643', fontSize: '2.5rem'}}></i><p className="fw-bold mt-2">GIMNASIA</p></div>
                    <div className="col"><i className="bi bi-cup-straw" style={{color: '#4c6643', fontSize: '2.5rem'}}></i><p className="fw-bold mt-2">BAR</p></div>
                    <div className="col"><i className="bi bi-cup-hot" style={{color: '#4c6643', fontSize: '2.5rem'}}></i><p className="fw-bold mt-2">RESTAURANTE</p></div>
                    <div className="col"><i className="bi bi-p-circle" style={{color: '#4c6643', fontSize: '2.5rem'}}></i><p className="fw-bold mt-2">APARCAMIENTO</p></div>
                </div>
            </div>
        </section>
    );
};

export default Reservas;