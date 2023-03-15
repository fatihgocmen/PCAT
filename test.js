const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/pcat-test-db");

const PhotoScheme = new Schema({
    title: String,
    description: String,
});

const Photo = mongoose.model('Photo', PhotoScheme);


Photo.create({
    title: 'Photo Title 1',
    description: 'Photo 1 description 1 lorem ipsum'
});
