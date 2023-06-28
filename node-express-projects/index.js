const express  = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let favbooks=[{ title : "Peace and war"}]
app.get('/', (req, res)=>{
    res.send("Hello World")
});

app.get('/books', (req, res)=>{
    res.json(favbooks)
})
app.post('/addbook', (req, res)=>{
    const book = req.body;
    console.log(book)
    favbooks.push(book)
    res.send("Your book has been added")
})

app.listen(port, ()=>{
    console.log(`App listening in port ${port}`)
})

