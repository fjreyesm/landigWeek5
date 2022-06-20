const rootElement = document.querySelector('#root');

window.addEventListener('DOMContentLoaded', renderCountriesAsync);

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
// SEARCH
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('#search-btn');
const result = document.querySelector('.result');
const searchSection = document.querySelector('.search-section');

searchBtn.addEventListener('click', () => {
  let url = `https://restcountries.com/v3.1/name/${searchBar.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountry(data));
});

const displayCountry = (data) => {
  console.log(data);
  data.forEach((country) => {
    const div = document.createElement('div');
    div.className = 'img-result';
    div.style.width = '18rem';
    div.innerHTML = `
            <img src="${country.flags.svg}" class="img-top" alt="Flag">
            <div class="text-result">
                <h2 class="card-text">${country.name.official}</h2>
            </div>
    `;
    result.appendChild(div);
  });
  root.remove();
};
