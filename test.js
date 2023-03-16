const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/pcat-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('strictQuery', false);

const PhotoScheme = new Schema({
    title: String,
    description: String,
});

const Photo = mongoose.model('Photo', PhotoScheme);

/* for (let index = 0; index < 5; index++) {
    Photo.create({
        title: 'Photo Title ' + index,
        description: 'Photo description ' + index + ' lorem ipsum'
    });
} */

/* 
Photo.find({}, (err, data) => {
    console.log(data);
}) 
*/
const id = "6411d98bd38d56f220e7d4b9";
Photo.findByIdAndUpdate(
    id, {
    title: 'Photo title 0 updated',
    description: 'Photo descritption 0 updated',
}, {
    new: true
}, (err, data) => {
    console.log(data);
}
)