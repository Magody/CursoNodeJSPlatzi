const store = require('./store')

function addChat(users){
    //
    if(!users || !Array.isArray(users)){
        return Promise.reject("invalid user list")
    }
    const chat = {
        users: users,
    }

    //console.log(fullMessage)
    return store.add(chat)
}


function listChats(userId){
    return store.list(userId)
}


module.exports = {
    addChat,
    listChats
}