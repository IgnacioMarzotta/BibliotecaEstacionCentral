import { useEffect } from "react";

import { useDocuments } from "../context/documentsContext";
import { useEjemplares } from "../context/ejemplaresContext";
import { ImFileEmpty } from "react-icons/im";
import React from "react";
import '../assets/styles/catalogo.css';

export function DocumentsAdminPage() {
    const { documents, deleteDocument, getDocuments } = useDocuments();
    const { ejemplares, getEjemplares, createEjemplar, deleteEjemplar, updateEjemplar } = useEjemplares();

    useEffect(() => {
      getDocuments();
      getEjemplares();
    }, []);

    //Funcion para reservar cada uno de los articulos del carrito
    const addEjemplar = async (product) => {
        try
        {
          createEjemplar({document: product._id});
        }
        catch (error) 
        {
          console.error('Error al generar:', error);
        }
    }

    const removeEjemplar = async (ejemplar) => {
        try
        {
          deleteEjemplar(ejemplar);
        }
        catch (error) 
        {
          console.error('Error al generar:', error);
        }
    }

  return (
    <div className="container text-white">
      
      {documents.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No documents yet, please add a new document
            </h1>
          </div>
        </div>
      )}

      <table className="table">
          <thead>
              <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">AGREGAR EJ</th>
              </tr>
          </thead>
          <tbody>
          {documents.map(product => (
            <>
              <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.author}</td>
                  <td>{ejemplares.filter((item) => item.document === product._id).length}</td>
                  <td><button className='btn-clear-all' onClick={() => addEjemplar(product)}>AGREGAR</button></td>
              </tr>
              {ejemplares.filter((item) => item.document === product._id).map(ejemplar => (
              <tr className="table-dark" key={ejemplar._id}>
                  <td>{ejemplar._id}</td>
                  <td>{ejemplar.document.title}</td>
                  {ejemplar.available ? (
                    <td><button onClick={() => updateEjemplar(ejemplar._id, {available: false})}>{ejemplar.available.toString()}</button></td>
                  ) : (
                    <td><button onClick={() => updateEjemplar(ejemplar._id, { available: true })}>{ejemplar.available.toString()}</button></td>
                    
                  )}
                  <td><button onClick={() => removeEjemplar(ejemplar._id)}>ELIMINAR</button></td>
              </tr>
              ))}
            </>
          ))}
          </tbody>
      </table>
      
    </div>
  );
}