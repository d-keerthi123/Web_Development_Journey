console.log("Hello World");
console.log("This is keerthi.I am currently a 3rd year student pursuing CSE in SIST");

//template literals

let a=10;
let b=6;
let output="sum is : "+ (a+b);
console.log(output);
let op=`sum is : ${a+b}`;
console.log(op);

// if-else statement
let age=17;
if(age>=18){
    console.log("Major");
}else{
    console.log("Minor");
}

//PQ1
//create a traffic light system that tell you what to do based on the colour

let colour="red";

if(colour == "red"){
    console.log("STOP");
}
if(colour =="yellow"){
    console.log("SLOW DOWN");
}
if(colour=="green"){
    console.log("GO");
}
