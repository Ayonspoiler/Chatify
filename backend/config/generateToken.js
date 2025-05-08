const jwt=require("jsonwebtoken");


const generateToken=(id)=>{
   return jwt.sign({id},"ayon",{
    expiresIn:"30d",
   })
}
module.exports=generateToken