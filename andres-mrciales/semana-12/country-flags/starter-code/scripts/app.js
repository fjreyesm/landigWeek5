// ! don't forget to wait for DOM content to be loaded!

const rootElement = document.querySelector("#root");

window.addEventListener("DOMContentLoaded", render);

const getCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    });
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error("Error ", error);
  }
};
const getCountriesAfrica = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/region/Africa",
      {
        method: "GET",
      }
    );
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error("Error ", error);
  }
};
const getCountriesAmericas = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/region/Americas",
      {
        method: "GET",
      }
    );
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error("Error ", error);
  }
};
const getCountriesAsia = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/region/Asia", {
      method: "GET",
    });
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error("Error ", error);
  }
};
const getCountriesEurope = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/region/Europe",
      {
        method: "GET",
      }
    );
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error("Error ", error);
  }
};
const getCountriesOceania = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/region/Oceania",
      {
        method: "GET",
      }
    );
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error("Error ", error);
  }
};

async function render(event) {
  const loading = document.createElement("p");
  loading.innerText = "Loading";
  rootElement.appendChild(loading);

  try {
    const country = await getCountries();
    rootElement.innerHTML = "";
    country.forEach((country) => {
      const picture = document.createElement("picture");
      const img = document.createElement("img");
      img.setAttribute("src", country.flags.svg);
      img.setAttribute("alt", country.name.official);
      img.setAttribute("loading", "lazy");

      picture.appendChild(img);

      rootElement.appendChild(picture);
    });
  } catch (error) {
    loading.innerText = "Error";
    rootElement.appendChild(loading);
  }
}

document.getElementById("paises-select").addEventListener("change", selecForm);

function selecForm(event) {
  let select = document.getElementById("paises-select").value;
  if (select === "Africa") {
    async function render5() {
      const loading = document.createElement("p");
      loading.innerText = "Loading";
      rootElement.appendChild(loading);

      try {
        const country = await getCountriesAfrica();
        rootElement.innerHTML = "";
        country.forEach((country) => {
          const picture = document.createElement("picture");
          const img = document.createElement("img");
          img.setAttribute("src", country.flags.svg);
          img.setAttribute("alt", country.name.official);
          img.setAttribute("loading", "lazy");

          picture.appendChild(img);

          rootElement.appendChild(picture);
        });
      } catch (error) {
        loading.innerText = "Error";
        rootElement.appendChild(loading);
      }
    }
    render5();
  } else if (select === "Americas") {
    async function render4() {
      const loading = document.createElement("p");
      loading.innerText = "Loading";
      rootElement.appendChild(loading);

      try {
        const country = await getCountriesAmericas();
        rootElement.innerHTML = "";
        country.forEach((country) => {
          const picture = document.createElement("picture");
          const img = document.createElement("img");
          img.setAttribute("src", country.flags.svg);
          img.setAttribute("alt", country.name.official);
          img.setAttribute("loading", "lazy");

          picture.appendChild(img);

          rootElement.appendChild(picture);
        });
      } catch (error) {
        loading.innerText = "Error";
        rootElement.appendChild(loading);
      }
    }
    render4();
  } else if (select === "Asia") {
    async function render1() {
      const loading = document.createElement("p");
      loading.innerText = "Loading";
      rootElement.appendChild(loading);

      try {
        const country = await getCountriesAsia();
        rootElement.innerHTML = "";
        country.forEach((country) => {
          const picture = document.createElement("picture");
          const img = document.createElement("img");
          img.setAttribute("src", country.flags.svg);
          img.setAttribute("alt", country.name.official);
          img.setAttribute("loading", "lazy");

          picture.appendChild(img);

          rootElement.appendChild(picture);
        });
      } catch (error) {
        loading.innerText = "Error";
        rootElement.appendChild(loading);
      }
    }
    render1();
  } else if (select === "Europe") {
    async function render2() {
      const loading = document.createElement("p");
      loading.innerText = "Loading";
      rootElement.appendChild(loading);

      try {
        const country = await getCountriesEurope();
        rootElement.innerHTML = "";
        country.forEach((country) => {
          const picture = document.createElement("picture");
          const img = document.createElement("img");
          img.setAttribute("src", country.flags.svg);
          img.setAttribute("alt", country.name.official);
          img.setAttribute("loading", "lazy");

          picture.appendChild(img);

          rootElement.appendChild(picture);
        });
      } catch (error) {
        loading.innerText = "Error";
        rootElement.appendChild(loading);
      }
    }
    render2();
  } else if (select === "Oceania") {
    async function render3() {
      const loading = document.createElement("p");
      loading.innerText = "Loading";
      rootElement.appendChild(loading);

      try {
        const country = await getCountriesOceania();
        rootElement.innerHTML = "";
        country.forEach((country) => {
          const picture = document.createElement("picture");
          const img = document.createElement("img");
          img.setAttribute("src", country.flags.svg);
          img.setAttribute("alt", country.name.official);
          img.setAttribute("loading", "lazy");

          picture.appendChild(img);

          rootElement.appendChild(picture);
        });
      } catch (error) {
        loading.innerText = "Error";
        rootElement.appendChild(loading);
      }
    }
    render3();
  } else {
    render();
  }
}
document.querySelector("button").addEventListener("click", searchPaises);

function searchPaises(event) {
  let input = document.getElementById("paises-search").value;
  let httpModificado = `https://restcountries.com/v3.1/name/${input}`;
  const getCountriesByName = async () => {
    try {
      const response = await fetch(httpModificado, {
        method: "GET",
      });
      const countries = await response.json();
      return countries;
    } catch (error) {
      console.error("Error ", error);
    }
  };
  async function render2() {
    const loading = document.createElement("p");
    loading.innerText = "Loading";
    rootElement.appendChild(loading);

    try {
      const country = await getCountriesByName();
      rootElement.innerHTML = "";
      country.forEach((country) => {
        const picture = document.createElement("picture");
        const img = document.createElement("img");
        img.setAttribute("src", country.flags.svg);
        img.setAttribute("alt", country.name.official);
        img.setAttribute("loading", "lazy");

        picture.appendChild(img);

        rootElement.appendChild(picture);
      });
    } catch (error) {
      loading.innerText = "Error";
      rootElement.appendChild(loading);
    }
  }
  render2();
}
