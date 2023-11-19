import React from 'react';
import product_img from "../img/el-gran-libro-javascript.jpg";

const ProductDetails = () => {
  return (
    <div className="product-details row">
        <div className='col-md-4'>
            <div className="product-image">
                <img
                    src={product_img}
                    alt="El Gran Libro de JavaScript"
                    style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
                />
            </div>
        </div>
        <div className='col-md-8'>
            <h2>Título del Libro: El Gran Libro de JavaScript</h2>
            <div className="product-details-text">
            <p>Descripción: Este libro es una guía completa para aprender JavaScript desde cero hasta un nivel avanzado. Cubre todos los aspectos importantes del lenguaje de programación.</p>
            <p>Stock Disponible: 50 unidades</p>
            <p>Precio: $29.99</p>
            <p>Fechas:</p>
            <ul>
                <li>Prestado el: 15 de octubre de 2023</li>
                <li>Devolución el: 30 de octubre de 2023</li>
            </ul>
            </div>
        </div>
    </div>
  );
};

export default ProductDetails;