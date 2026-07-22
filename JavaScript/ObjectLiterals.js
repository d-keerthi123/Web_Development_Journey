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

