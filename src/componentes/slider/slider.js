import React from 'react';

function Slider() {
    return (
        <div>
            <div className='container mt-5'>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://thumbs.dreamstime.com/b/libros-sobre-mesa-de-madera-y-fondo-abstracto-antecedentes-educativos-espacio-copia-volver-la-escuela-184388453.jpg" className="d-block w-100" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://thumbs.dreamstime.com/b/d-apilar-libros-de-representaci%C3%B3n-en-lectura-fondo-azul-coloridos-vol%C3%BAmenes-apilados-con-archivos-biblioteca-marcadores-254460595.jpg" className="d-block w-100" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://concepto.de/wp-content/uploads/2023/02/Tipos-de-libros.jpg" className="d-block w-100" alt="Slide 3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
