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
})

module.exports=mongoose.model("Reservation", reservation_schema)
