/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
import
{ hacerClickeablePokemon, resetearPokemon, hacerClickeableTipo } from './pokemon.js';

export function crearTablaPokemons(url) {
  fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      let tbody = '';
      pokemon.results.forEach((element) => {
        tbody += `<tr class=poke><td>${element.name}</td></tr>`;
      });
      document.getElementById('tabla-1').innerHTML = '';
      document.getElementById('tabla-1').innerHTML = tbody;
      hacerClickeablePokemon();
      resetearPokemon();
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error('Fallo', error));
}

export function crearTablaTipos() {
  let tbody = ` <thead class="bg-info">
              <br>
              <tr>
                  <th>TYPE</th>
                  <th>Strong Against</th>
                  <th>Weak Against</th>
                  <th>No Damage to</th>
              </tr>
          </thead>`;
  // eslint-disable-next-line no-undef
  Types.forEach((type) => {
    const nombre = type.name;
    const pros = type.strengths;
    const contras = type.weaknesses;
    const inmune = type.immunes;
    tbody += `<tr>
                      <th>
                          <p class=\"tipos ${nombre.toLowerCase()}\">${nombre}</p>
                      </th>
                      <td>
                      ${pros[0] ? `<p class=\"tipos ${pros[0].toLowerCase()}\">${pros[0]}</p>` : '-'}
                      ${pros[1] ? `<p class=\"tipos ${pros[1].toLowerCase()}\">${pros[1]}</p>` : ''}
                      </td>
                      <td>
                      ${contras[0] ? `<p class=\"tipos ${contras[0].toLowerCase()}\">${contras[0]}</p>` : ''}
                      ${contras[1] ? `<p class=\"tipos ${contras[1].toLowerCase()}\">${contras[1]}</p>` : ''}
                      </td>
                      <td>
                          ${inmune[0] ? `<p class=\"tipos ${inmune[0].toLowerCase()}\">${inmune[0]}</p>` : '-'}
                      </td>
                  </tr>`;
  });

  document.getElementById('tabla-3').innerHTML = tbody;
  hacerClickeableTipo();
}
