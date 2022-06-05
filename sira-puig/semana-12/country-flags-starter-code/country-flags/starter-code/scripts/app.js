// ! don't forget to wait for DOM content to be loaded!
//elemento
//window;
//evento
//window.addEventListener("DOMContentLoaded", renderCountriesSync);
const rootElement = document.querySelector("#root");

window.addEventListener("DOMContentLoaded", renderCountriesAsync);
//evento de ventana para esperar que todo el DOM este cargado y renderizado DOMContentLoaded

//ejecucion
//funcion comentada pero abajo esta desarrollada con su codigo final

/*function renderCountriesSync(event) {
  //const response=window.fetch como window es una variable global no necesito nombrarla:
  const response = fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
  });

  //expliacion de response, por eso esta comentada
  response.then((data) => {
    console.log({ data });
    //ya tengo la data pero en binario, ahora voy a convertirla para manejarla
    const json = data.json();
    //serializa de binario a json
    console.log({ json });//tambien es una promesa    
  });
}*/
//ejecucion
function renderCountriesSync(event) {
  const response = fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
  });

  response
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      console.log({ json }); //ya esta serializado
      //solo imprime
      //aqui podríamos retornar la region y el nombre?
    })
    .catch((error) => {
      console.error("ERRORRRR AAAAWWWWW", error);
    });
}

//este lo puedo reutilizar en la linea 61
const getCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    });
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error("ERRORRRR AAAAWWWWW", error);
  }
};

async function renderCountriesAsync(event) {
  const countries = await getCountries(); //esto es un array ahora

  countries.forEach((country) => {
    const picture = document.createElement("picture");
    const img = document.createElement("img");
    const nombrePais = document.createElement("p");

    img.setAttribute("src", country.flags.svg);
    img.setAttribute("alt", country.name.official);
    nombrePais.textContent = country.name.official;

    picture.appendChild(img);
    rootElement.appendChild(picture);
    rootElement.appendChild(nombrePais);
  });
}
