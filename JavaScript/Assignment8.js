// Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”,
// where Delta is bold

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.body.appendChild(para);

// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
// Change its color to purple.

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.body.appendChild(h1);
h1.classList.add("dom");

// Qs3. Access the btn using the querySelector and button id. Change the button
// background color to blue and text color to white.
let btn=document.querySelector("#btn");
btn.classList.add("btn");

// Qs2. Add following attributes to the element :
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”

let input= document.querySelector("input");
input.setAttribute("placeholder", "username");

// Qs1. Create a new input and button element on the page using JavaScript only. Set the
// text of button to “Click me”;
// Create input element
let input2= document.createElement("input");

// Create button element
let btn2 = document.createElement("button");

// Set button text
btn2.innerText = "Click me";

// Add them to the webpage
document.body.appendChild(input2);
document.body.appendChild(btn2);