import React from 'react';
import { useDocuments } from "../context/documentsContext";
import { Button, ButtonLink } from "../components/ui/";
import { useAuth } from "../context/authContext";

export function ProductDetails({ document }) {
    const { deleteDocument } = useDocuments();
    const { user, isAuthenticated } = useAuth();

    console.dir(user);

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
                <h1><b>{document.title}</b></h1>
                <div className="product-details-text">
                    <h2>{document.author},({document.year})</h2>
                    <h5>Genero: {document.genre}, Tipo:{document.type}</h5>
                    <p>{document.desc}</p>
                    <br />
                    <p>Stock Disponible: {document.stock} unidades</p>

                    {isAuthenticated && user.admin === 2 ? (
                        <>
                            <div className="flex gap-x-2 items-center">
                                <ButtonLink to={`/document/edit/${document._id}`}>Edit</ButtonLink>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}

                </div>
            </div>
        </div>
  );
}


