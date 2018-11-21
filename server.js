const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const mongoose = require ("mongoose")
const path = require('path')

mongoose.connect(process.env.CONNECTION_STRING||"mongodb://rhymathon:Aa123456@ds131983.mlab.com:31983/rhymathon")

app.use(express.static("build"))
app.use(express.static("public"))

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

let userApi = require("./Api/userApi") 
app.use("/userData", userApi)

app.get("*" , function(req,res){
    res.sendFile(path.join(__dirname, '/build/index.html'))
})

app.listen(process.env.PORT || '4000');

