//recibe la petición http y enviarla al controlador, todo lo que salga de aqui no le corresponde
const express = require('express');  //librería express


const controller = require('./controller')

const router = express.Router();  //permite separar cabeceras, métodos, por url, etc

const res = require("../../modulo_network/response")



router.get("/", function(request, response){
    controller.getMessages()
        .then((messageList) =>{
            console.log(messageList)
            res.success(request, response, messageList, 200)

        })
        .catch(e => {
            res.error(request, response, "Unexpected Error", 500, e)
        })
});

router.post("/", function(request, response){
    //response.send("Hola desde post. Mensaje Añadido")
    

    //por la promesa
    controller.addMessage(request.body.user, request.body.message)
        .then((fullMessage) =>{
            res.success(request, response, fullMessage, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Información inválida", 400, "Error en el logueado")

        })


    console.log(request.query)

});

router.delete("/", function(request, response){
    
    console.log(request.query); //para el url encoded, localhost:3000/message?order=hola
    console.log(request.body); //aqui se encuentra el body
    
    //no se debe devolver nada (vacio)
    //el url debe tener un parámetro text encoded
    //response.send(request.body.text + " desde delete. Mensaje Eliminado")
    //response.status(201).send()  // estado personalizado
    //response.status(201).send({"error": "", "body": "Creado correctamente"}) 
    //response.status(201).send([{"error": "", "body": "Creado correctamente"}]) 

    res.success(request, response, "Deleted")  //mejor manera de contestar, parametriza todo esto

});



module.exports = router  // nos traemos esas rutas y las lleva al router