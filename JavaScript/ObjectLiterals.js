let student={
    name:"keerthi",
    age:20,
    city:"chennai",
    cgpa:"9.38"
};
console.log(student);

//create an object literal for thread/twitter post

const post={
    username:"@keerthi2",
    content:"This is my first post",
    likes:344,
    reposts:66,
    tags:["#first post","chill"]
};

//Access values in object literals

console.log(student["name"]);
console.log(student.name);

console.log(post["content"]);

//Add / update values 
student.city="mumbai";
student.gender="female";
console.log(student);

//delete
delete student.cgpa;
console.log(student);

//Nested Objects - objects of objects
const classInfo={

    keerthi:{
        age:20,
        city:"chennai",
        cgpa:9.38
    },
    hema:{
        age:19,
        city:"vijaywada",
        cgpa:8.8
    }
};

//Array of objects
const classInfo2=[
    {
        name:"keerthi:",
        age:20,
        city:"chennai",
        cgpa:9.38
    },
    {
        name:"hema",
        age:19,
        city:"vijaywada",
        cgpa:8.8
    }
];

//Random Integers

// let num=Math.random;
// num=num*10;
// num.Math.floor(num);
// num=num+1;

//OR
// Math.floor(Math.random()*10)+1;

//Gessing game

const max=prompt("Enter the max number");

const random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }

    if(guess==random){
        console.log("you are right ! Congrats.",random);
        break;
    }else if(random > guess){
        guess=prompt("Too low ! try a bigger number");
    }else{
        guess = prompt("Too high! Try a smaller number:");
    }
    
}