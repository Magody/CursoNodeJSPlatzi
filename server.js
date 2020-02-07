const express = require('express');  //librería express
const bodyParser = require("body-parser")
const router = require('./modulo_network/routes')//require('./components/message/network')  //recolecta con export


var app = express();
app.use(bodyParser.json());  //define el tipo de datos a enviar
app.use(bodyParser.urlencoded({extended: false})); //extended para objetos complejos
//app.use(router);
router(app)

//servir estáticos
app.use("/app", express.static('public'));


app.listen(3000);

console.log("La aplicación está escuchando en http://localhost:3000");

