const mongoose = require("mongoose");


//train serviceSchema
const service_schema = new mongoose.Schema({
    service_name:{
        type: String,
        required: true,   
    },

    service_type:{
        type: String,
        required: true,
        enum:["Reservation", "Business", "Economy"]
    },

    seat_number:{
        type: String,
        required: true,
        unique: true,
        min: 1, 
        max: 200
    },
    
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
  
    booking_time:{
        type: String,
    },
    booking_status:{
        type: String,
    },
},
{
    timestamps: true
}
)



module.exports = mongoose.model("Service", service_schema)