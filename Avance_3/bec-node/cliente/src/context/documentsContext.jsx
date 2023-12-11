import { createContext, useContext, useState } from "react";
import {
  createDocumentRequest,
  deleteDocumentRequest,
  getDocumentsRequest,
  getDocumentRequest,
  updateDocumentRequest,
} from "../api/documents";

const DocumentContext = createContext();

export const useDocuments = () => {
  const context = useContext(DocumentContext);
  if (!context) throw new Error("useDocuments must be used within a DocumentProvider");
  return context;
};

export function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState([]);

  const getDocuments = async () => {
    const res = await getDocumentsRequest();
    setDocuments(res.data);
  };

  const deleteDocument = async (id) => {
    try {
      const res = await deleteDocumentRequest(id);
      if (res.status === 204) setDocuments(documents.filter((document) => document._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createDocument = async (document) => {
    try {
      const res = await createDocumentRequest(document);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDocument = async (id) => {
    try {
      const res = await getDocumentRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateDocument = async (id, data) => {
    try {
      await updateDocumentRequest(id, data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        getDocuments,
        deleteDocument,
        createDocument,
        getDocument,
        updateDocument,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}
