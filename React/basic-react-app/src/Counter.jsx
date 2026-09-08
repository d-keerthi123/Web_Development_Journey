import {useState} from "react";

export default function Counter(){
    const [count,setCount]=useState(0);

    // let incCount=()=>{
    //     setCount(count+1);
    //     console.log(count);
    // }

    //callbacks in setCount 
    let incCount=()=>{
        setCount((currVal)=>{
            return currVal+1;
        });
        setCount((currVal)=>{
            return currVal+1;
        });
    }
    return(
        <>
        <h3>Count:{count}</h3>
        <button onClick={incCount}>Increase Count</button>
        </>
    )
}