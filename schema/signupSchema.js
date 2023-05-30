const mongoose = require("mongoose")
const signup = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        default:""
    },
    email:{
        type:String,
        required:true,
        default:""
    },
    password:{
        type:String,
        required:true,
        default:""
    },
    money:{
        type:Number,
        default:100
    },
    referalcode:{
        type:String,
        default:''
    },
    userId:{
        type:String,
        default:''
    },
    referaluse:{
        type:String,
        required:true
    },
    n:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
})

const signupSchema = mongoose.model("signup",signup);
module.exports = signupSchema