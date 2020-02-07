const mongoose = require('mongoose')
const Schema = mongoose.Schema; //una de las clases que más se van a utilizar

const mySchema = new Schema({  //le indica el tipo de información
    user: String,
    message: {
        type: String,
        required: true  //varios filtros
    },
    date: Date
});

const model = mongoose.model('Message', mySchema)  //tabla, esquema

module.exports = model



