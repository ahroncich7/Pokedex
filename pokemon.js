/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable import/extensions */

const urlUnknown = `./images/pikachu.png`;
const urlTypes = 'https://pokeapi.co/api/v2/type/';

export function resetearPokemon() {
  document.querySelector('.scrolling').scrollTop = 0;
  document.querySelector('#sprite').src = urlUnknown;
  document.querySelector('#name').textContent = '--';
  document.querySelector('#weight').textContent = '--';
  document.querySelector('#height').textContent = '--';
  document.querySelector('#abilities').textContent = '--';
  document.querySelector('#type1').textContent = '--';
  document.querySelector('#type1').className = '';
  document.querySelector('#type2').textContent = '';
  document.querySelector('#type2').className = '';
}

export function mostrarTabla() {
  document.querySelector('#tabla-2').classList.remove('oculto');
}

export function hacerClickeableTipo() {
  document.querySelectorAll('.tipos').forEach((tipo) => {
    tipo.onclick = ((e) => {
      llamarTipos(urlTypes + e.target.textContent.toLowerCase());
      document.querySelector('#ir-home').click();
    });
  });
}

export function mostrarPokemon(e) {
  mostrarTabla();
  const namePokemon = e.querySelectorAll('td')[0].textContent;
  fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      const name = document.querySelector('#name');
      name.textContent = responseJSON.name.toUpperCase();

      const weight = document.querySelector('#weight');
      weight.textContent = `${responseJSON.weight} pounds`;

      const height = document.querySelector('#height');
      height.textContent = `${responseJSON.height} inchs`;

      const sprite = document.querySelector('#sprite');
      sprite.src = responseJSON.sprites.front_default;
      const abilities = document.querySelector('#abilities');

      abilities.textContent = '';
      responseJSON.abilities.forEach((ab) => {
        abilities.textContent += `${ab.ability.name}, `;
      });

      const type1 = document.querySelector('#type1');
      type1.textContent = (responseJSON.types[0] ? responseJSON.types[0].type.name : '');
      type1.className = (responseJSON.types[0] ? `${responseJSON.types[0].type.name} tipos` : '');

      const type2 = document.querySelector('#type2');
      type2.textContent = (responseJSON.types[1] ? responseJSON.types[1].type.name : '');
      type2.className = (responseJSON.types[1] ? `${responseJSON.types[1].type.name} tipos` : '');

      hacerClickeableTipo();
    })

    .catch((error) => console.error('Fallo', error));
}

export function hacerClickeablePokemon() {
  document.querySelectorAll('#tabla-1 .poke').forEach((item) => (
    // eslint-disable-next-line no-param-reassign
    item.onclick = ((e) => (mostrarPokemon(e.target.parentNode)))));
}

function llamarTipos(url) {
  fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      let tbody = '';
      pokemon.pokemon.forEach((element) => {
        tbody += `<tr class=poke><td>${element.pokemon.name}</td></tr>`;
      });

      document.getElementById('tabla-1').innerHTML = '';
      document.getElementById('tabla-1').innerHTML = tbody;
      hacerClickeablePokemon('#tabla-1 .poke');
      resetearPokemon();
    })

    .catch((error) => console.error('Fallo', error));
}
