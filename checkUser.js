var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/flstudio2026");
var User = require("./models/user.js").User;

var first_user = new User({
  username: "Vasya",
  password: "qwerty"
});

first_user.save();
