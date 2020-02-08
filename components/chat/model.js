const mongoose = require('mongoose')
const Schema = mongoose.Schema; //una de las clases que más se van a utilizar

const mySchema = new Schema({  //le indica el tipo de información
    users: [{ //una lista para el chat
        type: Schema.ObjectId,  //creando relaciones con la otra entidad
        ref: 'User',  //Opular: si esto es una referencia a un objeto de datos, inserta toda la información
    }
]
});

const model = mongoose.model('Chat', mySchema)  //tabla, esquema

module.exports = model



