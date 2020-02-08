//toda la lógica de almacenamiento
//mok es falsear la base de datos, para validar que todo funciona correctamente

//const list = []  //guardamos todos los mensajes en ram, puede ser util para manejar sesiones
//credenciales de conexión de mongo:
//mongodb://user:user1234@localhost:5510/telegram
//'mongodb://localhost:27017/myapp' -> local

const Model = require('./model')



function addChat(chat){
    // list.push(message)
    const myChat = new Model(chat)
    return myChat.save()
    
}

function listChats(userId){
    //return list

    return new Promise((resolve, reject) =>{
        let filter = {}

        if(userId != null){
            filter = {users: userId}
        }
        
        Model.find(filter)
            .populate('users')  //busca los object id y los carga
            .exec((error, populatedData) => {

                if(error){
                    reject(error)
                    return false
                }

                resolve(populatedData)
            })
            
    })

   

}

//exporta funciones
module.exports = {
    add: addChat,
    list: listChats,
}