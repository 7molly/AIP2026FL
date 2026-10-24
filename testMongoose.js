const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Plugin = require('./models/plugin.js').Plugin;

var plugin = new Plugin({
  title: "Sytrus",
  nick: "sytrus"
});

plugin.save();
