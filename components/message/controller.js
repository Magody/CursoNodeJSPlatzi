//define lo que sucede con la lógica de negocio

const store = require('./store')

function addMessage(user, message){
    //
    return new Promise((resolve, reject) =>{
        if(!user || !message){
            console.error('messageController: addMessage: No hay usuario o mensaje')
            reject('Datos incorrectos')
            return false
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
    
        //console.log(fullMessage)
        store.add(fullMessage)
        resolve(fullMessage)
    })

    
}

function getMessages(){ // => la funcion interna
    return new Promise((resolve, reject) => {
        resolve(store.list())

    })
}

//exportamos las funciones
module.exports = {
    addMessage,
    getMessages
}