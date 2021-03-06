const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
    userName:String,
    firstName:String,
    lastName:String,
    imageUrl: String,
    poems:[{type:Schema.Types.ObjectId, ref: "rhyme"}]
})

let User = mongoose.model("user", userSchema)

module.exports = User;