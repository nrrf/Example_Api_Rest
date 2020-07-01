'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express() 
const port = process.env.PORT || 3001
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/hola', (req,res) => {
    res.send({message: 'Hola Mundo!'})
})

app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
})



/*
const http = require('http'); 
const server = http.createServer(function(req,res){
    //res.writeHead(200,{'content-type' : 'text/plain'});
    //res.end("hola mundo");
    
    res.end('Hola mundo');
});
server.listen(3000,()=>{
    console.log('server on port 3000')
});
*/