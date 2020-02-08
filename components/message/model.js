const mongoose = require('mongoose')
const Schema = mongoose.Schema; //una de las clases que más se van a utilizar

const mySchema = new Schema({  //le indica el tipo de información
    chat: {
        type: Schema.ObjectId,  //creando relaciones con la otra entidad
        ref: 'Chat',  //Opular: si esto es una referencia a un objeto de datos, inserta toda la información
    },
    user: {
        type: Schema.ObjectId,  //creando relaciones con la otra entidad
        ref: 'User',  //Opular: si esto es una referencia a un objeto de datos, inserta toda la información
    },
    message: {
        type: String,
        required: true  //varios filtros
    },
    date: Date,
    file: String
});

const model = mongoose.model('Message', mySchema)  //tabla, esquema

module.exports = model



