const mongoose = require("mongoose")
require("../schema/getpackageshema")
require("../schema/signupSchema")
require("../schema/historyschema")


mongoose.connect('mongodb://127.0.0.1:27017/BinaryTree').then(()=>{
    console.log("connected")
})