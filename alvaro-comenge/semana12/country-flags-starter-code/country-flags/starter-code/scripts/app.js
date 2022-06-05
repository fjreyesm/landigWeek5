// ! don't forget to wait for DOM content to be loaded!
//elemento
//window;
const rootElement = document.querySelector('#root');

window.addEventListener('DOMContentLoaded', renderCountriesAsync);
//Ejecicucion 
function renderCountriesSync(event) {
  const response = fetch('https://restcountries.com/v3.1/all', {
    method: 'GET',
  });
 

    response
     .then((data) => {
            return data.json();
    })
      .then((json) => {
      console.log({ json });
    })
      .catch((error) => {
      console.error('HAY UN ERRROR', error);
     
    });
}

const getCountries = async () => {
  try {
    const response = await  fetch('https://restcountries.com/v3.1/all', {
      method: 'GET',
    });
    const countries = await response.json();
    return countries;
    
  } catch (error) {
    console.error('HAY UN ERROR', error);
  }
};

  async function renderCountriesAsync(event) {
    const pLoading = document.createElement('p');
    pLoading.innerText = 'Loading';
    rootElement.appendChild(pLoading);

  try {
    const countries = await getCountries();

    rootElement.innerHTML = '';
    countries.forEach((country) => {
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


    



