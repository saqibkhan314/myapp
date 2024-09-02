var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.send("hello saqib khan")
})
//this is real one
module.exports = router;
