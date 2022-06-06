// ! don't forget to wait for DOM content to be loaded!
// elemento
// window;
// evento
// window.addEventListener('DOMContentLoaded', renderCountriesSync);
const rootElement = document.querySelector('#root');

window.addEventListener('DOMContentLoaded', renderCountriesAsync);
// ejecucion
function renderCountriesSync(event) {
  const response = fetch('https://restcountries.com/v3.1/all', {
    method: 'GET',
  });

  response
    .then((data) => data.json())
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
  const countries = await getCountries();

  countries.forEach((country) => {
    console.log(country);
    const picture = document.createElement('picture');
    const img = document.createElement('img');

    img.setAttribute('src', country.flags.svg);
    img.setAttribute('alt', country.name.official);
    img.setAttribute('loading', 'lazy');

    picture.appendChild(img);

    rootElement.appendChild(picture);
  });
}

// Promise.all([renderCountriesAsync, renderCountriesAsync, renderCountriesAsync]);
// Promise.race([
//   renderCountriesAsync,
//   renderCountriesAsync,
//   renderCountriesAsync,
// ]);
