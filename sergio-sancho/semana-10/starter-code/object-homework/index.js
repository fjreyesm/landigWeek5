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
//'Calendar'
// Description : Our app manage events
//Every 'event' has 
// - a date
// - a title 
// - a content

// Every 'event' can
// - create
// - delete
// - modify
// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

// 'Owner'
// Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
// Every 'owner' has:
// - a name
// - an address

// Answer Starts Here
const pet_owner = {
    name:'Lucas',
    address:'987 cul de sac'
    

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
class some_pet  {
    constructor(name,species,breed,noise){
    this.name = name;
    this.species = species;
    this.breed = breed;
    noise = 'bark';
     }
     bark() {
        console.log('noise');
      }
    }
// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
