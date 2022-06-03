//  Element
let rootElement;
let formRegion;
let form;

//  Execution
const main = (event) => {
  //Element
  rootElement = document.querySelector('#root');
  renderCountriesAsync();
};

const getCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all', {
      method: 'GET',
    });

    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const filterCountries = (countries) => {
  formRegion = document.querySelector('#region');
  console.log(formRegion);
  console.log(formRegion.value);
  if (formRegion.value != `All`) {
    return countries.filter((country) => country.region == formRegion.value);
  } else {
    return countries.filter((country) => country.region == 'Africa');
  }
};

const renderCountriesAsync = async (event) => {
  // Loading label
  const pLoading = document.createElement('p');
  pLoading.innerText = 'Loading...';
  rootElement.appendChild(pLoading);

  try {
    let countriesComplete = await getCountries();
    countries = await filterCountries(countriesComplete);
    // Deleting loading label.
    rootElement.removeChild(pLoading);

    // Displaying countries.
    countries.forEach((country) => {
      // Creating cards.
      const card = document.createElement('div');
      card.classList.add(`card`);
      // Texts above flag.
      const nameCommon = document.createElement('p');
      const nameNativeCommon = document.createElement('p');
      nameCommon.innerText = country.name.common;
      const firstKey = Object.keys(country.name.nativeName)[0];
      nameNativeCommon.innerText = country.name.nativeName[firstKey].common;
      card.appendChild(nameCommon);
      card.appendChild(nameNativeCommon);
      // Flags
      const picture = document.createElement('picture');
      const img = document.createElement('img');
      img.setAttribute('src', country.flags.svg);
      img.setAttribute('alt', country.name.official);
      picture.appendChild(img);
      card.appendChild(picture);
      rootElement.appendChild(card);
    });
  } catch (error) {
    pLoading.innerText = `⚠️ Loading Error: ${error}`;
    rootElement.appendChild(pLoading);
  }
};

//  Events
// ! don't forget to wait for DOM content to be loaded!
window.addEventListener('DOMContentLoaded', main);
//document.getElementById('region').onchange = renderCountriesAsync();
/*
Notas para el dropdown. Hay dos formas:
1: cada pais tiene una propiedad de region y podemos usarla como
filtro para enseñarla.
2: La página ofrece también rutas independientes para cada region
que pueden ser utilizadas con el dropdown.
*/
