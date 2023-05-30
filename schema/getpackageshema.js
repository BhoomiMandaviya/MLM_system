const mongoose = require("mongoose")
const package = new mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    price:{
        type:Number
    }

})

const packageSchema = mongoose.model("package",package);
module.exports = packageSchema