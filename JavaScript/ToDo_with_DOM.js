let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete");

    item.appendChild(del);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
})

// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }

ul.addEventListener("click",function(event){
    //event.target is the element that was actually clicked.
    if(event.target.nodeName=="BUTTON"){ //It tells you the HTML tag name of the clicked element.
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})