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
console.log('Test 1.: %cOK ', 'color: #8c8');
const calendar = new Object();
calendar.monthName = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];
calendar.weekDayName = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
calendar.currentWeekDay = 5;
calendar.currentDay = 20;
calendar.currentMonth = 5;
calendar.currentYear = 2022;
calendar.leapYear = false;
calendar.holyday = false;
calendar.event01 = { name: 'Work meeting', date: '05-23-2022', time: '17:00' };
console.log('\nCalendar object:\n', calendar);
// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

// 'Owner'
// Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
// Every 'owner' has:
// - a name
// - an address

// Answer Starts Here
console.log('\nTest 2.: %cOK ', 'color: #8c8');
const pet_owner = new Object();
pet_owner.name = 'Daniel Vega Egea';
pet_owner.address = 'Fake Street, 123';
console.log('\nPet owner object:\n', pet_owner);
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
console.log('\nTest 3.: %cOK ', 'color: #8c8');
const some_pet = new Object();
some_pet.name = 'Cleopatra';
some_pet.species = 'Cat';
some_pet.breed = 'Tricolor';
some_pet.noise = 'meow';
some_pet.makeNoise = function () {
  console.log(this.noise);
};
console.log('\nSome pet object:\n', some_pet);
console.log(`\n${some_pet.name} says:`);
some_pet.makeNoise();
// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
