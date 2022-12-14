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

// 'Music'
// Description: Our app to listen to music.
// Every 'music' has
// - a label
// - a artist
// - a year
// Every 'music' can
// - listen
// - play
// - insert

// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

// 'Owner'
// Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
// Every 'owner' has:
// - a name
// - an address

// Answer Starts Here

let pet_owner = {
  name: 'David',
  address: 'C/ La Pedrera 6, Tremp, Lleida',
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

let some_pet = {
  name: 'Thor',
  species: 'Dog',
  breed: 'American Staffordshire terrier',
  noise: 'bark',
  makeNoise: function () {
    console.log(this.noise);
  },
};

// makeNoise
some_pet.makeNoise();

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
