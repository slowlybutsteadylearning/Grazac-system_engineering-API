const mongoose = require("mongoose");



const service_schema = new mongoose.Schema({
    
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    reservation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reservation"
    },
    service_name:{
        type: String,
        required: true,
    },
    destination:{
        type: String,
    },
    booking_time:{
        type: String,
    },
    email:{
        type: String,
        required: true,
    },
    seat_number:{
        type: Number,
        
},
},
{
    timestamps: true
}
)



module.exports = mongoose.model("Service", service_schema)