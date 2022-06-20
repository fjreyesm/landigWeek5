/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

'use strict';

//1. Supongamos que queremos crear un programa de calendario basado en navegador para realizar un seguimiento de las cosas. En los comentarios, enumere al menos tres abstracciones razonables que podría usar para construir este programa; para cada abstracción, enumere al menos dos propiedades y comportamientos que tendría sentido que tuviera esa abstracción. A continuación se muestra un ejemplo: escriba su respuesta en el mismo formato.

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

// 'Calendar Laboral'
// Description: Our app manages a calendar Laboral.

// Every 'calendar laboral' has
// - a dias festivos nacionales
// - a dias festivos locales
// - a convenio
// Every 'covenios' has
// - dias propios festivos

// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

// 'Owner'
// Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
// Every 'owner' has:
// - a name
// - an address

// Answer Starts Here
const pet_owner = {
  name : "pedro",
  address: "su casa",
}
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
  name : 'tiger',
  species: 'perro',
  breed: 'ladrar',
}

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
