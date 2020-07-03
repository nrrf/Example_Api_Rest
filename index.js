'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')
const Product = require ('./models/product')


const app = express() 
const port = process.env.PORT || 3001
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

/*
app.get('/hola', (req,res) => {
    res.send({message: 'Hola Mundo!'})
})
*/ 
/*
app.get('/hola/:name', (req,res) => {
    res.send({message: `Hola ${req.params.name}!`})
})
*/ 
app.get('/api/product', (req,res) => {
    res.send(200,{products:[]})   // segun http 200 es que es correcto
})

app.get('/api/product/:productId', (req,res) => {
    
})


app.post('/api/product', (req,res) => {
    console.log('POST/Product')
    console.log(req.body)
    let product = new Product() 
    
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, p) => {
        if (err){
            res.status(500).send(`Error al guardar en db ${err}`)
        }
        res.status(200).send({product: p})

    })
})


app.put('/api/product/:productId', (req,res) => {
       // segun http 200 es que es correcto
})

app.delete('/api/product/:productId', (req,res) => {
    
})

mongoose.connect('mongodb://localhost:27017/shop', (err,res) => {//27017 puerto por defecto
    // conexion a la base de datos
    //if(err) throw err
    if (err){
        return console.log('Error al conectar a la base de datos')
    } 
    console.log('Conexion a la base de datos establecida...')
    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})
