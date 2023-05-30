const express= require("express");
const router = express.Router();
const login = require("./login")
const package = require("./package")
const signup = require("./signup")

router.use("/login",login)
router.use("/package",package)
router.use("/signup",signup)


module.exports =router