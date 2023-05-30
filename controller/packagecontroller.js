const signup = require("../schema/signupSchema")
const history = require("../schema/historyschema")
const package = require("../schema/getpackageshema")

exports.price =async(req,res)=>{
    try {     
        if(req.body.userId!='A1'){
            const child = await signup.findOne({"userId":req.body.userId})  

        let packagedata = await package.findOne({"_id":req.body.package})    

        let childmoney = child.money-packagedata.price;

        let data = await signup.findOneAndUpdate({"userId":req.body.userId},{$set:{"money":childmoney}})

        const parent = await signup.findOne({"referalcode":child.referaluse})

        let p = (packagedata.price*2)/100

        let parentmoney = parent.money + p;

        let data1 =await signup.findOneAndUpdate({"referalcode":child.referaluse},{$set:{"money":parentmoney}})

        await history.create({
            userId:child.userId,
            purchaseId:packagedata._id,
            amount:childmoney,
            status:{"status":2,"debit":packagedata.price}
        })

        await history.create({
            userId:parent.userId,
            purchaseId:packagedata._id,
            amount:parentmoney,
            status:{"status":3,"credit":p},
            rewardedby:child.userId
        })
        }
        else{
            const child = await signup.findOne({"userId":req.body.userId})  

            let packagedata = await package.findOne({"_id":req.body.package})    
    
            let childmoney = child.money-packagedata.price;
    
            await signup.findOneAndUpdate({"userId":req.body.userId},{$set:{"money":childmoney}})
    
        }


    res.status(200).json({
        status:true,
        data:"",
        message:"money deducted successfully from user"
    })
    } catch (error) {
        res.status(500).json({
            status:false,
            data:"",
            message:"invalid data.server error"
        })
    }
}

exports.gethistory = async(req,res)=>{
    try {
        const data = await history.find({"userId":req.query.id})
        let names = []
        console.log("data",data)
        
            let datas = []
            // datas = data.map(async(x,i)=>{
            //     if(x.rewardedby){
            //         let n = await signup.findOne({"userId":x.rewardedby});
            //       names.push(n.username)
            //     }
            //     else{
            //         names.push("-")
            //     }
            //     return names
            // })

            // fs

            res.status(200).json({
                status:true,
                data:data,
                names:names,
                message:"data got successfully"
            })
      
    } 
    catch (error) {
        res.status(500).json({
            status:false,
            data:'',
            message:"server error"
        })
    }
}


