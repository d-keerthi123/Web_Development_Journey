// let btns=document.querySelectorAll("button");
// console.dir(btns);

// btn.onclick=function(){
//     // console.log("Button was clicked");
//     alert("button was clicked!");
// }

// function sayHello(){
//     console.log("Hello");
// }
// function sayName(){
//     console.log("Keerthi");
// }
// btn.onclick=sayHello;

// for(btn of btns){
//     btn.onclick=sayHello;
// }


// for(btn of btns){
//     btn.onmouseenter=function(){
//         console.log("You entered a button");
//     };
// }

//Event Listener

// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         console.log("you double clicked!!")
//     });
// }

//key board events
let b=document.querySelector("button");
let inp=document.querySelector("#type");

b.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
});

b.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("button clicked");
});

inp.addEventListener("keydown",function(event){
    console.log("key was pressed");
})
inp.addEventListener("keyup",function(event){
    console.log("key was released");
})


//Form Events
let f=document.querySelector("form");

f.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("Form submitted");

    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass");
    let user=this.elements[0];
    let pass=this.elements[1];

    console.log("input value:",user.value); //used to extract form data
    console.log("input value:",pass.value);
})