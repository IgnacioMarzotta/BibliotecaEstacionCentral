import React from "react";
import '../assets/styles/catalogo.css';
import { useState } from 'react';
import { Header } from '../components/Header';
import { ProductList } from '../components/ProductList';

export const Catalogo = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    return (
		<>
			<div className="container light-bg">
				<Header
					allProducts={allProducts}
					setAllProducts={setAllProducts}
					total={total}
					setTotal={setTotal}
					countProducts={countProducts}
					setCountProducts={setCountProducts}
				/>
				<ProductList
					allProducts={allProducts}
					setAllProducts={setAllProducts}
					total={total}
					setTotal={setTotal}
					countProducts={countProducts}
					setCountProducts={setCountProducts}
				/>
			</div>
		</>
    );
};