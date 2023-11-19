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
                <small className="text-body-dark">Tiempo desde la ultima reserva: {params.time}</small>
            </div>
        </div>
    </div>
  );
}


export default ProfileCard;
