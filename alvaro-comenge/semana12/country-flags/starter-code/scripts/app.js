// import * as render from './render.js';
// console.log('render', render);
// const { displayCountries } = render;

import { displayCountries, displayCountriesTwo } from './render.js';

// Cuando la pagina cargue, ir al API de Rest Countries y bajar
// el dataset the countries para pintar en pantalla

// Elemento
// window;
// Evento
window.addEventListener('DOMContentLoaded', getCountries);
// Ejecucion

async function getCountries() {
  // const response = await fetch('https://restcountries.com/v3.1/all', {
  //   method: 'GET',
  // });

  // TODO: hacerlo de manera sincronica
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    // TODO: explicarlo como un return
    displayCountriesTwo(countries);
  } catch (error) {
    console.log(error);
  }
}
