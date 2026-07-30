// Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.
let btn=document.createElement("button");
btn.innerText="Click me !"
document.body.appendChild(btn);
btn.addEventListener("click", function () {
    btn.style.backgroundColor = "green";
});


// Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let inp=document.querySelector("input");
let h2=document.querySelector("h2");

inp.addEventListener("click",function(){
    let value=inp.value.replace(/[^A-Za-z ]/g, ""); //string.replace(pattern, replacement) Find all characters that are not letters or spaces.
    // Replace them with "" (nothing), which effectively removes them.
    h2.innerText=value;
})


// Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load

//Runs when the mouse leaves the element.
let box = document.querySelector("div");
box.addEventListener("mouseout",function(){
    console.log("Mouse moved out");
})

//The keypress event fires when the user presses a key that produces a character (such as letters, numbers, or symbols).
// However, keypress is deprecated. Modern JavaScript recommends using keydown or keyup instead.
inp.addEventListener("keypress",function(){
    console.log("key is pressed");
})


//The load event fires once, after the entire page has loaded.
window.addEventListener("load", function () {
    console.log("Website is ready!");
});

//The scroll event fires every time the user scrolls.
window.addEventListener("scroll", function () {
    console.log("You are scrolling!");
});