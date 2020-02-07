//toda la lógica de almacenamiento
//mok es falsear la base de datos, para validar que todo funciona correctamente

const list = []  //guardamos todos los mensajes en ram, puede ser util para manejar sesiones

function addMessage(message){
    list.push(message)
}

function getMessage(){
    return list
}

//exporta funciones
module.exports = {
    add: addMessage,
    list: getMessage
    //get
    //update
    //delete
}