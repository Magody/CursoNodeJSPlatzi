//toda la lógica de almacenamiento
//mok es falsear la base de datos, para validar que todo funciona correctamente

//const list = []  //guardamos todos los mensajes en ram, puede ser util para manejar sesiones
//credenciales de conexión de mongo:
//mongodb://user:user1234@localhost:5510/telegram
//'mongodb://localhost:27017/myapp' -> local

const Model = require('./model')



function addMessage(message){
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()

}

function getMessage(chat){
    //return list

    return new Promise((resolve, reject) =>{
        let filter = {}

        if(chat != null){
            filter = {chat: chat}
        }
        
        Model.find(filter)
            .populate('user')  //busca los object id y los carga
            .exec((error, populatedData) => {

                if(error){
                    reject(error)
                    return false
                }

                resolve(populatedData)
            })
            
    })

   

}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        "_id": id //se puede investigar dentro de mongoDB
    })

    console.log("\n")
    console.log(foundMessage)
    foundMessage.message = message // Podemos usar el update de mongo?
    const newMessage = await foundMessage.save()
    return newMessage
}


function deleteMessage(id){
    return Model.deleteOne({"_id":id})
}

//exporta funciones
module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: deleteMessage
    //get
    //update
    //delete
}