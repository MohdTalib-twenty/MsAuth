const express = require("express")
const notesController=require("../controllers/notesControllers")
const route = express.Router()

route.get('/auth',notesController)


module.exports=route