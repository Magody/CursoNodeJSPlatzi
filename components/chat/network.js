const express = require('express');  //librería express


const controller = require('./controller')

const router = express.Router();  //permite separar cabeceras, métodos, por url, etc

const res = require("../../modulo_network/response")




router.post("/", function(request, response){
    //response.send("Hola desde post. Mensaje Añadido")
    

    //por la promesa
    controller.addChat(request.body.users)
        .then((data) =>{
            res.success(request, response, data, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Error interno", 500, e)

        })



});

//5e3dff11c26653372aee4696 5e3e01531038ba3829a75831

router.get("/:userId", function(request, response){
    //solo trae los chats de un usuario

    console.log(request.body)
    controller.listChats(request.params.userId)
        .then((users) =>{
            console.log(users)
            res.success(request, response, users, 200)

        })
        .catch(e => {
            res.error(request, response, "Unexpected Error", 500, e)
        })
});


module.exports = router

