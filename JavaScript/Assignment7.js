// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
let arr=[1,2,3,4];

let sq=arr.map((el)=>(el*el));
console.log(sq);

let sum=arr.reduce((ans,el)=>(ans+el));
console.log(sum);

let avg=sum/arr.length;
console.log(avg);

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.
let array=[1,2,3,4];

let newArr=array.map((el)=>(el+5));
console.log(newArr);

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

let a=["hello","world !","this ","is" ,"keerthi"];

let newArr2=a.map((el)=>(el.toUpperCase()));
console.log(newArr2);


//Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.


// const doubleAndReturnArgs=(arr1,...args)=>{  //arrow function
//    return [...arr1,...args.map((el)=>(el*2))];
// };

//or  normal function
// function doubleAndReturnArgs(arr1, ...args) {
//     return [...arr1, ...args.map(el => el * 2)];
// }


//or arrow function with implicit return
const doubleAndReturnArgs = (arr1, ...args) =>
    [...arr1, ...args.map(el => el * 2)];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2], 10, 4));; //[2,20,8]


//Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object

function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
};
console.log(mergeObjects({1:"hello",2:"world"},{a:1,b:2}));