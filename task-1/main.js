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

/*
// TASK 1.1
- CREATE A FUNCTION CALLED makeLegend WITH SOLE PARAMETER OF (NAME) WHICH TAKES IN
('name') STRING AS SOLE ARGUMENT.

/*
function makeLegend(name) {
  return `${name} is now a legend`;
}

console.log(makeLegend('Chris')); */

/*
// TASK 1.2
- CREATE A VARIABLE CALLED legendaryCelebs EQUAL TO AN EMPTY ARRAY = [] INSIDE FUNCTION BLOCK.
- CREATE A FOR LOOP TO ITERATE THROUGH VARIABLE WITH ARRAY OF CELEBRITY NAMES ('STRINGS').
- CONCATENATE CELEBS ON ARRAY AND NEW STRING AND PUSH INTO NEWLY CREATED legendaryCelebs ARRAY VARIABLE.

*/
function makeLegend(name) {
  let legendaryCelebs = [];
  for (let i = 0; i < celebs.length; i++) {
    legendaryCelebs.push(celebs[i] + " is now a legend");
  }
  return legendaryCelebs;
}
console.log(makeLegend());

/*
//TASK 1.3
- CREATE A NEW EMPTY ARRAY AND STORE IN VARIABLE CALLED vowelCelebs
- MAKE A FOR LOOP TO ITERATE THROUGH CELEB ARRAY AND IF CELEB NAME STARTS WITH A VOWEL
PUSH ONTO NEW vowelCelebs array variable.
- Print vowelCelebs.
*/

let vowelCelebs = [];
for (let i = 0; i < celebs.length; i++) {
  if (/[aeiouAEIOU]/.test(celebs[i].charAt(0))
  ) {
    vowelCelebs.push(celebs[i]);
  }

}

console.log(vowelCelebs);