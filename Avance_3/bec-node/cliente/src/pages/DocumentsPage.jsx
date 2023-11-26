import { useEffect } from "react";
import { useDocuments } from "../context/documentsContext";
import { ImFileEmpty } from "react-icons/im";
import { DocumentCard } from "../components/documents/DocumentCard";
import { ButtonLink } from "../components/ui";

import React from "react";
import '../assets/styles/catalogo.css';
import { useState } from 'react';
import { Header } from '../components/Header';

export function DocumentsPage() {
  const { documents, getDocuments } = useDocuments();

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  useEffect(() => {
    getDocuments();
  }, []);

	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}
		
		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

  return (
    <div className="container">
      <Header
					allProducts={allProducts}
					setAllProducts={setAllProducts}
					total={total}
					setTotal={setTotal}
					countProducts={countProducts}
					setCountProducts={setCountProducts}
			/>

      {documents.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No documents yet, please add a new task
            </h1>
          </div>
        </div>
      )}

      <div className='container-items row row-cols-1 row-cols-md-3 g-4'>
        {documents.map(product => (
          <div className='item' key={product._id}>
            <figure>
              <ButtonLink to={`/document/${product._id}`}><img src={product.img} alt={product.nameProduct} /></ButtonLink>
              
            </figure>
            <div className='info-product'>
              <h2>{product.title}</h2>
              <h5>{product.author},{product.year},{product.genre},{product.type}</h5>
              <p className='price'>${product.price}</p>
              <button onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}