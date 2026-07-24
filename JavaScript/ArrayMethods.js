//For each
let arr=[1,2,3,4,5];

// let print=function(el){
//     console.log(el);
// };

// arr.forEach(print);

//OR
// arr.forEach(function(el){
//     console.log(el);
// });

//Or arrow function
arr.forEach((el) => {
    console.log(el);
});

//forEach -objects
const arr2=[
    {
        name:"keerthi",
        marks:100
    },
    {
        name:"Santha",
        marks:97
    },
    {
        name:"Hema",
        marks:90
    }
];

arr2.forEach((student) =>{
    console.log(student.marks);
})



//Map
let num=[1,2,3,4];
let double=num.map((el)=>{
    return el*el;
});
console.log(double);

//map-objects
const std=[
    {
        name:"keerthi",
        marks:100
    },
    {
        name:"Santha",
        marks:97
    },
    {
        name:"Hema",
        marks:90
    }
];

let gpa=std.map((el)=>{
    return el.marks/10;
});
console.log(gpa);

//Filter
let nums=[1,2,3,4,5,6,7,8,9,10,13,22];
let even=nums.filter((el)=>(el%2==0));
console.log(even);


//Every
let a=[1,2,3,4];
let b=[2,4,6];
console.log(a.every((el)=>(el%2==0)));
console.log(b.every((el)=>(el%2==0)));


//Some
let c=[1,2,3,4];
let d=[1,3,5];
console.log(c.some((el)=>(el%2==0)));
console.log(d.every((el)=>(el%2==0)));

//Reduce
let e=[1,3,5];
let sum=e.reduce((ans,el)=>(ans+el));
console.log(sum);

//Spread
console.log(..."keerthi");

let array=[1,2,3,4];
console.log(...arr);

let data={
    email:"keertho@gmail.com",
    password:12356
};
let datacopy={...data,id:555};
console.log(datacopy);

//Rest
function sum2(...args){
    return args.reduce((ans,el)=>(ans+el));
}
console.log(sum2(1,4,5,2));