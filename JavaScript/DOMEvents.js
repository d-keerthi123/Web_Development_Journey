let btns=document.querySelectorAll("button");
console.dir(btns);

// btn.onclick=function(){
//     // console.log("Button was clicked");
//     alert("button was clicked!");
// }

function sayHello(){
    console.log("Hello");
}
function sayName(){
    console.log("Keerthi");
}
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

for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("you double clicked!!")
    });
}

