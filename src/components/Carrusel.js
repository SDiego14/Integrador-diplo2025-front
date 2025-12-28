import React from 'react';

const Carrusel = () => {
  return (
    /* data-bs-ride="carousel" activa el movimiento automático al cargar */
    <div id="hotelCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#hotelCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#hotelCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#hotelCarousel" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">
     {/* Primera Imagen: Hotel */}
    <div className="carousel-item active" data-bs-interval="3000">
       <img src="/assets/img/Hotel.jpg" className="d-block w-100" alt="Hotel Principal" style={{ height: '500px', objectFit: 'cover' }} />
        <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(36, 56, 27, 0.7)', borderRadius: '10px' }}>
        <h5>The Continental</h5>
        <p>Bienvenido al lujo y la exclusividad.</p>
        </div>
    </div>

  {/* Segunda Imagen: Hall */}
  <div className="carousel-item" data-bs-interval="3000">
    <img src="/assets/img/Hall.jpg" className="d-block w-100" alt="Hall" style={{ height: '500px', objectFit: 'cover' }} />
    <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(36, 56, 27, 0.7)', borderRadius: '10px' }}>
      <h5>Elegancia en cada rincón</h5>
      <p>Espacios diseñados para tu máximo confort.</p>
    </div>
  </div>

  {/* Tercera Imagen: Terraza */}
  <div className="carousel-item" data-bs-interval="3000">
    <img src="/assets/img/Hall1.jpg" className="d-block w-100" alt="Terraza" style={{ height: '500px', objectFit: 'cover' }} />
    <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(36, 56, 27, 0.7)', borderRadius: '10px' }}>
      <h5>Vistas Inolvidables</h5>
      <p>Disfruta de momentos únicos en nuestra Salón.</p>
    </div>
  </div>
  </div>
    </div>
  );
};

export default Carrusel;