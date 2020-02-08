//define lo que sucede con la lógica de negocio

const store = require('./store')

const socket = require("../../socket").socket  //evita traer el connect

const config = require("../../config")

function addMessage(chat, user, message, file){
    //
    return new Promise((resolve, reject) =>{
        if(!user || !message){
            console.error('messageController: addMessage: No hay usuario o mensaje')
            reject('Datos incorrectos')
            return false
        }

        let fileUrl = ''
        if(file){
            fileUrl = config.host+':'+ config.port + config.publicRoute + config.files + '/'+file.filename
        }
        //para poder descargar el archivo



        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
        }
    
        //console.log(fullMessage)
        store.add(fullMessage)


        socket.io.emit("mensaje", fullMessage)


        resolve(fullMessage)
    })

    
}

function getMessages(chat){ // => la funcion interna
    return new Promise((resolve, reject) => {
        resolve(store.list(chat)) //si se elimina lo del user se consulta todo

    })
}

function updateMessage(id, message){ // => la funcion interna
    return new Promise( async (resolve, reject) => {

        if(!id || !message)
        {
            reject("Datos inválidos")
            return false
        }

        const result = await store.updateText(id, message)
        resolve(result)

    })
}

function deleteMessage(id){ // => la funcion interna
    return new Promise( (resolve, reject) => {

        if(!id){
            reject("Id inválido")
            return false
        }

        store.remove(id)
            .then(()=>{
                resolve("Correcto")
            })
            .catch(e => {
                reject(e)
            })


    })
}



//exportamos las funciones
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}