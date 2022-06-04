const rootElement = document.querySelector("#root");

window.addEventListener("DOMContentLoaded", renderCountriesAsync);
// ejecucion

const getCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/region/asia", {
      method: "GET",
    });
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error("ERRRORRRR AAAAWWWWW ", error);
  }
};

async function renderCountriesAsync(event) {
  const pLoading = document.createElement("p");
  pLoading.innerText = "Loading";
  rootElement.appendChild(pLoading);

  try {
    const countries = await getCountries();

    rootElement.innerHTML = "";

    countries.forEach((country) => {
      const picture = document.createElement("picture");
      const img = document.createElement("img");

      img.setAttribute("src", country.flags.svg);
      img.setAttribute("alt", country.name.official);
      img.setAttribute("loading", "lazy");

      picture.appendChild(img);

      rootElement.appendChild(picture);
    });
  } catch (error) {
    pLoading.innerText = "Error";
    rootElement.appendChild(pLoading);
  }
}

//filter countries by region
function filter(event) {
  const region = event.target.value;
  const countries = document.querySelectorAll("picture");

  countries.forEach((country) => {
    const countryRegion = country.querySelector("img").alt;

    if (countryRegion.includes(region)) {
      country.style.display = "block";
    } else {
      country.style.display = "none";
    }
  });
}
