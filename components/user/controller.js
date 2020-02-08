const store = require('./store')

function addUser(name){

    if(!name){
        //si no necesitamos la promesa completa
        return Promise.reject("Invalid name");
    }

    const user = {
        name,
    }
    return store.add(user)
}

function getUser(name){

    return new Promise((resolve, reject) => {
        resolve(store.get(name)) //si se elimina lo del user se consulta todo

    })

}

module.exports = {
    addUser,
    getUser
}