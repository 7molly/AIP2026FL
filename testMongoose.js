const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String });

schema.methods.play = function() {
  console.log(this.name + " воспроизводит звук на частоте 440 Hz (Нота A4)");
};

const Plugin = mongoose.model('Plugin', schema);

const item = new Plugin({ name: 'Sytrus' });
item.save().then(() => item.play());
