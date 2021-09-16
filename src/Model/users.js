const mongoose =require('mongoose');
const validator =require('validator');


const User =mongoose.model('User',{
    name:{
        type:String,
        required :true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        default:0,
        validate(value){
            if(value<0)
            {
                throw new Error("Please Enter Postive Value");
            }
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate(value)
        {
                if(!validator.isEmail(value))
                {
                    throw new Error("Plesas Enter Valid Email");
                }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength: 6,
        validate(value){
            if(value === "Password")
            {
                throw new Error("Please Add Strong Password");
            }
        }

    }
});


module.exports = User;