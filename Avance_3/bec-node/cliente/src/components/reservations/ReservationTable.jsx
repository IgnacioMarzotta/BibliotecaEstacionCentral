import { Button, ButtonLink, Card } from "../ui";

export function ReservationTable({ reservation }) {

  return (
    <tr key={reservation._id}>
      <td>{reservation.user.email}</td>
      <td>{reservation.document.title}</td>
      <td>{reservation.ejemplar._id.toString()}</td>
      <td>{reservation.user._id.toString()}</td>
      <td>{reservation.returned.toString()}</td>
      {console.log(reservation.returned)}
      <td><ButtonLink to={`/reservations/${reservation._id}`}>EDIT</ButtonLink></td>
      <td><ButtonLink to={`/document/${reservation.document._id}`}>GO</ButtonLink></td>
    </tr>
  );
}
