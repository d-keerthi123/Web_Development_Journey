let delBtns=document.querySelector(".delete");

for(let delBtn of delBtns){
    delBtns.addEventListeners("click",(event)=>{
    let answer = confirm("Are you sure you want to delete?");

    if(!answer){
        event.preventDefault();
    }
});
}