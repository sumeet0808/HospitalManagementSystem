import mongoose from 'mongoose'
import validator from 'validator'


const ContactSchema=new mongoose.Schema({
    userName:
    {
        type:String,
        required: [true, 'Please Provide First Name'],
        maxlength: 50,
        trim: true,
    },
    email:
    {
        type:String,
        required: [true, 'Please Provide Email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please Provide Valid Email',
          },
          unique: true,
    },
    contact:{
        type:Number,
        required: [true, 'Please Provide Contact'], 
        maxlength:10
    },
    message:
    {
        type:String,
        maxlength:50
    }
})


export default mongoose.model('Contact', ContactSchema)
