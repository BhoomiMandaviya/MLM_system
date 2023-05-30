const package = require("../schema/getpackageshema");

exports.getpackages = async(req,res)=>{
    try {
        const data = await package.find();
        res.status(200).json({
            status:true,
            data:data,
            message:"data got successfully"
        })
    }
     catch (error) {
        ress.status(500).json({
            status:false,
            message:"server error"
        })
    }
}