const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Hello'))
app.use('/home', express.static(__dirname + '/public'))
app.get('/json', (req, res) => res.send({a:10, b: true, c: 'asdsa'}))

app.listen(2323, function () {
    console.log('Server started on http://localhost:2323/')
})