const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require('validator');
const Registration = require("./registrationModel");


const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter name"],
            trim: true,
        },
        collegeId: {
            type: String,
            required: [true, "Please enter id"],
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
        },
        branch: {
            type: String,
            trim: true,
        },
        section: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            require: [true, "Please enter the password"],
            trim: true,
            minlength: [5, "Min length is 5"],
            validate(value){
                if (value.toLowerCase().includes("password")){
                    throw new Error("Cant containpassword");
                }
            },
        },
        gender: {
            type:String,
            enum: ["Male", "Female", "None"],
            default: "None",
        },
        year: {
            type: Number,
            validate(value){
                if(value < 1 || value > 4) {
                    throw new Error("Enter valid year");
                }
            },
        },
        image: {
            type: String,
        },
        registeredIn: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Event",
            },
        ],
        tokens: [{ type: String }],


    },
    {
        timestamps: true,
    }
)

// static registration
/*userSchema.statics.register = async function(name,
    collegeId,
    password,
    year,
    email,
    phone,
    image,
    gender,
    section,
    branch) {

    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Email already in use')
    }

   const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password, salt)
   
   const user = await this.create({name,
    collegeId,
    password:hash,
    year,
    email,
    phone,
    image,
    gender,
    section,
    branch,})
   return user
}*/
userSchema.methods.matchPassword = async function (enteredPassword){
    console.log(enteredPassword);
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
    try {
        const user = this;
        if(user.isModified("password")) {
            user.password = await bcrypt.hash(user.password, 10);
        }
        next();
    }
    catch(e){
        console.log(`Error occured while hashing password ${e}`);
    }
});

userSchema.pre("remove",async function (next) {
    try {
        const user = this;
        const registrations = await Registration.find({user: user._id});
        for(let i=0;i < registrations.length; i++) {
            await registrations[i].remove();
        }
        process.exit(0);
    }
    catch(e){
        console.log(`Error occured while pre removing user ${e}`);

    }
});

module.exports = new mongoose.model('User',userSchema)