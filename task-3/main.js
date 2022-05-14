/*
TASK 3.1
- CREATE AN ASYNC FUNCTION AND FETCH THE CAT API USING THE API URL PROVIDED.
- STORE DATA IN A VARIABLE
- QUERY SELECTOR TAG WITH ID ON HTML
- SET ATTRIBUTE ON VARIABLE TO BE DATA OBJECT CONTENT.
TASK 3.2
- CREATE A BUTTON ELEMENT USING JS AND ADDTO PAGE.
- ADD EVENT LISTENER TO THE BTN SO WHEN CLICKED NEW IMAGE DISPLAYS.
*/

async function getCatImage() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  let data = await response.json();
  //console.log(data);
  let catImage = document.querySelector("#cat-here");
  catImage.src = data[0].url;
  //console.log(data[0].url)
}


let button = document.querySelector("#new-cat-button").addEventListener("click", getCatImage);

getCatImage();