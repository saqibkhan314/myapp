const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myappstorage")//it says node plz connect ho through mongodb se....kyse 127.0.0.1 mah server chl rha h aur uska port h 27017


//schema created
const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})