import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs'


const PatientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'please enter First name'],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'please enter Last name'],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'please enter email'],
        validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email',
        },
        unique: true
    },   
    contact: {
        type: Number,
        required: [true, 'please enter Last name'],
        trim: true,
        maxlength: 10
    },
    gender: {
        type: String,
        required: [true, 'please enter gender'],
        trim: true,
        maxlength: 20
    },
    password: {
        type: String,
        required: [true, 'please enter password'],
        minlength: 3,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'please confirm password'],
        minlength: 3,
        select: false
    }
    
})


PatientSchema.pre('save', async function () {  
    if (!this.isModified('password'))
        return
    const salt = await bcrypt.genSalt(10);  
    this.password = await bcrypt.hash(this.password, salt)
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt)

})

PatientSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, 
        process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}

PatientSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
   return isMatch
  }
export default mongoose.model('Patient', PatientSchema)
