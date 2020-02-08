//recibe la petición http y enviarla al controlador, todo lo que salga de aqui no le corresponde
const express = require('express');  //librería express
const multer = require('multer')  // archivos multipart form

const controller = require('./controller')

const router = express.Router();  //permite separar cabeceras, métodos, por url, etc

const res = require("../../modulo_network/response")


const upload = multer({
    dest: 'public/files/', //lugar en donde guardará los archivos
})

router.get("/", function(request, response){
    
    //localhost:3000/message?chat=dddddd
    const filteredQuery = request.query.chat || null  //valor null por defecto
    
    controller.getMessages(filteredQuery)
        .then((messageList) =>{
            console.log(messageList)
            res.success(request, response, messageList, 200)

        })
        .catch(e => {
            res.error(request, response, "Unexpected Error", 500, e)
        })
});

router.post("/", upload.single('file'), function(request, response){
    //response.send("Hola desde post. Mensaje Añadido")
    
    console.log(request.file)

    //por la promesa
    controller.addMessage(request.body.chat, request.body.user, request.body.message, request.file)
        .then((fullMessage) =>{
            res.success(request, response, fullMessage, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Información inválida", 400, "Error en el logueado")

        })


    console.log(request.query)

});

//patch para modificar parcialmente
router.patch('/:id', function(request, response){
    // localhost:3000/message/5e3df1a08b08cf2f7375a47b  aquí apunta el insomnia
    
    console.log(request.params.id);

    controller.updateMessage(request.params.id, request.body.message)
        .then((data) => {
            res.success(request, response, data, 200)
        })
        .catch(e => {
            res.error(request, response, "Error interno", 500, e)
        })
    //response.send('OK')
})

router.delete("/:id", function(request, response){
    
    //console.log(request.query); //para el url encoded, localhost:3000/message?order=hola
    //console.log(request.body); //aqui se encuentra el body
    
    //no se debe devolver nada (vacio)
    //el url debe tener un parámetro text encoded
    //response.send(request.body.text + " desde delete. Mensaje Eliminado")
    //response.status(201).send()  // estado personalizado
    //response.status(201).send({"error": "", "body": "Creado correctamente"}) 
    //response.status(201).send([{"error": "", "body": "Creado correctamente"}]) 

    //res.success(request, response, "Deleted")  //mejor manera de contestar, parametriza todo esto



    //la id se puede tomar rde request.params
    //localhost:3000/message/5e3df830363a913324bc9eef
    controller.deleteMessage(request.params.id)
        .then(()=>{
            res.success(request, response, `Usuario ${request.params.id} eliminado`, 200)
        })
        .catch(e => {
            res.error(request, response, "Error interno", 500, e)
        })

});



module.exports = router  // nos traemos esas rutas y las lleva al router