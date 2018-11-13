const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost/rhymeDB", function(){
    console.log("Connected")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static("node_modules"))


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

let rhymeApi = require("./Api/rhymeApi") 
app.use("/rhymeData", rhymeApi)

app.listen(4000)
