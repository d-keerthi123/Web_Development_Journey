const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');
const express=require("express");
const app=express();
const path=require("path");

const methodOverride = require("method-override");
app.use(express.urlencoded({extended:true})); //to parse the form data
app.use(methodOverride("_method"));


app.set("view engine","ejs");  //to use EJS as  template engine
app.set("views",path.join(__dirname,"/views"));

const port=8080;


// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'keerthi',
  password:'Naam122##'
});

// let q="INSERT INTO user(id,username,email,password) VALUES(?,?,?,?)"; //single value
// let user=["122","keerthi@123","keerthi22@gmail.com","1234bb"];

let getRandomUser = () =>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
    ];
}

// let q="INSERT INTO user(id,username,email,password) VALUES ?"; //multiple values
// let users=[["1221","keerthi22@123","keerth@gmail.com","12vb"],["1672","hema@123","hema122@gmail.com","hhgah"]];

// let data=[];
// for(let i=0;i<100;i++){
//     data.push(getRandomUser());
// }

// try{
//     // connection.query(q,user,(err, result) =>{
//     connection.query(q,[data],(err, result) =>{
//         if(err) throw err;
//         console.log(result);
//     });
// }
// catch(err){
//     console.log(err);
// }

// connection.end();

// let getRandomUser = () =>{
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
    
//   };
// }

// console.log(getRandomUser());

//Home route
app.get("/",(req,res)=>{
    let q=`SELECT count(*) FROM user`;
    try{
        connection.query(q,(err, result) =>{
            if(err) throw err;
            let count=result[0]["count(*)"];
            // res.send("Success");
            res.render("home.ejs",{count});
        });
    }
    catch(err){
        console.log(err);
        res.send("Some error in database");
    }
   
})

//Show route
app.get("/user",(req,res)=>{
    let q=`SELECT * FROM user`;
    try{
        connection.query(q,(err, result) =>{
            if(err) throw err;
            res.render("show.ejs",{result});
        });
    }
    catch(err){
        console.log(err);
        res.send("Some error in database");
    }
   
})

//Edit route
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;

    let q=`select * from user where id='${id}'`;
    try{
        connection.query(q,(err, result) =>{
            if(err) throw err;

            let user= result[0];
            res.render("edit.ejs",{user});
        });
    }
    catch(err){
        console.log(err);
        res.send("Some error in database");
    }
});


//Update route
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password :formPass,username:newUsername}=req.body;

    let q=`select * from user where id='${id}'`;
    try{
        connection.query(q,(err, result) =>{
            if(err) throw err;

            let user= result[0];
            if(formPass != user.password){
                res.send("Wrong password");
            }
            else{
                let q2=`update user set username='${newUsername}' where id='${id}'`;
                 connection.query(q2,(err, result) =>{
                    if(err) throw err;
                    res.redirect("/user");
                 }
                )
            }
        });
    }
    catch(err){
        console.log(err);
        res.send("Some error in database");
    }
});


//Delete route
app.delete("/user/:id",(req,res)=>{
    let {id}=req.params;

    let q=`delete from user where id=?`;
    try{
        connection.query(q,[id],(err, result) =>{
            if(err) throw err;

            res.redirect("/user");
        });
    }
    catch(err){
        console.log(err);
        res.send("Some error in database");
    }
    
});

//Add user
app.post("/user",(req,res)=>{

    let id = faker.string.uuid();
    let { username, email, password } = req.body;
    let q="insert into user values(?,?,?,?)";
    connection.query(q,[id, username, email, password],(err, result) =>{
            if (err) {
            console.log(err);
            return res.send("Some error in database");
        }

        res.redirect("/user");
    });
});



app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
});