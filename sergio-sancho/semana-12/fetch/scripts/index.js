// elemento
// window;
// evento
// window.addEventListener('DOMContentLoaded', renderCountriesSync);

//Dos formas : 1.obtienes el array de datos ,filtras por región(valor capturado del select), lo muestras
//             2.obtienes el valor del select , creas la url para fetch con ese valor
const rootElement = document.querySelector('#root');
// Obtengo el valor de select
const selectValue = document.getElementById('filterByRegion').value;
//codigo para que cambie cuando el usuario escoge otra opción , si no siempre filtra por la primera opción de select,agregar un listener en el evento change del select.
/*selectValue.addEventListener('change', (event) => {
  const resultado = this.value;
  return resultado;
});*/
window.addEventListener('DOMContentLoaded', renderCountriesAsync);
// ejecucion

function renderCountriesSync(event) {
  const response = fetch('https://restcountries.com/v3.1/all', {
    method: 'GET',
  });

  response
    // method  then get the value of a promise when it’s fulfilled
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      console.log({ json });
    })
    .catch((error) => {
      console.error('ERRRORRRR AAAAWWWWW ', error);
    });
}

const getCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all', {
      method: 'GET',
    });
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error('ERRRORRRR AAAAWWWWW ', error);
  }
};

async function renderCountriesAsync(event) {
  const pLoading = document.createElement('p');
  pLoading.innerText = 'Loading';
  rootElement.appendChild(pLoading);

  try {
    const countries = await getCountries();
    //Del array total obtenido por el código de Pedro filtro lo que me interesa y a partir de aquí todo es igual
    const filteredCountries = countries.filter(
      (country) => country.region === selectValue,
    );

    rootElement.innerHTML = '';
    //Trabajas con el array  filtrado
    filteredCountries.forEach((country) => {
      const picture = document.createElement('picture');
      const img = document.createElement('img');

      img.setAttribute('src', country.flags.svg);
      img.setAttribute('alt', country.name.official);
      img.setAttribute('loading', 'lazy');

      picture.appendChild(img);

      rootElement.appendChild(picture);
    });
  } catch (error) {
    pLoading.innerText = 'Error';
    rootElement.appendChild(pLoading);
  }
}

// Promise.all([renderCountriesAsync, renderCountriesAsync, renderCountriesAsync]);
// Promise.race([
//   renderCountriesAsync,
//   renderCountriesAsync,
//   renderCountriesAsync,
// ]);
/*function findUser(username) {
  const users = getUsers();
  const user = users.find((user) => user.username === username);
  return user;
}*/
