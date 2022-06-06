/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

"use strict";

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
// 'Car'
// Description: Our app manages car sales.
// Every 'car' has
// - a make
// - a model
// - a year
// Every 'car' can
// - drive
// - brake
// - park

// Answer Starts Here

//'Calendario'
//Description: 'Calendario mensual para gestionar tu dia a dia, eventos y citas.
//Every "Calendario" has:
// - year
// - months
// - days
// - Citas o Eventos{
// - dia
// - hora
// - nombreCita -- nombreEvento
// }

// Every 'Calendario' can
// - añadir Evento-Cita
// - eliminar Evento-Cita
// - modificar Evento-Cita

// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

// 'Owner'
// Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
// Every 'owner' has:
// - a name
// - an address

// Answer Starts Here

const pet_owner = {
  name: "Andres",
  addres: "C/Voltaa 161",
};

console.log(pet_owner);

// Answer Ends Here

// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

// Pet
// Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
// Every 'pet' has:
// - a name
// - a species
// - a breed
// - a noise that it can make (e.g. 'bark', 'meow', etc.)
// Every pet can:
// - make noise (each pet makes its own unique noise, as specified by `noise`.

// Answer Starts Here

const some_pet = {
  name: "Bobby",
  species: "dog",
  breed: "Caniche", //Poodle
  noise: "Guau Guau",

  makeNoise() {
    console.log(this.noise);
  },
};
console.log(some_pet);

console.log(some_pet.noise);

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
