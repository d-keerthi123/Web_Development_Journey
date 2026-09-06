const express=require("express");
const app=express();
const session=require("express-session");
const flash=require("connect-flash");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOptions={
    secret:"mysecret", 
    resave:false,
    saveUninitialized:true
};

app.use(session(sessionOptions));
app.use(flash());

// app.get("/test",(req,res)=>{
//     res.send("Test successfully!");
// })

// app.get("/reqCount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1;
//     }
//     res.send(`Request Count is ${req.session.count}`);
// })


//storing and using info
app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    if(name == "anonymous"){
        req.flash("error","user  not registered !");
    }else{
        req.flash("success","user registered successfully!");
    }
    // res.send(`Welcome, ${name} !`);
    res.redirect("/hello");
})

app.get("/hello",(req,res)=>{
    // res.send(`Hello ,${req.session.name}`);

    res.locals.successMessage=req.flash("success");
    res.locals.errorMessage=req.flash("error");
    res.render("page.ejs",{name: req.session.name});
})

app.listen(3000,()=>{
    console.log("Server is listening to port 3000");
})