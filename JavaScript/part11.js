// let h1=document.querySelector("h1");

// //callback hell
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

//promises

// function saveToDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     console.log(internetSpeed);
//     if(internetSpeed >=4 ){
//         success();
//     }else{
//         failure();
//     }
    
// }
// saveToDb("Hello, this is keerthi.",()=>{
//     console.log("Success:The data was saved"); 

//     saveToDb("I am a 3rd yr student",()=>{
//         console.log("Success2 :The data2 was saved"); 

//         saveToDb("I am learning Full-Stack Web Development",()=>{
//             console.log("Success3 :The data3 was saved");

//         },()=>{
//              console.log("Failure: Weak Internet ! The data was not saved");
//         })
//     },()=>{
//         console.log("Failure2: Weak Internet ! The data2 was not saved");
//     })
// },()=>{
//     console.log("Failure: Weak Internet ! The data was not saved");
// });

// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         console.log(internetSpeed);
//         if(internetSpeed >=4 ){
//             resolve("Success: data was saved"); //result
//         }else{
//             reject("Failure: weak connection!");//error
//         }
//     });
// }

//then() & catch() methods
// let request=saveToDb("Hello"); //req=promise object
// request.then(()=>{
//     console.log("Promise was resolved");
//     console.log(request);
// })
// .then(()=>{
//     console.log("Promise2 was resolved"); 
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected");
//     console.log(request);
// })

//improved version
// saveToDb("Hello")
// .then(()=>{
//     console.log("Promise was resolved");
//     console.log(request);
//     return saveToDb("Hello world");

// })
// .then(()=>{
//     console.log("Promise2 was resolved"); //promise chaining
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected");
//     console.log(request);
// })

//result /errors in promises
// saveToDb("Hello")
// .then((result)=>{
//     console.log("Result : ",result);
//     console.log("Promise1 was resolved");
//     return saveToDb("Hello world");

// })
// .then((result)=>{
//     console.log("Result : ",result);
//     console.log("Promise2 was resolved");
// })
// .catch((error)=>{
//     console.log("Error : ",error);
//     console.log("Promise was rejected");
    
// })


//callback hell --->promises code

let h1=document.querySelector("h1");

//callback hell
function changeColor(color,delay) {

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        h1.style.color = color;
        resolve("colour changed");
    }, delay);
    });
}
let req=changeColor("red",1000);
console.log(req);

changeColor("red",1000)
.then(()=>{
    console.log("Red color was completed");
    return changeColor("pink",1000);
})
.then(()=>{
    console.log("pink color was completed");
    return changeColor("teal",1000);
})
.then(()=>{
    console.log("Teal color was completed");
})
