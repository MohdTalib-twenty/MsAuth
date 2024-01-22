const express = require("express")
const authRoutes = require("./routes/authroutes")


const app = express();

app.use('/api',authRoutes)


app.listen(8000,()=>{
    console.log("Server connected")
})