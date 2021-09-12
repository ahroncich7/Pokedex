/* eslint-disable import/extensions */

import
{
  crearTablaPokemons,
  crearTablaTipos,
}
  from './tabla.js';

const urlPokemons = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0';

crearTablaPokemons(urlPokemons);
crearTablaTipos();
