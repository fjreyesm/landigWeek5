const countriesElement = document.querySelector('#js-countries');

export function displayCountries(countries) {
  /*

   <section>
        <h2>Argentina</h2>
        <picture>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
            alt="argentina"
          />
        </picture>
      </section>

      */

  // TODO: hacerlo inmutable
  countries.forEach((country) => {
    // TODO: Region

    // const name = country.name.common;
    // const svg = country.flags.svg;

    const {
      name: { common },
      flags: { svg },
    } = country;

    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    const picture = document.createElement('picture');
    const img = document.createElement('img');

    h2.innerText = common;

    img.setAttribute('src', svg);
    img.setAttribute('alt', common);

    picture.appendChild(img);

    section.appendChild(h2);
    section.appendChild(picture);

    countriesElement.appendChild(section);
  });
}

export function displayCountriesTwo(countries) {
  const countriesHTMLArray = countries.map((country) => {
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

export function hello() {
  console.log('hola');
}
