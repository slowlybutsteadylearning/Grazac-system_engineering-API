const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
    },
    last_name:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    phone:{
        type: String,
    },
    booking_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    },
    role: {
        type: String,
        enum: [ "user", "admin"],
        default: "user",
},
},
{
timestamps:true
}
);

module.exports = mongoose.model("User", userSchema)

