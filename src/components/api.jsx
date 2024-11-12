export async function fetchCharacters() {
  const url = 'https://rickandmortyapi.com/api/character';

  try {
      const response = await fetch(url);
      const data = await response.json();

      const charactersData = data.results.map((character) => ({
          name: character.name,
          species: character.species, 
          status:character.status,
          image: character.image,
      }));

      console.log('Datos de personajes:', charactersData);

      return charactersData;

  } catch (error) {
      console.error('Error al obtener personajes:', error);
      return [];
  }
}
