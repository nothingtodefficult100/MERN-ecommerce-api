const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken')
const UserSchema = new mongoose.Schema({
       
      name:{
         type:String,
         required:[true,"Please enter your name"],
         maxlength:[30,"name cannot exceed 30 characters"],
         minlength:[4,"name should have more than 4 charactars"]
      },

      email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Enter your valid email"]
      },
      password:{
        type:String,
        required:[true,"Please enter your password"],
        minlength:[8,"Password should have more than 8 characters"],
        select:false
      },
      avatar:{
          public_id:{
             type:String,
             required:true
          },
          url:{
            type:String,
            required:true
          }
      },
    role:{
        type:String,
        default:"user"
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date

})

const user = mongoose.model('user',UserSchema);


// =====this code working before save user data into database=====//
UserSchema.pre("save",async function(next){
     if(!this.isModyfied("password")){
          next()
     }
     
     this.password = await bcrypt.hash(this.password,10)
});
//======end//============

//============ ganerate jwt token========
UserSchema.methods.getJWTtoken = function(){
       JWT.sign({id:this._id},process.env.JWT_SECRET,{
          expiresIn:process.env.JWT_EXPIRE,
       })
};

//END


















module.exports = user;