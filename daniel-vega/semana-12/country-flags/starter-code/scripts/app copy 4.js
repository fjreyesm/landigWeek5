//  Global Element
let rootElement;
let pLoading;

//  Execution

const createSignBoard = (text, level) => {
  // Loading label
  pLoading.innerText = text;
  pLoading.classList.add(`sign-board`);
  switch (level) {
    case 'warning':
      pLoading.classList.add(`sign-warning`);
      break;
    case 'error':
      pLoading.classList.add(`sign-error`);
      break;
  }
  rootElement.appendChild(pLoading);
};

const deleteSignBoard = () => {
  rootElement.removeChild(pLoading);
};

const getCountries = async (url) => {
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
  let filteredCountries;

  textInput = textInput.toLowerCase();
  try {
    if (textRegion != `All`) {
      filteredCountries = countries.filter(
        (country) => country.region == textRegion,
      );
    } else filteredCountries = countries;
    //console.log(filteredCountries);
    //console.log('comparando:');
    //console.log(textInput);
    //console.log(nativeNameArray);

    if (textInput.length > 0) {
      filteredCountries = filteredCountries.filter(
        nativeNameEvaluate.bind(this, textInput),
      );
      //(country) =>

      //array.some((element) => element.includes('z'))
      //nativeNameArray.some((element) => element.includes(textInput)),

      //console.log(filteredCountries);
    }
    return filteredCountries;
  } catch (error) {
    console.log(`bla`);
    createSignBoard(`Filter Error:\n\n ${error}`, 'error');
  }
};

const renderCountries = async (countries, rootElement) => {
  let firstKey;

  // Displaying countries.
  if (countries == undefined) {
    // if there's no cards.
    // enable when program fixed.!!!
    //createSignBoard(`No cards to show.\nChange the filters.`, 'warning');
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
  // Temp
  //filterRegion = 'Europe';
  //filterText = 'Un';
  //
  rootElement = document.querySelector('#root');
  pLoading = document.createElement('p');

  // Creando aviso de carga.
  createSignBoard('Loading...', 'warning');
  // Obteniendo countries desde la URL.
  countries = await getCountries(countriesFecthURL);

  // Creando array con nombres nativos.
  //createNativeNameArray(countries);

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
  formRegion.addEventListener('change', async (event) => {
    //console.log('¡EVENTO');
    //console.log(event);
    // Deleting previous content
    rootElement.textContent = '';
    // Creando aviso de carga.
    createSignBoard('Loading...', 'warning');
    // Actualizando valores
    filterRegion = formRegion.value;
    filterText = formCriteria.value;
    // Filfrando countries en filteredCountries
    filteredCountries = await filterCountries(
      countries,
      filterRegion,
      filterText,
    );
    // Representando filteredCountries
    renderCountries(filteredCountries, rootElement);
  });
  formCriteria.addEventListener('input', async (event) => {
    // Deleting previous content
    rootElement.textContent = '';
    // Creando aviso de carga.
    createSignBoard('Loading...', 'warning');
    // Actualizando valores
    filterRegion = formRegion.value;
    filterText = formCriteria.value;
    // Filfrando countries en filteredCountries
    filteredCountries = await filterCountries(
      countries,
      filterRegion,
      filterText,
    );
    // Representando filteredCountries
    renderCountries(filteredCountries, rootElement);
  });
};

//  Events
//
// ! don't forget to wait for DOM content to be loaded!
//
// Las declacariones de la primera linea, etiquetadas como
// "Global Element" y éste listener serán lo único que se
// ejecute hasta que el DOM esté cargado. Cuando lo esté,
// Procedemos a ejecutar la función main
//
window.addEventListener('DOMContentLoaded', main);
