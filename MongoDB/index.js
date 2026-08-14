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
// user1.save();

// insert many
// User.insertMany([{name:"anu",email:"anu123@gmail.com",age:17},
//     {name:"hema",email:"hema@gmail.com",age:18},
//     {name:"santha",email:"san@gmail.com",age:19}
// ]);

//find
// User.find({}).then((data)=>{
//     console.log(data);
// });

//update one
// User.updateOne({name:"keerthi"},{age:23}).then((data)=>{
//     console.log(data);
// })

//update many
// User.updateMany({age:{$gt:15}},{age:44}).then((data)=>{
//     console.log(data);
// })

//find and update
// User.findOneAndUpdate({name:"anu"},{age:66},{new:true}).then((data)=>{
//     console.log(data);
// })

//delete many
// User.deleteMany({name:"keerthi"}).then((data)=>{
//     console.log(data);
// })

// User.deleteMany({age:{$gt:20}}).then((data)=>{
//     console.log(data);
// })

//find one and delete
User.findOneAndDelete({name:"anu"}).then((data)=>{
    console.log(data);
})



