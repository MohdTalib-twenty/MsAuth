
const authController = async(req,res)=>{
    res.status(200).send({
        message:"Auth"
    })
}

module.exports=authController