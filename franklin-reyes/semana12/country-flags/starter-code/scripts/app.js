const rootElement = document.querySelector("#root");

window.addEventListener("DOMContentLoaded", renderCountriesAsync);
// ejecucion

const select = document.getElementById("region").value;
//let selectedRegion = select.options[select.selectedIndex].value;
console.log("region selecionada " + select);

const getCountries = async () => {
  try {
    //const response = await fetch("https://restcountries.com/v3.1/region/americas"
    const response = await fetch(
      "https://restcountries.com/v3.1/region/" + select,
      {
        method: "GET",
      }
    );
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
