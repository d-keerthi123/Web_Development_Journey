//  let n=5;
//  for(let i=0;i<n;i++){
//     console.log("Hello to :",i);
//  }


// let args=process.argv;

//  for(let i=2;i<args.length;i++){
//     console.log("Hello to :",args[i]);
//  }

const value=require("./math");
console.log(value);

console.log(value.sum(4,5));
console.log(value.mul(4,5));