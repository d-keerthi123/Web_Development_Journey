let h1=document.querySelector("h1");

//callback hell
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});

//promises

function saveToDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    console.log(internetSpeed);
    if(internetSpeed >=4 ){
        success();
    }else{
        failure();
    }
    
}
saveToDb("Hello, this is keerthi.",()=>{
    console.log("Success:The data was saved"); 

    saveToDb("I am a 3rd yr student",()=>{
        console.log("Success2 :The data2 was saved"); 

        saveToDb("I am learning Full-Stack Web Development",()=>{
            console.log("Success3 :The data3 was saved");
            
        },()=>{
             console.log("Failure: Weak Internet ! The data was not saved");
        })
    },()=>{
        console.log("Failure2: Weak Internet ! The data2 was not saved");
    })
},()=>{
    console.log("Failure: Weak Internet ! The data was not saved");
});