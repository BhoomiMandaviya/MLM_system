const mongoose = require("mongoose")
const history = new mongoose.Schema({
    userId:{
        type:String,
        default:""
    },
    packageId:{
        type:String,
    },
    amount:{
        type:Number
    },
    status:{
        type:Object
    },
    rewardedby:{
        type:String
    }

},
{
    timestamps:true
})

const historySchema = mongoose.model("history",history);
module.exports = historySchema