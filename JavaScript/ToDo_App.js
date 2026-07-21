let todo=[];
let req=prompt("Enter a request");

while(true){
    if(req =="quit"){
        console.log("Quiting the app ....");
        break;
    }

    if(req =="list"){
        console.log("-------------------------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------------------------------");
    }

    else if(req =="add"){
        let task=prompt("Enter the new task");
        todo.push(task);
        console.log("task added...");
    }

    else if(req =="delete"){
        let index=prompt("enter the index of the task you wanna delete");
        todo.splice(index,1);
        console.log("task deleted...");
    }

    req=prompt("Enter a request");

}