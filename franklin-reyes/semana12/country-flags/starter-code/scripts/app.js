const rootElement = document.querySelector("#root");

window.addEventListener("DOMContentLoaded", renderCountriesAsync);
let continent = document.getElementById("region").value;
// filter countries by region
// event listener para el select OK
document.getElementById("region").addEventListener("change", (event) => {
  continent = event.target.value;
  renderCountriesAsync();
});

console.log("region selecionada " + continent);

const getCountries = async () => {
  try {
    // Ejemplo const response = await fetch("https://restcountries.com/v3.1/region/americas"
    const response = await fetch(
      "https://restcountries.com/v3.1/region/" + continent,
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
