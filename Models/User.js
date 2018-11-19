const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
    userName:String,
    firstName:String,
    lastName:String,
    poems:[{type:Schema.Types.ObjectId, ref: "rhyme"}]
})

//add id of poem when saving poem

let User = mongoose.model("user", userSchema)

module.exports = User;