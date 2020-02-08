const mongoose = require('mongoose')
const Schema = mongoose.Schema; //una de las clases que más se van a utilizar

const mySchema = new Schema({  //le indica el tipo de información
    name: String
});

const model = mongoose.model('User', mySchema)  //tabla, esquema

module.exports = model



