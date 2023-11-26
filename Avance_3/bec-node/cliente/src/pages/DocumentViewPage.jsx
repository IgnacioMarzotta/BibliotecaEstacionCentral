import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDocuments } from "../context/documentsContext";
import React from "react";
import '../assets/styles/producto.css';
import { ProductDetails } from '../components/ProductDetails';

export function DocumentViewPage() {
  const { getDocument } = useDocuments();
  const [documentData, setDocumentData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const result = await getDocument(params.id);
        console.log(result);
        setDocumentData(result);
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      }
    };
    fetchData();
  }, [getDocument, params.id]);

  return (
    <div className="container">
      {documentData ? (
        <>
          <div className="producto">
            <ProductDetails document={documentData}/>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
  
}