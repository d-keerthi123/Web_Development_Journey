//Manipulating Styles
let links=document.querySelectorAll(".box a");

// for(let i=0;i<links.length;i++){
//     links[i].style.color="purple";
// }

for(link of links){
    link.style.color="red";
}

//PQ
// add the following elements to the container using only js and dom methods
// 1)a <p> with a red text says "Hey ,I am red"

let para1=document.createElement("p");
para1.innerText="Hey, I am red";
document.querySelector("body").append(para1);
para1.classList.add("red");

// 2)a h3 with blue text that says "I am a blue h3"
let h3=document.createElement("h3");
h3.innerText="Hey, I am blue h3";
document.querySelector("body").append(h3);
h3.classList.add("blue");

//3 a div with a black border and pink background colour with the following elements inside of it 
//another h1 that says "I am a div" and a p that says "Mee Too !"

let div= document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");

h1.innerText="I am in a div";
para2.innerText="Mee Too!";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);