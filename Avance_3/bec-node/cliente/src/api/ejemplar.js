import axios from "./axios";

export const getEjemplaresRequest = async () => axios.get("/ejemplares");

export const createEjemplarRequest = async (document) => axios.post("/ejemplares", document);

export const updateEjemplarRequest = async (id, ejemplar) => axios.put(`/ejemplares/${id}`, ejemplar); 

export const deleteEjemplarRequest = async (id) => axios.delete(`/ejemplares/${id}`);

export const getEjemplarRequest = async (id) => axios.get(`/ejemplares/${id}`);