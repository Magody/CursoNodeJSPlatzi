const Model = require('./model')

function addUser(user){
    const myUser = new Model(user)
    return myUser.save()  //save es una promesa
}

async function getUser(name){
    //return list
    let filter = {}

    if(name != null){
        filter = {name: name}
    }
    const users = await Model.find(filter)
    return users
}

//exporta funciones
module.exports = {
    add: addUser,
    get: getUser
}