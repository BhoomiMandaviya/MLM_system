const signup = require("../schema/signupSchema")
const history = require("../schema/historyschema")
const referalcodefunction = require("../utility/referalcodefunction")
const useridfunction= require("../utility/useridfunction")
var extend = require('util')._extend

exports.getdata =async(req,res)=>{
    try {
        const data = await signup.find();
    res.status(200).json({
        status:true,
        data:data,
        message:"data got successfully"
    })
    } catch (error) {
        res.status(500).json({
            status:false,
            data:"",
            message:"data not got"
        })
    }
}


exports.adddata =async(req,res)=>{
    try {
        const ref = await signup.findOne({"referalcode":req.body.referaluse})
        let id = useridfunction.userId(ref.userId,ref.n)
        req.body.userId = id
        req.body.referalcode=referalcodefunction.random()
        const data = await signup.create(req.body);
        console.log(data)
        const h = {
            userId:id,
            amount:100,
            status:{"status":1,"credit":100},
        }
        const historydata = await history.create(h)

    res.status(200).json({
        status:true,
        data:data,
        message:"data added successfully"
    })
    } catch (error) {
        res.status(500).json({
            status:false,
            data:"",
            message:"data not added"
        })
    }
}

exports.updaten =async(req,res)=>{
    try {
        // const ref = await signup.findOne({"referalcode":req.body.referaluse})
        // console.log(ref)
        // let add = ref.n+1
        // console.log(add)
        let data = await signup.findOneAndUpdate({"referalcode":req.body.referaluse},{$inc:{"n":1}})
      console.log(data)
    res.status(200).json({
        status:true,
        data:data,
    })
    } catch (error) {
        res.status(500).json({
            status:false,
            data:"",
            message:"invalid referencecode"
        })
    }
}

