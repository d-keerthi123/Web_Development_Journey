const express=require("express");
const app=express();
// console.dir(app);

let port=3000;


app.get("/",(req,res)=>{
    res.send("Root path")
});

app.get("/contact",(req,res)=>{
    res.send("Contact Us")
});
app.get("/about",(req,res)=>{
    res.send("About page")
});

// Catch-all route (must be last)
// app.use((req, res) => {
//     res.status(404).send("This path doesn't exist");
// });

app.listen(port,()=>{
    console.log(`the app is listening port ${port}`);
})
// app.use((req,res)=>{
//     console.log(req);
//     console.log("req received");
//     res.send("This is a basic response")
// })


//path parameters
app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    // res.send("hello this is keerthi");
    let {username,id}=req.params;
    res.send(`Welcome to ${username} page`);
});

//Query Strings
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("No results");
})