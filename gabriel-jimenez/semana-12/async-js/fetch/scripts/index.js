const rootElement = document.querySelector("#root");
const dropdownMenu = document.querySelector("select");
const searchField = document.querySelector("input");
let countriesGlobal = [];

window.addEventListener("DOMContentLoaded", initialRender);
dropdownMenu.addEventListener("change", dropdownMenuRender);
searchField.addEventListener("keyup", searchFieldRender);

const getCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    });
    const countries = await response.json();
    countries.sort(function (a, b) {
      let textA = a.name.common.toUpperCase();
      let textB = b.name.common.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    countriesGlobal = countries;
    return countries;
  } catch (error) {
    console.error("ERRRORRRR AAAAWWWWW ", error);
  }
};

async function initialRender(event) {
  const pLoading = document.createElement("p");
  pLoading.innerText = "Loading";
  rootElement.appendChild(pLoading);

  try {
    const countries = await getCountries();
    rootElement.innerHTML = "";
    countries.forEach((country) => {
      const container = document.createElement("div");
      const normalName = document.createElement("h1");
      const nativeName = document.createElement("h2");
      const picture = document.createElement("picture");
      const img = document.createElement("img");

      img.setAttribute("src", country.flags.svg);
      img.setAttribute("alt", country.name.official);
      img.setAttribute("loading", "lazy");
      normalName.innerText = country.name.common;
      if (country.name.hasOwnProperty("nativeName") === true) {
        nativeName.innerText =
          country.name.nativeName[
            Object.keys(country.name.nativeName)[0]
          ].common;
      } else {
        nativeName.innerText = country.name.common;
      }
      container.appendChild(normalName);
      container.appendChild(nativeName);
      picture.appendChild(img);
      container.appendChild(picture);

      rootElement.appendChild(container);
    });
  } catch (error) {
    pLoading.innerText = "Error";
    rootElement.appendChild(pLoading);
    console.log(error);
  }
}

function dropdownMenuRender(event) {
  console.log("Current dropdown menu value: " + dropdownMenu.value);

  if (dropdownMenu.value !== "All") {
    let filteredSelection = countriesGlobal.filter(
      (pais) => pais.region === dropdownMenu.value
    );

    rootElement.innerHTML = "";

    filteredSelection.forEach((country) => {
      const container = document.createElement("div");
      const normalName = document.createElement("h1");
      const nativeName = document.createElement("h2");
      const picture = document.createElement("picture");
      const img = document.createElement("img");

      img.setAttribute("src", country.flags.svg);
      img.setAttribute("alt", country.name.official);
      img.setAttribute("loading", "lazy");
      normalName.innerText = country.name.common;
      if (country.name.hasOwnProperty("nativeName") === true) {
        nativeName.innerText =
          country.name.nativeName[
            Object.keys(country.name.nativeName)[0]
          ].common;
      } else {
        nativeName.innerText = country.name.common;
      }

      container.appendChild(normalName);
      container.appendChild(nativeName);
      picture.appendChild(img);
      container.appendChild(picture);

      rootElement.appendChild(container);
    });
  } else {
    rootElement.innerHTML = "";

    countriesGlobal.forEach((country) => {
      const container = document.createElement("div");
      const normalName = document.createElement("h1");
      const nativeName = document.createElement("h2");
      const picture = document.createElement("picture");
      const img = document.createElement("img");

      img.setAttribute("src", country.flags.svg);
      img.setAttribute("alt", country.name.official);
      img.setAttribute("loading", "lazy");
      normalName.innerText = country.name.common;
      if (country.name.hasOwnProperty("nativeName") === true) {
        nativeName.innerText =
          country.name.nativeName[
            Object.keys(country.name.nativeName)[0]
          ].common;
      } else {
        nativeName.innerText = country.name.common;
      }

      container.appendChild(normalName);
      container.appendChild(nativeName);
      picture.appendChild(img);
      container.appendChild(picture);

      rootElement.appendChild(container);
    });
  }
}

function searchFieldRender(event) {
  console.log("Current search field input: " + searchField.value);
  let containedFilter = countriesGlobal.filter((pais) =>
    pais.name.common.toLowerCase().includes(searchField.value.toLowerCase())
  );

  console.log(containedFilter);

  rootElement.innerHTML = "";

  containedFilter.forEach((country) => {
    const container = document.createElement("div");
    const normalName = document.createElement("h1");
    const nativeName = document.createElement("h2");
    const picture = document.createElement("picture");
    const img = document.createElement("img");

    img.setAttribute("src", country.flags.svg);
    img.setAttribute("alt", country.name.official);
    img.setAttribute("loading", "lazy");
    normalName.innerText = country.name.common;
    if (country.name.hasOwnProperty("nativeName") === true) {
      nativeName.innerText =
        country.name.nativeName[Object.keys(country.name.nativeName)[0]].common;
    } else {
      nativeName.innerText = country.name.common;
    }

    container.appendChild(normalName);
    container.appendChild(nativeName);
    picture.appendChild(img);
    container.appendChild(picture);

    rootElement.appendChild(container);
  });
}
