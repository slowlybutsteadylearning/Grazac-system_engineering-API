const mongoose= require("mongoose")

const train_schema= new mongoose.Schema({
    service_name:{
        type: String,
        required: true, 
        unique:true,  
    },
    train_status: {
        type: String,
        required: true,
    },

    service_type:{
        type: String,
        required: true,
        enum:["Reservation", "Business", "Economy"]
    },
})

module.exports=mongoose.model("Train", train_schema)
