const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");

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
        // res.send("Access Denied !!");
        //throw new Error("Access Denied");
        throw new ExpressError(401,"Access Denied");
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

app.get("/err",(req,res)=>{
    abc=abc;
});

// //Error handling Middlewares
// app.use((err,req,res,next)=>{
//     console.log("------Error------");
//     next(err);
// })

//create a admin route and send an error with a 403 status code
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access Forbidden");
})
//Default status and message

app.use((err,req,res,next)=>{
    let {status,message}=err;
    res.status(status).send(message);
})


// app.use((req,res)=>{
//     res.status(404).send("PAGE NOT FOUND!!");
// })

app.listen(8080,()=>{
    console.log("Server is listening !");
});