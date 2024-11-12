import React from 'react';
import '../assets/css/card.css';
import '../../bootstrap-5.3.3-dist/css/bootstrap.css'

function CharacterCard({ name, species, status, image }) {
    return (
    
        <div className='bg-dark text-light tarjeta'>
            <div className='imagen'>
                <img src={image} alt={`${name}`} className='img-fluid' />
            </div>
            <div className='contenido'>
                <p><strong>Nombre: </strong> {name}</p>
                <p><strong>Especie: </strong>  {species}</p>
                <p><strong>Estado: </strong> {status}</p>
            </div>
        </div>
        
    );
}

export default CharacterCard;