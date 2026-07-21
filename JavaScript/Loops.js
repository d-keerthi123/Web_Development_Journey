//Print all Odd numbers  from 1-15
for(let i=1;i<=15;i=i+2){
    console.log(i);
}

//Print all even numbers from 2-10
for(let i=2;i<=10;i=i+2){
    console.log(i);
}

//Print multiplication table for 5
for(let i=1;i<=10;i++){
    console.log(i,"x",5,"=",i*5);
}

//while loop
let i=1;
while(i<5){
    console.log(i);
    i++;
}


//Favourite Movie

const favMovie="avatar";
let guess=prompt("Enter the movie name :");
while( (guess != favMovie) && ( guess != "quit")){
    guess=prompt("Wrong guess,enter the movie name :");
    
}
if(guess == favMovie){
    console.log("Congratulations, you guessed it right !!");
}else{
    console.log("You entered quit");
}


//loops with arrays
let f=["mango","apple","banana","jackfruit","watermelon"];
for(let i=0;i<f.length;i++){
    console.log(f[i]);
}


//loops with nested arrays
let n=[[1,2,3],[7,8,5]];
for(let i=0;i<n.length;i++){
    for(let j=0;j<n[i].length;j++){
        console.log(n[i][j]);
    }
}


//for of loop
let fruits=["mango","apple","banana","jackfruit","watermelon"];
for(fruit of fruits){
    console.log(fruit);
}

for(char of "keerthi"){
    console.log(char);
}

//nested for of loop
let heroes=[["ironman","spiderman","thor"],["superman","batman","hulk"]];

for(list of heroes){
    console.log(list);
    for(name of list){
        console.log(name);
    }
}