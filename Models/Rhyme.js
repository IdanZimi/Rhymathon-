const mongoose = require("mongoose")
const Schema = mongoose.Schema

let rhymeSchema = new Schema({
    title: String,
    wordSearched:String,
    lyrics:[]
})

let Rhyme = mongoose.model("rhyme", rhymeSchema)

module.exports = Rhyme;