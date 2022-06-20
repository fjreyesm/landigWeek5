/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

'use strict';

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

// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

// 'Owner'
// Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
// Every 'owner' has:
// - a name
// - an address

// Answer Starts Here
let ownerName = document.createElement("input");
ownerName.placeholder = "please enter owners name";
let address = document.createElement("input");
address.placeholder = "please enter owners address";

const pet_owner = {
  "owner name": ownerName.value,
  "Adress": address.value
};
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
let petName = document.createElement("input");
petName.placeholder = "please enter pets name";
let species = document.createElement("input");
species.placeholder = "please enter pets species";
let breed = document.createElement("input");
breed.placeholder = "please enter the pet breeding";
let noise = document.createElement("input");
noise.placeholder = "please enter pets noise";

const some_pet {
  "pet name": petName.value,
  "species": species.value,
  "breeding": breed.value,
  "noise": noise.velue
};



// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
