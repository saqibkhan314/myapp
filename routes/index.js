var express = require('express');
var router = express.Router();
const userModel = require("./users");// what we have exported using mongoose.exports() and users is name of file in which we have written exportd and imported in userModel
router.get('/',function(req,res){
 req.session.anyNameCanBeGiven = true;//it will be until unless server is not reloaded means until we run once again npx nodemon
 res.send("Hello from Saqib khan")
})
router.get('/checkban',function(req,res){
  console.log(req.session);
  console.log("You are ban");
  res.send("You are ban")
  
  
})
router.get('/removeban',function(req,res){
  req.session.destroy( (err) => {
      if (err) {
        throw err;
      }
  } )
  res.send("Ban removed");
  
  
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
  const allUsers=await userModel.find() //.find() => we will get all users from collection and now everything related to userModel is asynchronous
  res.send(allUsers) 
})
router.get("/allusers",async function(req,res){
  const allUsers=await userModel.findOne({username:"saqib"}) //.findOne() => it will give anyone user's data when we will give instruction in the brackets({Objects}).If that user is not present then it will give null
  res.send(allUsers) 
})
router.get("/delete",async function(req,res){
  const deletedUser=await userModel.findOneAndDelete({username:"saqib123"}) //.findOneAndDelete() => it will give anyone user's data when we will give instruction in the brackets({Objects}) and it will delete by itself
  res.send(deletedUser) 
})


router.get('/cookies',function(req,res){
  res.cookie("saqib",20) //res.cookie() method is used to set cookies in the HTTP response that the server sends back to the client.res=> sending some data to browser from server

  //cookie(name,value)

  res.send("Hello from khan")
 })

 router.get('/checkCookies',function(req,res){
  console.log(req.cookies); // here cookies. req=> as we want cookies from browser and into the server
  res.send("cookies sent")

  console.log(req.cookies.saqib); // only 20
  
 })

 router.get('/deletecookies',function(req,res){
  res.clearCookie("saqib") 
  //clearCookie(nameofthecookie) 

  res.send("Cookie deleted")
 })

//this is real one
module.exports = router;
