const express= require("express");
const router = express.Router();
const package = require("../controller/packagecontroller")
const getpackage = require("../controller/getpackagecontroller")

router.post("/addpackage",package.price);
router.get("/getpackages",getpackage.getpackages)
router.get("/gethistory",package.gethistory)




module.exports =router