let countries = [];
let region = 'All';
let search = '';

// Elemento
const selectInput = document.querySelector('select');
const searchInput = document.querySelector('input[type="search"]');

// Evento
window.addEventListener('DOMContentLoaded', getCountries);
selectInput.addEventListener('change', handleChange);
searchInput.addEventListener('keyup', handleSearch);

// Ejecucion
async function getCountries() {
  // TODO: hacerlo de manera sincronica
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    countries = await response.json();
    // TODO: explicarlo como un return
    displayCountriesTwo();
  } catch (error) {
    console.log(error);
  }
}

const countriesElement = document.querySelector('#js-countries');

function displayCountriesTwo() {
  const countriesHTMLArray = functionFilterCountries().map((country) => {
    const {
      name: { common },
      flags: { svg },
    } = country;
    return `
    <section>
        <h2>${common}</h2>
        <picture>
          <img
            src="${svg}"
            alt="${common}"
          />
        </picture>
      </section>   
    `;
  });

  countriesElement.innerHTML = countriesHTMLArray.join('');
}

function functionFilterCountries() {
  const searchString = new RegExp(search, 'i');

  return countries.filter((country) => {
    return (
      searchString.test(country.name.common) &&
      (country.region === region || region === 'All')
    );
  });
}

function handleSearch(event) {
  search = event.target.value;
  displayCountriesTwo();
}

function handleChange(event) {
  region = event.target.value;
  displayCountriesTwo();
}
