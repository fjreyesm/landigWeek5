// Copia previa sin usar almacenada como simple referencia rápida.
//Element
let rootElement;

//Execution
const main = (event) => {
  //Element
  rootElement = document.querySelector('#root');
  console.log(root);
  renderCountriesAsync();
};

const renderCountriesSync = (event) => {
  /*
  Una de las sintaxis de como resolver una promesa.
  Se la conoce como método sincrónico al no tener que informar a la
  máquina JS que debe esperar.
  */

  const response = fetch('https://restcountries.com/v3.1/all', {
    method: 'GET',
  });

  response
    // Promesa. Devuelve data.json().
    .then((data) => data.json())
    // Promesa concatenada. Despues de la anterior, devuelve json.
    .then((json) => {
      // Deserializamos el binario a JSON.
      console.log(json);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
};

const renderCountriesAsync = async (event) => {
  // Loading label
  const pLoading = document.createElement('p');
  pLoading.innerText = 'Loading...';
  rootElement.appendChild(pLoading);

  try {
    const countries = await getCountries();
    // Deleting loading label.
    rootElement.innerHTML = '';
    // Displaying countries.
    countries.forEach((country) => {
      /*
      const pictureElement = `
      <picture>
        <img src="${country.flags.svg}" alt="${country.name.official}" />
      </picture>
      `;
      //rootElement.innerHTML = rootElement.innerHTML + pictureElement;
      rootElement.innerHTML += pictureElement;
      */
      const picture = document.createElement('picture');
      const img = document.createElement('img');
      img.setAttribute('src', country.flags.svg);
      img.setAttribute('alt', country.name.official);
      picture.appendChild(img);
      rootElement.appendChild(picture);
    });
  } catch (error) {
    pLoading.innerText = `⚠️ Loading Error: ${error}`;
    rootElement.appendChild(pLoading);
  }
};

const getCountries = async () => {
  /*
  Función asincrónica que debe ser declarada como tal.
  */
  try {
    const response = await fetch('https://restcountries.com/v3.1/all', {
      method: 'GET',
    });

    // En lugar de concatenar promesas, usamos await para pedir que
    // espere a antes de ejecutar la siguiente orden.
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

// Events
// ! don't forget to wait for DOM content to be loaded!
//window.addEventListener('DOMContentLoaded', renderCountriesSync);
window.addEventListener('DOMContentLoaded', main);

/*
Notas para el dropdown. Hay dos formas:
1: cada pais tiene una propiedad de region y podemos usarla como
filtro para enseñarla.
2: La página ofrece también rutas independientes para cada region
que pueden ser utilizadas con el dropdown.
*/
