import React from 'react';
import { useDocuments } from "../context/documentsContext";
import { Button, ButtonLink } from "../components/ui/";

export function ProductDetails({ document }) {
  const { deleteDocument } = useDocuments();

  return (
        <div className="product-details row">
            <div className='col-md-4'>
                <div className="product-image">
                    <img
                        src={document.img}
                        alt={document.title}
                        style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
                    />
                </div>
            </div>
            <div className='col-md-8'>
                <h2>Título del Libro: {document.title}</h2>
                <div className="product-details-text">
                <p>Descripción: {document.author},{document.year},{document.genre},{document.type},{document.date}</p>
                <p>Stock Disponible: 50 unidades</p>
                <p>Precio: $29.99</p>
                <p>Fechas:</p>
                <ul>
                    <li>Prestado el: 15 de octubre de 2023</li>
                    <li>Devolución el: 30 de octubre de 2023</li>
                </ul>
                <div className="flex gap-x-2 items-center">
                    <Button onClick={() => deleteDocument(document._id)}>Delete</Button>
                    <ButtonLink to={`/documents/${document._id}`}>Edit</ButtonLink>
                </div>
                </div>
            </div>
        </div>
  );
}