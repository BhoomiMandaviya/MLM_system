const validator = require("../validators/index");

const validate = (valid)=>{
    if(!validator.hasOwnProperty(valid)){
        throw new Error(`${valid} validate not found`)
    }
    return async function (req,res,next){
        try {
            const data = await validator[valid].validateAsync(req.body)
            req.body = data;
            next()
        } catch (error) {
            next(error)
        }
    }

}

module.exports = validate