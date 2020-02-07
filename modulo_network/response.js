exports.success = function(request, response, message, status){
    //
    //response.send(message)

    response.status(status || 200).send({
        error: '',
        body: message
    })


}

exports.error = function(request, response, message, status, log){
    //
    console.log(log)
    response.status(status || 500).send({
        error: message,
        body: ''
    })
}