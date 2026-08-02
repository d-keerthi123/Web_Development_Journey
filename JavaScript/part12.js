//Async function
// async function greet(success){
//     if(success){
//          return "hello"; //returns a promise
//     }
//     throw "404 Page not found ";
// }
// greet(false)
// .then((result)=>{
//     console.log("Promise was resolved");
//     console.log("Result :",result);
// })
// .catch((error)=>{
//     console.log("Promise was rejected");
//     console.log("Error :",error);
// })

// let demo= async ()=>{
//     return 5; //returns promise
// }

//Await keyword &handling rejections

let h1=document.querySelector("h1");

function changeColor(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        h1.style.color = color;
        let num=Math.floor(Math.random()*10)+1;
        if(num>5){
            reject("Promise rejected");
        }
        resolve("colour changed");
    }, delay);
    });
}

async function demo2(){
    try{
        await changeColor("pink",1000);
        await changeColor("yellow",1000);
        await changeColor("orange",1000);
        await changeColor("red",1000);

    }catch(error){
        console.log("Error caugth");
        console.log(error);
    }
    console.log("This is the demo for await keyword and handling rejections");
}
demo2();
