
function clicked(){
    console.log("Clicked");
}
function onHover(){
    console.log("Hover");
}
function handleDoubleClick(){
    console.log("double clicked");
}


export default function Button(){
    return(
        <div>
            <button onClick={clicked}>Click me</button>
            <button onDoubleClick={handleDoubleClick}>Click me</button>
            <button onMouseOver={onHover}>Click me</button>
        </div>
    )
}