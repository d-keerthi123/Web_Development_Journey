//create afunction to print a poem
function printPoem(){
    console.log("Shall I compare thee to a summer's day?");
    console.log("Thou art more lovely and more temperate");
    console.log(" Rough winds do shake the darling buds of May,");
    console.log("And summer's lease hath all too short a date");
}
printPoem();


//Create a function to roll a dice and always display the value of dice(1-6)
function rollDice(){
    const random=Math.floor(Math.random()*6)+1;
    console.log(random);
}
rollDice();

//Functions with arguments
function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("keerthi",20);

//create a function that gives us the average of the 3 numbers
function avg(n1,n2,n3){
    console.log((n1+n2+n3)/3);
}
avg(1,2,3);

//create a function that print the multiplication table of number 
function printTable(n){
   for(let i=1;i<=10;i++){
     console.log(`${n}x ${i}= ${n*i}`);
   }
}
printTable(5);

//Create a function that prints a sum from 1 to n

function sum(n){
    let s=0;
    for(let i=1;i<=n;i++){
        s+=i;
    }
    console.log(s);
}

sum(3);

//Create a function that returns the concatenation of an array
let str=["hello","this","is","keerthi"];
function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}

console.log(concat(str));

//Function Expressions

let sum1=function(a,b){
    return a+b;
}
console.log(sum1(1,2));


//Higher order functions

function multipleGreet(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}

let greet=function(){
    console.log("Hello");
}

multipleGreet(greet,5);

//Higher order functions

let request="odd";
function oddOrEvenTest(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(request=="even"){
        let even=function(n){
            console.log((n%2==0));
        }
        return even;
    }
    else{
        console.log("Wrong request");
    }
}
let func = oddOrEvenTest("odd");
func(2);
func(3);

//Methods
const cal={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    }
};
console.log(cal.add(1,5));

//Arrow Functions

const sum2=(a,b)=>{
    console.log(a+b);
};
sum2(3,4);

//Set Timeout 
console.log("Hello");
setTimeout (()=>{
    console.log("This is keerthi")
},1000);
console.log("Welcome!");

//Set Interval
// console.log("Hello");
// setInterval (()=>{
//     console.log("This is keerthi")
// },1000);
// console.log("Welcome!");

//This with Arrow Functions

const s={
    name:"keerthi",
    marks:100,
    prop:"this", //global scope

    getName:function(){
        console.log(this); // here "this" is calling object which is student
        return this.name;
    },

    getMarks:()=>{
        console.log(this);//here its the scope of the parent's which is window (lexical scope)
        //in arrow functions the this is the this of the calling object
        return this.marks;
    }
};