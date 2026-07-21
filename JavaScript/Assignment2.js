// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]
let arr=[7, 9, 0, -2];
console.log(arr.slice(0,3));

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]
let nums=[7, 9, 0, -2];
console.log(nums.slice(-3));

//Qs3. Write a JavaScript program to check whether a string is blank or not.
let str="";
if(str.length==0){
    console.log("blank");
}else{
    console.log("not blank");
}

//Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
let s="Apple";
let index=2;
if(s[index]==s[index].toLowerCase()){
    console.log("yes, character is lowercase");
}else{
    console.log("no,haracter is lowercase");
}

//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string
let a="   hello  ";
console.log(a.trim());

//Qs6. Write a JavaScript program to check if an element exists in an array or not.
let array=[1,2,3,4,6,9];
let element=3;
if(array.indexOf(element) !=-1){
    console.log("Element exists in the array");
}
else{
     console.log("Element doesn't exist in the array");
}