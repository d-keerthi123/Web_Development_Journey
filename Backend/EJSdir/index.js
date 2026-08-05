const express=require("express");
const app=express();

const path=require("path");

const port=3000;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    // res.send("This is root");
    res.render("home.ejs");  //express will go and check for home.ejs file in views dir by default
})

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
})

app.get("/ig/:username",(req,res)=>{
    // const followers=["hema","anu","sai","ram","rahul","abi"];
    // let {username}=req.params;
    // console.log(username);
    // res.render("insta.ejs",{username,followers});

    const instaData=require("./data.json");
    let {username}=req.params;
    // console.log(instaData);

    const data=instaData[username];
    console.log(data);
    if(data){
        res.render("insta.ejs",{data});
    }else{
        res.render("error.ejs");
    }
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})