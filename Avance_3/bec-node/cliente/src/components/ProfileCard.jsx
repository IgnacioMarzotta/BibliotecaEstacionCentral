import React from 'react';

function ProfileCard(params) {
  return (
    <div className="col">
        <div className="perfil-card card h-100">
            <img src={params.img} alt="img no encontrada" />
            <div className="card-body">
                <h5 className="card-title">{params.title}</h5>
                <p className="card-text"> {params.author}</p>
            </div>
            <div className="card-footer">
              <small className="text-body-dark">Reservado: {params.reservationDate}</small><br />
              <small className="text-body-dark">Retirado: {params.pickedUpOn}</small><br />
            </div>
            <div className="card-footer">
              {params.returned === true ? (
                <>
                  <small className="text-body-dark">Devuelto: SI</small>
                  <small className="text-body-dark">DEVUELTO: {params.returnedAt}</small>
                </>
              ) : (
                <>
                  <small className="text-body-dark">Devuelto: NO</small> <br />
                  <small className="text-body-dark">Devolver: {params.returnBy}</small><br />
                </>
              )}
            </div>
        </div>
    </div>
  );
}


export default ProfileCard;
