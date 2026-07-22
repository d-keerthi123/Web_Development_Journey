// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr=[1, 2, 3, 4, 5, 6, 2, 3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i, 1);
    }
}
console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

let number=287152;
let count=0;

while (number > 0) {
    number = Math.floor(number / 10);
    count++;
}

console.log(count);

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let numbers=287152;
let sum=0;

while (numbers > 0) {
    digit=numbers%10;
    sum+=digit;
    numbers = Math.floor(numbers / 10);
}

console.log(sum);

//Qs4. Print the factorial of a number n.

let a=3;
let fact=1;

for(let i=1;i<=a;i++){
    fact=fact*i;
}
console.log(fact);

//Qs5. Find the largest number in an array with only positive numbers

let b=[2,5,6,5,8];
let largest=0;

for(let i=0;i<b.length;i++){
    if(b[i]>largest){
        largest=b[i];
    }
}
console.log(largest);