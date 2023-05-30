const express= require("express");
const router = express.Router();
const signup = require("../controller/signupcontroller")
const validate= require("../utility/validatefunction")

router.get("/getdata",signup.getdata)
router.post("/adddata",signup.adddata)
router.patch("/updaten",signup.updaten)




module.exports =router