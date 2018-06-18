const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let obj = {a:10, b: true, c: 'asdsa'}

app.get('/', (req, res) => {
    console.log(req.query)
    res.send('Hello ' + req.query.person)
})
app.use('/home', express.static(__dirname + '/public'))
app.get('/json', (req, res) => res.send(obj))
app.post('/json', (req, res) => {
    for (key in req.body) {
        obj[key] = req.body[key]
    }
    res.send(obj)
})

app.listen(2323, function () {
    console.log('Server started on http://localhost:2323/')
})