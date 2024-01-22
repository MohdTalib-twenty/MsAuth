const express = require("express")
const authController=require("../controllers/authControllers")
const route = express.Router()

route.get('/auth',authController)


module.exports=route