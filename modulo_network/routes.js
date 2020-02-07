const express = require('express')
const message = require('../components/message/network')
const routes = function (server) {
    server.use("/message", message)  //todas las llamadas a message lo maneja message
}

//cada ves que llame a message va a llamar al componente de message por lo que se puede quitar eso de la primera parte de get y post -> /message qued como /
module.exports = routes