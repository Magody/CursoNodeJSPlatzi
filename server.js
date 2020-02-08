const express = require('express');  //librería express

const app = express();

const server = require('http').Server(app) // para los web sockets

const cors = require('cors') //permitir accesos

const bodyParser = require("body-parser")

const socket = require('./socket')


const db = require('./db')

const router = require('./modulo_network/routes')//require('./components/message/network')  //recolecta con export


const config = require("./config")

db(config.dbUrl)



app.use(cors())


app.use(bodyParser.json());  //define el tipo de datos a enviar
app.use(bodyParser.urlencoded({extended: false})); //extended para objetos complejos
//app.use(router);


socket.connect(server)  // servidor de sockets conectado
router(app)

//servir estáticos
app.use(config.publicRoute, express.static('public'));


//app.listen(3001);
express().listen(3000)

server.listen(config.port, function(){  //http://localhost:3003/app/socket.html
    console.log("La aplicación está escuchando")
})

console.log("La aplicación está escuchando en " + config.host + ":" + config.port);

