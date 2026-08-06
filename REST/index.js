const express=require("express");
const app=express();
const port=3000;


const path=require("path");// helps you work with file and folder paths in a way that works on every operating system

const { v4 : uuidv4 }=require('uuid');

uuidv4(); // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4'

const methodOverride = require("method-override");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


app.use(methodOverride("_method"));

app.set("view engine","ejs");  //to use EJS as  template engine
app.set("views",path.join(__dirname,"views")); //This tells Express: "The folder containing all my EJS files is the views folder."
app.use(express.static(path.join(__dirname,"public")));//Makes files inside the public folder (CSS, JS, images, etc.) directly accessible to the browser.


let posts=[
    { 
        id:uuidv4(),
        username:"keerthi",
        content:"Hi, this is keerthi.I am a 3rd yr CSE student",
    },
    {
        id:uuidv4(),
        username:"ApnaCollege",
        content:"I love coding!",
    },
    {
        id:uuidv4(),
        username:"Hema",
        content:"Hi all, I got my 1st internship",
    },
];

app.get("/posts",(req,res)=>{
    // res.send("Server is working");
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    // res.send("post req is working");
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    console.log(post);
    res.render("show.ejs",{post});

})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    // console.log(newContent);
    
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    // res.send("req working");
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});

})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts =posts.filter((p)=>id !== p.id);
    //  res.send("delete success");
    res.redirect("/posts");
})
app.listen(port,()=>{
    console.log("Listening to port :3000");
})