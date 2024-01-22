const express = require("express")
const authRoutes = require("./routes/authroutes")
const notesRoute = require("./routes/notesRoutes")

const app = express();

app.use('/api',authRoutes)
app.use('/api',notesRoute)


app.listen(8000,()=>{
    console.log("Server connected")
})