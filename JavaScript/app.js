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
else if(colour =="yellow"){
    console.log("SLOW DOWN");
}
else if(colour=="green"){
    console.log("GO");
}

//PQ2

let size="XL";

if(size=="XL"){
    console.log("Price is : 250");
}else if(size=="L"){
    console.log("Price is : 200");
}else if(size=="M"){
    console.log("Price is : 100");
}else if(size=="S"){
    console.log("Price is : 50");
}

//Nested if-else

let marks=95;

if(marks >=35){
    if(marks>=90){
        console.log("Outstanding Performance, keep it up !! ");
    }else{
        console.log("pass");
    }
}else{
    console.log("Fail, better luck next time!!");
}

//PQ3
//A good string is staring which starts with "a" and has a length greater than 3.WAP to find its a good string or not

let str="apple";

if(str[0] == "a" && str.length>3){
    console.log("Good string");
}else{
    console.log("Bad String");
}

//Switch Statement

let color="pink";

switch(color){
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("SLOW DOWN");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("INVALID");
}

//PQ4
//use switch statement to print the day of the week using a number variable day with values 1-7

let day=5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("INVALID");
}

//Alert
alert("Something is wrong !");

//Prompt
let name=prompt("Enter your name :");
console.log("Welcome",name ,"!");

console.error("Syntax Error!!");
console.warn("It may go wrong!");