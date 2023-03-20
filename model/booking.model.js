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
    booking_time:{
        type: String,
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