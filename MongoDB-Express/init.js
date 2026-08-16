// getting-started.js
const mongoose = require('mongoose');
const Chat=require("./models/chat.js");


main().then((result)=>{
    console.log("Connection successful !")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let chats=[
{
    from:"neha",
    to:"keerthi",
    msg:"Can you send me today's maths notes?",
    created_at:new Date()
},
{
    from:"neha",
    to:"rahul",
    msg:"Hi,how are you?",
    created_at:new Date()
},
{
    from:"hema",
    to:"keerthi",
    msg:"hello",
    created_at:new Date()
},
{
    from:"keerthi",
    to:"loki",
    msg:"what are you doing?",
    created_at:new Date()
},
{
    from:"anu",
    to:"santha",
    msg:"Can meet today?",
    created_at:new Date()
}]
Chat.insertMany(chats);
