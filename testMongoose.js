const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const Plugin = mongoose.model('Plugin', { name: String });

const item = new Plugin({ name: 'Sytrus' });
item.save().then(() => console.log('Синтезатор сохранен'));
