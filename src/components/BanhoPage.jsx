import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './Banho.css';

export const BanhoPage = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    // Realiza una solicitud GET a tu servidor JSON para obtener los productos
    fetch('http://localhost:4000/productos')
      .then((response) => response.json())
      .then((data) => setProducts(data)
      )
      .catch((error) => {
        console.error('Error al obtener productos', error);
      });
  }, [setProducts]);

  return (
    <div>
      <Navbar />
      {/* Portada de la categoría */}
      <div className="category-cover">
        <h2>Banho</h2>
        {/* Aquí puedes agregar una imagen de fondo si lo deseas */}
      </div>

      {/* Lista de productos */}
      <div className="product-list">
        {products.filter(p => p.categoria === "banho" ).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Valor: ${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
