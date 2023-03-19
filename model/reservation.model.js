const mongoose= require("mongoose")

const reservation_schema= new mongoose.Schema({
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
    
})

module.exports=mongoose.model("Reservation", reservation_schema)