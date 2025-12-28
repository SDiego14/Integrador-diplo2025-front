import React from 'react';

const QuienesSomos = () => {
    return (
        <section id="quienesSomos" className="container-fluid d-flex flex-column min-vh-100 py-5">
            <div className="container text-center mb-5">
    <h2 className="contactoTitulos mb-4">ADMINISTRADORES</h2>
    
    <div className="row justify-content-center">
        {/* Administrador 1: Winston Scott */}
        <div className="col-md-4 col-sm-6 mb-4">
            <img 
                src="/assets/img/Winston Scott.jpg" 
                alt="Winston Scott" 
                className="rounded-circle shadow mt-3" 
                style={{ width: '150px', height: '150px', objectFit: 'cover', border: '3px solid #4c6643' }} 
            />
            <h3 className="mt-2" style={{ fontStyle: 'italic' }}>Winston Scott</h3>
            <p className="small text-muted">Gerente General</p>
        </div>

        {/* Administrador 2: Nueva Imagen */}
        <div className="col-md-4 col-sm-6 mb-4">
            <img 
                src="/assets/img/Charon.jpg" /* Cambia esto por el nombre de tu otra imagen, ej: Charon.jpg */
                alt="Segundo Administrador" 
                className="rounded-circle shadow mt-3" 
                style={{ width: '150px', height: '150px', objectFit: 'cover', border: '3px solid #4c6643' }} 
            />
            <h3 className="mt-2" style={{ fontStyle: 'italic' }}>Charon</h3>
            <p className="small text-muted">Conserje</p>
        </div>
    </div>
</div>

            <div className="flex-grow-1">
                {/* Sobre Nosotros */}
                <div className="col-md-8 col-sm-12 mx-auto mb-5">
                    <div className="quienesSomosTitulos row">
                        <h2 className="fw-bold"> SOBRE NOSOTROS </h2>
                    </div>
                    <p className="text-justify mt-3">
                        En <strong>THE CONTINENTAL™</strong> estamos comprometidos con la excelencia.
                        Desde nuestros inicios, hemos sido apasionados por ayudar a nuestros clientes
                        a alcanzar sus metas ofreciendo servicios de la más alta calidad y asesoramiento experto.
                    </p>
                </div>

                {/* Nuestra Misión */}
                <div id="quienesSomosImagen2" className="col-md-8 col-sm-12 mx-auto mb-5">
                    <div className="quienesSomosTitulos row">
                        <h2 className="fw-bold"> NUESTRA MISIÓN </h2>
                    </div>
                    <p className="text-justify mt-3">
                        Nuestra misión es proporcionar a los huéspedes y entusiastas los recursos necesarios para maximizar su estadía. Nos esforzamos por ser un socio confiable en su viaje hacia un estilo de vida más saludable y activo, ofreciendo productos innovadores y servicios que inspiren y motiven.
                    </p>
                </div>

                {/* Nuestra Visión */}
                <div className="col-md-8 col-sm-12 mx-auto mb-5">
                    <div className="quienesSomosTitulos row">
                        <h2 className="fw-bold"> NUESTRA VISIÓN </h2>
                    </div>
                    <p className="text-justify mt-3">
                        Como líderes en el mercado deseamos brindar grandes experiencias; nuestra visión es ser reconocidos como un referente en calidad y servicio. Buscamos contribuir significativamente a la comunidad e impulsar estándares más altos de bienestar y entretenimiento.
                    </p>
                </div>

                {/* Qué Ofrecemos */}
                <div className="col-md-8 col-sm-12 mx-auto mb-5">
                    <div className="quienesSomosTitulos row">
                        <h2 className="fw-bold"> QUÉ OFRECEMOS </h2>
                    </div>
                    <p className="text-justify mt-3">
                        En <strong>The Continental™</strong> ofrecemos una amplia gama de servicios de primera calidad, diseñados para que su estadía sea una experiencia única. Además, contamos con una selección cuidadosa de alojamiento y un equipo de profesionales que te ayudarán a disfrutar de todo el confort.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default QuienesSomos;