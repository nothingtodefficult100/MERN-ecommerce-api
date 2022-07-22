const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler")

exports.registerUser = async (req,res,next) =>{
    try{
           
        const {name,email,password} = req.body;
        
        const user = await User.create({
            name,
            email,
            password,
            avatar:{
                public_id:"public id",
                url:"image url"
            }
        });

       const token = User.getJWTtoken();
       return res.status(201).json({
         success:true,
         token
       })



    }catch(e){
        next(new ErrorHandler(e,404))
    }
}