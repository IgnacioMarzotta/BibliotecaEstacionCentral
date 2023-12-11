import React from 'react';
import { ButtonLink } from "../components/ui";
import reemplazarTypeYGenre from '../assets/glosario';

function Card(params) {
  const { type, genre } = reemplazarTypeYGenre(params.type, params.genre);

  return (
    <div className="row img-card landing-card">
      <div className='col-4'>
        <ButtonLink to={`/document/${params.id}`}><img src={params.img} className="col-left" alt="" /></ButtonLink>
        
      </div>
      <div className='col-7'>
        <h1>{params.title}</h1>
        <h4>{params.author} {params.year}</h4>
        <p>{params.desc}</p>
        <span className='card-type-span'>{type}</span> <span className='card-genre-span'>{genre}</span>
        <br />
        <ButtonLink to={`/catalogo`} className="btn-outline-primary">Reservar</ButtonLink>
        <h5>Stock: {params.stock}</h5>
      </div>
    </div>
  );
}

export default Card;