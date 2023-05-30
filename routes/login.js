const express= require("express");
const router = express.Router();
const signup = require("../schema/signupSchema")

router.get("/",async(req,res)=>{
        const data = await signup.findOne({"username":req.query.username,"password":req.query.password})

    try {
        res.status(200).json({
            status:true,
            data:data,
            message:"login successfull"
        })
    }
 catch (error) {
        res.status(200).json({
            status:false,
            message:"user not found"
        })
    }
})

module.exports =router