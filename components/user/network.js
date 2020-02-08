const express = require('express');  //librería express


const controller = require('./controller')

const router = express.Router();  //permite separar cabeceras, métodos, por url, etc

const res = require("../../modulo_network/response")


router.get("/", function(request, response){

    //localhost:3000/user?name=Juan
    const filteredQuery = request.query.name || null
    controller.getUser(filteredQuery)
        .then((fullUser)=>{
            res.success(request, response, fullUser, 200)
        })
        .catch(e => {
            res.error(request, response, "Error interno", 500, e)
        })
})

router.post('/', function(request, response){
    controller.addUser(request.body.name)
        .then((data)=>{
            res.success(request, response, data, 201)
        })
        .catch(e => {
            res.error(request, response, "Error interno", 500, e)
        })
})

module.exports = router