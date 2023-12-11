import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import {
  createReservationRequest,
  deleteReservationRequest,
  getReservationsRequest,
  getReservationRequest,
  getUserReservationsRequest,
  updateReservationRequest,
} from "../api/reservations";

import { useEjemplares } from "./ejemplaresContext"

const ReservationContext = createContext();

export const useReservations = () => {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("useReservations aaa must be used within a ReservationProvider");
  return context;
};

export function ReservationProvider({ children }) {
  
  const { ejemplares, getEjemplares } = useEjemplares();
  const [reservations, setReservations] = useState([]);

  const getReservations = async () => {
    const res = await getReservationsRequest();
    setReservations(res.data);
  };

  const getUserReservations = async (id) => {
    try {
      const res = await getUserReservationsRequest(id);
      console.log("Reservas filtradas:", res);
      setReservations(res);
    } catch (error) {
      console.error('Error al obtener reservas:', error);
    }
  };

  const deleteReservation = async (id) => {
    try {
      const res = await deleteReservationRequest(id);
      if (res.status === 204) setReservations(reservations.filter((reservation) => reservation._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createReservation = async (reservation) => {
    try {
      const res = await createReservationRequest(reservation);
      
    } catch (error) {
      console.log(error);
    }
  };

  const getReservation = async (id) => {
    try {
      const res = await getReservationRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateReservation = async (id, data) => {
    try {
      await updateReservationRequest(id, data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ReservationContext.Provider
      value={{
        reservations,
        getReservations,
        getUserReservations,
        deleteReservation,
        createReservation,
        getReservation,
        updateReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
