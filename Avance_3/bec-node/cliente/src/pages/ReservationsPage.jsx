import { useEffect } from "react";
import { useReservations } from "../context/reservationsContext";
import { ImFileEmpty } from "react-icons/im";
import { ButtonLink } from "../components/ui";

import { ReservationTable } from "../components/reservations/ReservationTable";

import React from "react";
import '../assets/styles/catalogo.css';
import { useState } from 'react';

export function ReservationsPage() {
  const { reservations, getReservations } = useReservations();

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <div className="container">

      <div className='container-items row row-cols-1 row-cols-md-3 g-4'>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>User</th>
              <th>Item</th>
              <th>Ejemplar</th>
              <th>USER ID</th>
              <th>Returned</th>
              <th>EDIT</th>
              <th>GO</th>
            </tr>
          </thead>
          <tbody>
          {reservations.map((reservation) => (
            <ReservationTable reservation={reservation} key={reservation._id} />
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}