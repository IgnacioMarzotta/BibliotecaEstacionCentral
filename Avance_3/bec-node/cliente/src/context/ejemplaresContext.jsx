import { createContext, useContext, useState } from "react";
import {
  createEjemplarRequest,
  deleteEjemplarRequest,
  getEjemplaresRequest,
  getEjemplarRequest,
  updateEjemplarRequest,
} from "../api/ejemplar";

const EjemplaresContext = createContext();

export const useEjemplares = () => {
  const context = useContext(EjemplaresContext);
  if (!context) throw new Error("useEjemplares must be used within a EjemplarProvider");
  return context;
};

export function EjemplarProvider({ children }) {
  const [ejemplares, setEjemplares] = useState([]);

  const getEjemplares = async () => {
    const res = await getEjemplaresRequest();
    setEjemplares(res.data);
  };

  const deleteEjemplar = async (id) => {
    try {
      const res = await deleteEjemplarRequest(id);
      if (res.status === 204) setEjemplares(ejemplares.filter((ejemplar) => ejemplar._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createEjemplar = async (ejemplar) => {
    try {
      const res = await createEjemplarRequest(ejemplar);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEjemplar = async (id) => {
    try {
      const res = await getEjemplarRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateEjemplar = async (id, data) => {
    try {
      await updateEjemplarRequest(id, data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EjemplaresContext.Provider
      value={{
        ejemplares,
        getEjemplares,
        deleteEjemplar,
        createEjemplar,
        getEjemplar,
        updateEjemplar,
      }}
    >
      {children}
    </EjemplaresContext.Provider>
  );
}
