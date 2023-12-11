import { React, useEffect} from "react";

import { useAuth } from "../context/authContext";
import { useDocuments } from "../context/documentsContext";
import { useReservations } from "../context/reservationsContext";

import QRCode from "react-qr-code";

import '../assets/styles/perfil.css';
import ProfileCard from '../components/ProfileCard';

const light_bg = {backgroundColor: '#2D2924', paddingBottom: '20px'};

export function Perfil() {
    const { user } = useAuth();
    const { documents, getDocuments } = useDocuments();
    const { reservations, getUserReservations } = useReservations();

    useEffect(() => {
      getDocuments();
      getUserReservations(user.id);
    }, []);

    return (
        <div className="container">
            <div style={light_bg}>
                <center>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
                    
                    <div className="main--grid container">
                        <h2 className="perfil-title">Identificacion: {user.id}</h2>
                        <QRCode value={user.id} />
                        <br />
                        <h3 className="perfil-title">Nombre de usuario: {user.firstnames} {user.lastnames}</h3><p className="perfil-email">Correo electronico: {user.email}</p>
                        <br />
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {reservations.map(reserve => (
                                <div key={reserve._id}>
                                    <ProfileCard 
                                        img={reserve.document.img}
                                        title={reserve.document.title}
                                        author={reserve.document.author}
                                        returned={reserve.returned}
                                        reservationDate={reserve.reservationDate}
                                        pickedUpOn={reserve.pickedUpOn}
                                        returnBy={reserve.returnBy}
                                        returnedAt={reserve.returnedAt}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
  }