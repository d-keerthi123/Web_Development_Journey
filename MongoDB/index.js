// getting-started.js
const mongoose = require('mongoose');

main().then((result)=>{
    console.log("Connection successful!")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})
const User=mongoose.model("User",userSchema);

//insert one
const user1=new User({name:"keerthi",email:"keerthi123@gmail.com",age:20});
user1.save();

//insert many
User.insertMany([{name:"anu",email:"anu123@gmail.com",age:17},
    {name:"hema",email:"hema@gmail.com",age:18},
    {name:"santha",email:"san@gmail.com",age:19}
]);