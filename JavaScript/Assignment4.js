// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

let random=Math.floor(Math.random()*6)+1;
console.log(random);

// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

let car={
    name:"Hundai",
    model:"i10",
    color:"balck"
};
console.log(car.name);

// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

let person={
    name:"keerthi",
    age:20,
    city:"chennai"
};
person.city="New York";
person.country="United States";
console.log(person);