//Q1
//Create a number variable num with some value.Now,print “good” if the number is divisible by 10 and print “bad” if it is not
let num=12;

if(num%10==0){
    console.log("Good");
}else{
    console.log("Bad");
}

//Q2
//Take the user's name & age as input using prompts.
//Then return back the following statement to the user as an alert (by substituting
//their name & age) :
//name is age years old.
//[Use template Literals to print this sentence]

let name=prompt("Enter your name :");
let age=prompt("Enter your age :");
let op=`${name} is ${age} years old `;
alert(op);

//Q3
//Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]

let n=2;

switch(n){
    case 1:
        console.log("Months in Quarter 1 : January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2 : April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3 : July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        comsole.log("Invalid");
}

//Q4
// A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
// length greater than 5.
// For a given string print if it is golden or not.

let str="pie";

if((str[0]=="A" || str[0]=="a") && (str.length>5)){
    console.log("Golden String");
}else{
    console.log("Not a Golden String");
}

//Q5
//Write a program to find the largest of 3 numbers

let a=15;
let b=8;
let c=12;

console.log("The 3 numbers are " ,a, b, c);
if(a>b){
    if(a>c){
        console.log(a," is largest of the 3 numbers");
    }else{
        console.log(c," is largest of the 3 numbers");
    }
}
else if(b>c){
    console.log(b," is largest of the 3 numbers");
}else{
    console.log(c," is largest of the 3 numbers");
}

//Q6
//Write a program to check if 2 numbers have the same last digit.
//Eg : 32 and 47852 have the same last digit i.e. 2

let n1=32;
let n2=47852;

if(n1%10 == n2%10){
    console.log("have same last digit");
}else{
    console.log("doesn't have same last digit");
}