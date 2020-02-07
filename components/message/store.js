//toda la lógica de almacenamiento
//mok es falsear la base de datos, para validar que todo funciona correctamente

//const list = []  //guardamos todos los mensajes en ram, puede ser util para manejar sesiones
//credenciales de conexión de mongo:
//mongodb://user:user1234@localhost:5510/telegram
//'mongodb://localhost:27017/myapp' -> local

const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise  // scoope Global (javascript -nodejs), cuando quieras utilizar cualquier promesa usa esta eso nos dice
db.connect('mongodb://localhost:27017/telegram', {
    useNewUrlParser: true, //evita problemas de compatibilidad
})

console.log("DB conectada con éxito")

function addMessage(message){
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()

}

async function getMessage(){
    //return list
    const messages = await Model.find()
    return messages

}

//exporta funciones
module.exports = {
    add: addMessage,
    list: getMessage
    //get
    //update
    //delete
}