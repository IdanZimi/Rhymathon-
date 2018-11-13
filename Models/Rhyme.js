const mongoose = require("mongoose")
const Schema = mongoose.Schema

let rhymeSchema = new Schema({
    name: String,
    line1: String,
    line2: String,
    line3: String,
    line4: String
})

let Rhyme = mongoose.model("rhyme", rhymeSchema)

module.exports = Rhyme;