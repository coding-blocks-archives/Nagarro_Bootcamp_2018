const express = require('express')

const server = express()

server.get('/', function(req, res) {
    res.send("HELLO WORLD")
})

server.listen(2000, function () {
    console.log("Server started on http://localhost:2000/")
})