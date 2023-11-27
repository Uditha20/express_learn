const User=require("../Model/userModel");
const jwt=require('jsonwebtoken');

exports.postUser=async(req,res)=>{
    try{
      const createUser=await User.create(req.body);
      const token=jwt.sign({id:createUser._id},process.env.SECRET_STR,{
        expiresIn:process.env.LOGIN_EXPIRES
      })
      res.status(201).json({
        status:"create",
        token,
        data:{
          createUser
        }
      })
    }catch(err){
      res.status(400).json({
        status:"fail",
        message:err.message
      })
    }
  }



