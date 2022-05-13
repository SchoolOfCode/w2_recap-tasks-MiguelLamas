/*
TASK 2.1 
- Create count variable and set to 0 everytime page loads
- querySelector `p` tag (with an id of `count`) 
- Use `setInterval`, to incrementCount function by 1 after every second.
- Create a function to increment count on `p` tag and display increment by 1 every second.
TASK 2.2
- Define setInterval within a variable to pass as argument in clearInterval for it to stop.
- Add IF Statement to define the condition for when we want the count to stop. 12 is last count.
TASK 2.3
- Use `textContent` to change the text in the `p` tag when it displays.
*/

let count = 0;
let p = document.querySelector("#count");
let myInterval = setInterval(incrementCount, 1000);

function incrementCount() {
  count++;
  p.innerText = count;
  if(count==12) {
  clearInterval(myInterval);
  }
};

document.getElementById("count").textContent = 0;