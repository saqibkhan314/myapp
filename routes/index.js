var express = require('express');
var router = express.Router();
const userModel = require("./users");// what we have exported using mongoose.exports() and users is name of file in which we have written exportd and imported in userModel
router.get('/',function(req,res){
  res.send("hello saqib khan")
})
router.get('/create',async function(req,res){
  //now we have to write tha data of schema what we have created.
  const createdUser= await userModel.create({
    username: "Saqib123",
    name: "Saqib khan",
    age: 20
  }) // now it has one problem it is asynchronous means it will work later when the all synchronous code will finished executing after that only this will start ex:-res.send("profile created") => this will work first.Here always an object goes.IF WE WANT THIS CODE to execute 1st use "await" and this await will not work alone it will all ways work with "async" and this async will be written before the parent function of await
  //this "create" will return so we store in variable
  res.send(createdUser);
  // createdUser.save();

})

router.get("/allusers",async function(req,res){
  const allUsers=await userModel.find() //.find() => we will get all users and it is also aynchronous 
})

//this is real one
module.exports = router;
