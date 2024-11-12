import { useEffect, useState } from 'react';
import '../assets/css/card.css';
import { fetchCharacters } from './api';
import CharacterCard from './personajes';

function App() {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const obtenerPersonajes = async () => {
            const data = await fetchCharacters();
            setPersonajes(data);
        };
        obtenerPersonajes();
    }, []);

    return (
        <>
          <div className='containe'> 
              <div className='titulo'>
                <h1 className='titulo1'><strong>The Rick and Morty</strong></h1>
              </div>
              <div className='Contenedor'>
              {personajes.map((character, index) => (
                <CharacterCard key={index} name={character.name} species={character.species} status={character.status} image={character.image} />
              ))}
              </div>
          </div>
        </>
    );
}

export default App;
