import React from 'react';

function Card(params) {
  return (
    <div className="landing-card img-card">
      <img src={params.img} className="col-left" alt="" />
      <div className="col-right">
        <h3>{params.title}</h3>
        <p>{params.desc}</p>
        <h5>Stock: {params.stock}</h5>
      </div>
    </div>
  );
}

export default Card;