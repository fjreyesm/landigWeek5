//  Global Element
let rootElement;
let pBoard;

//  Execution

const createSignBoard = (text, level) => {
  // Loading label
  pBoard.innerText = text;
  pBoard.classList.add(`sign-board`);
  // Evaluating warning level
  switch (level) {
    case 'warning':
      pBoard.classList.add(`sign-warning`);
      break;
    case 'error':
      pBoard.classList.add(`sign-error`);
      break;
  }
  // Rendering sign
  rootElement.appendChild(pBoard);
};

const deleteSignBoard = () => {
  // Removing sign
  rootElement.removeChild(pBoard);
};

const getCountries = async (url) => {
  // Tries to fetch the countries from URL
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    const countries = await response.json();
    return countries;
  } catch (error) {
    createSignBoard(`Fetch Error:\n\n ${error}`, 'error');
  }
};

const nativeNameEvaluate = function (textInput, country) {
  /*
  Esta función ha sido creada específicamente para poder realizar la búsqueda del
  input no solo por el nombre común del país, sino también por el nombre nativo
  en el primer idioma hablado del país, de haberlo. De esta forma, podemos buscar
  "españa" por "spain" o por la propia "esp" porque ambos resultan criterios
  válidos.
  */

  let nativeName;
  let firstKey;

  if (country.name.nativeName == undefined) {
    // If the country doens't have navite Common name
    // it returns the common name.
    nativeName = country.name.common.toLowerCase();
  } else {
    // Returning native name.
    firstKey = Object.keys(country.name.nativeName)[0];
    nativeName = country.name.nativeName[firstKey].common.toLowerCase();
  }
  return (
    country.name.common.toLowerCase().includes(textInput) ||
    nativeName.includes(textInput)
  );
};

const filterCountries = async (countries, textRegion, textInput) => {
  /*
  Filters the data using the form elements of the page. In first place, it filters
  the data using region, next it calls a function named nativeNameEvaluate to
  filter based in the input text of the user. Using toLowerCase to compare
  without case sensitive troubling.
  */
  let filteredCountries;

  textInput = textInput.toLowerCase();
  try {
    // First filter: Form Region Drop Down.
    if (textRegion != `All`) {
      filteredCountries = countries.filter(
        (country) => country.region == textRegion,
      );
    } else filteredCountries = countries;

    // Second filter: Form Input Text
    if (textInput.length > 0) {
      filteredCountries = filteredCountries.filter(
        nativeNameEvaluate.bind(this, textInput),
      );
    }
    return filteredCountries;
  } catch (error) {
    createSignBoard(`Filter Error:\n\n ${error}`, 'error');
    return undefined;
  }
};

const renderCountries = async (countries, rootElement) => {
  let firstKey;
  // Displaying countries.
  if (countries == undefined) {
    console.log('Error');
  } else if (countries.length == 0) {
    // if there's no cards.
    createSignBoard(`No cards to show.\nChange the filters.`, 'warning');
  } else {
    deleteSignBoard();
    countries.forEach((country) => {
      // Deleting Loading Board
      // Creating Each Card
      const card = document.createElement('div');
      card.classList.add(`card`);

      // Texts above flag.
      //    common
      const nameCommon = document.createElement('p');
      nameCommon.innerText = country.name.common;
      card.appendChild(nameCommon);

      //    Native Common
      const nameNativeCommon = document.createElement('p');
      if (country.name.nativeName == undefined) {
        // If the country doens't have navite Common name
        // it returns the common name.
        nameNativeCommon.innerText = country.name.common;
      } else {
        // Returning native name.
        firstKey = Object.keys(country.name.nativeName)[0];
        nameNativeCommon.innerText = country.name.nativeName[firstKey].common;
      }
      card.appendChild(nameNativeCommon);

      // Flags
      const picture = document.createElement('picture');
      const img = document.createElement('img');
      img.setAttribute('src', country.flags.svg);
      img.setAttribute('alt', country.name.official);
      picture.appendChild(img);
      card.appendChild(picture);

      // Adding the created card.
      rootElement.appendChild(card);
    });
  }
};

const formUpdate = async (
  formRegion,
  formCriteria,
  filteredCountries,
  filterText,
) => {
  // Deleting previous content
  rootElement.textContent = '';

  // Actualizando valores
  filterRegion = formRegion.value;
  filterText = formCriteria.value;

  // Creando aviso de carga.
  createSignBoard('Loading...', 'warning');

  // Filfrando countries en filteredCountries
  filteredCountries = await filterCountries(
    countries,
    filterRegion,
    filterText,
  );

  // Creando aviso de carga.
  createSignBoard('Loading...', 'warning');

  // Representando filteredCountries
  renderCountries(filteredCountries, rootElement);
};

const main = async (event) => {
  //Element
  const countriesFecthURL = 'https://restcountries.com/v3.1/all';
  const formRegion = document.querySelector('#region');
  const formCriteria = document.querySelector('#criteria');
  formRegion.classList.add('hide');
  formCriteria.classList.add('hide');
  let filteredCountries;
  let filterRegion = formRegion.value;
  let filterText = formCriteria.value;
  rootElement = document.querySelector('#root');
  pBoard = document.createElement('p');

  // Creando aviso de carga.
  createSignBoard('Loading...', 'warning');
  // Obteniendo countries desde la URL.
  countries = await getCountries(countriesFecthURL);

  // Filfrando countries en filteredCountries
  filteredCountries = await filterCountries(
    countries,
    filterRegion,
    filterText,
  );

  // Representando filteredCountries
  renderCountries(filteredCountries, rootElement);

  // Activando elementos de formulario y sus listeners.
  formRegion.classList.remove('hide');
  formCriteria.classList.remove('hide');
  formRegion.addEventListener('change', function (e) {
    formUpdate(formRegion, formCriteria, filteredCountries, filterText);
  });
  formCriteria.addEventListener('input', function (e) {
    formUpdate(formRegion, formCriteria, filteredCountries, filterText);
  });

};

/*
Events

 ! don't forget to wait for DOM content to be loaded!

 Las declacariones de la primera linea, etiquetadas como
 "Global Element" y éste listener serán lo único que se
 ejecute hasta que el DOM esté cargado. Cuando lo esté,
 Procedemos a ejecutar la función main
*/

window.addEventListener('DOMContentLoaded', main);
