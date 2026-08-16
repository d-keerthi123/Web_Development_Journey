const express=require("express");
const app=express();
const path=require("path");
const Chat=require("./models/chat.js");

app.set("view engine","ejs");  //to use EJS as template engine
app.set("views",path.join(__dirname,"views")); //This tells Express: "The folder containing all my EJS files is the views folder."
app.use(express.static(path.join(__dirname,"public")));

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:true})); //to parse
// getting-started.js
const mongoose = require('mongoose');

main().then((result)=>{
    console.log("Connection successful !")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let chat1=new Chat({
    from:"neha",
    to:"keerthi",
    msg:"Can you send me today's maths notes?",
    created_at:new Date()
});
// chat1.save().then((result)=>{
//     console.log(result);
// });

//index route
app.get("/chats",async (req,res)=>{
    let chats=await Chat.find();
    console.log(chats);
    // res.send("Index route is working");
    res.render("index.ejs",{chats});
});

//new route
app.get("/chats/new",async (req,res)=>{
    res.render("new.ejs");
});

//create route
app.post("/chats",async (req,res)=>{
   let {from,to,msg}=req.body;
   let newChat=new Chat({
    from:from,
    to:to,
    msg:msg,
    created_at:new Date(),
   });

//    console.log(newChat);
newChat.save().then((res)=>{
    console.log("Chat was saved")
}).catch((err)=>{
    console.log(err);
})
//    res.send("working");
res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

//update route
app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true, new:true});
    console.log(updatedChat);
    res.redirect("/chats");
})

//delete route
app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let DeletedChat= await Chat.findByIdAndDelete(id);
    console.log(DeletedChat);
    res.redirect("/chats");
})


app.get("/",(req,res)=>{
    res.send("Root is working!");
})
app.listen(8080,()=>{
    console.log("Server is listening on the port 8080");
});