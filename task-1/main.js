/*
// TASK 1.1
- CREATE A FUNCTION CALLED makeLegend WITH SOLE PARAMETER OF (str) WHICH TAKES IN
A STRING AS SOLE ARGUMENT.

// TASK 1.2
- CREATE A VARIABLE CALLED legendaryCelebs EQUAL TO AN EMPTY ARRAY = []
- CREATE A FOR LOOP TO ITERATE THROUGH VARIABLE WITH ARRAY OF CELEBRITY NAMES ('STRINGS').
- PUSH() THESE CELEBS ONTO EMPTY ARRAY BY CALLING makeLegend FUNCTION AND PASSING NAMES 
  OF CELEBS[i] AS THE STRING ARGUEMENT.

//TASK 1.3
- CREATE A NEW EMPTY ARRAY AND STORE IN VARIABLE CALLED vowelCelebs
- CREATE A VARIABLE WITH ARRAY OF VOWELS: A, E, I, O, U.
- MAKE A FOR LOOP TO ITERATE THROUGH CELEB ARRAY AND IF CELEB NAME STARTS WITH A VOWEL
PUSH ONTO NEW vowelCelebs array variable.
- Print vowelCelebs.
*/

let celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson",
];

function makeLegend(name) {
  return `${name} is now a legend.`;
}

let legendaryCelebs = [];

for (let i = 0; i < celebs.length; i++) {
  legendaryCelebs.push(makeLegend(celebs[i]));
}

console.log(legendaryCelebs);

let vowelCelebs = [];

for (let i = 0; i < celebs.length; i++) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(celebs[i][0].toLowerCase())) {
    vowelCelebs.push(celebs[i]);
  }
}

console.log(vowelCelebs);
