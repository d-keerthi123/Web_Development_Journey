const express=require("express");
const app=express();

//Middlewares
// app.use(()=>{
//     console.log("hi ,I am a middleware");
// });

// app.use((req,res)=>{
//     console.log("hi ,I am a middleware");
//     res.send("Middleware finished!!");
// });

//utility middleware-logger
// app.use((req,res,next)=>{
//     req.responseTime=new Date(Date.now()).toString();
//     console.log(req.method,req.path,req.responseTime,req.hostname);
//     next();
// });

app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token === "giveaccess"){
        next();
    }else{
        res.send("Access Denied !!");
    }
})
app.get("/api",(req,res)=>{
    res.send("Some data");
})

app.get("/",(req,res)=>{
    res.send("This is a root");
});

app.get("/random",(req,res)=>{
    res.send("This is a random root");
});

app.listen(8080,()=>{
    console.log("Server is listening !");
});