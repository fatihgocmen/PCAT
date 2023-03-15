const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);
mongoose.set('autoIndex', false);
mongoose.connect("mongodb://127.0.0.1:27017/pcat-test-db");

const photoScheme = new Schema({
    title: String,
    description: String,
});
photoScheme.set('autoIndex', false);

const photo = mongoose.model('Photo', photoScheme);


photo.create({
    title: 'Photo Title 1',
    description: 'Photo 1 description 1 lorem ipsum'
});
