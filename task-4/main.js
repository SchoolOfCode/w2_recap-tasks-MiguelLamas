/*
- DECLARE NEW VARIABLE importantThings as an empty variable.
- 
*/

/*let input = document.querySelector("#important-thing");
input.addEventListener('click', getText);

let importantThings = [];
let button = document.querySelector("#add-to-list")

function getText(event) {
if (button === ) {
    importantThings.push(clicked.textContent);
    return importantThings;
  }
}
*/

let importantThings = [];

function addToList() {
  let input = document.querySelector("label");
  let list = importantThings.push(input);
  console.log(importantThings);
}

console.log(addToList());

let button = document.querySelector("#add-to-list");
button.addEventListener("click", addToList);
