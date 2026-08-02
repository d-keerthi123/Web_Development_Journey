// let url="https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         return "NO fact found!"
//     }
// }
// getFacts();

// let btn=document.querySelector("button");

// btn.addEventListener("click",async ()=>{
//     let fact= await getFacts();
//     console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// })


//Activity using query strings
let url2="https://universities.hipolabs.com/search?country=India";
// let country="India";


async function getColleges(state){
    try{
        // let res=await axios.get(url2+country);
        let res=await axios.get(url2);
        // return res.data;
        let colleges = res.data.filter((clg) => {
    return (
        clg["state-province"] &&
        clg["state-province"].toLowerCase() === state.toLowerCase()
    );
});
    return colleges; 
    }catch(e){
        console.log(e);
        return [];
    }
}


let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    // let country=document.querySelector("input").value;
    // console.log(country);

    let state=document.querySelector("input").value;
    console.log(state);

    let clgs= await getColleges(state);
    show(clgs);
})

function show(clgs){
    let list=document.querySelector("#output"); //ul
    list.innerText="";

    for(clg of clgs){
        console.log(clg.name);

        let li=document.createElement("li");
        li.innerText=clg.name;
        list.appendChild(li);
    }
}