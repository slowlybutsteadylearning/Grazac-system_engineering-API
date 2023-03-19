const Joi = require("joi");

const validateRequest =(schema)=>{
    return(req,res,next)=>{
        const{error} = schema.validate(req.body);
        if (error){
            return res.status(400).json({
                error:error.details[0].message
            })
        }
        if(!req.value){
            req.value={};
    
        }
        req.value["body"]
        next();
    }
}
const schemas =  {
    signupSchema:Joi.object().keys({
    first_name:Joi.string().required(),
    last_name:Joi.string().required(),
    phone:Joi.string().required(),
    email:Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: {allow:["org","com","net"]}}),
    password:Joi.string()
        .min(5)
        .max(10)
        .required()
        .trim()
        .pattern( new RegExp("^[a-zA-Z0-9]{3,30}$")),
}),

loginSchema:Joi.object().keys({
    email:Joi.string()
        .email({minDomainSegments:2, tlds: {allow:["org","com","net"]}})
        .required(),
    password:Joi.string().required(),
}),

bookingTimeSchema:Joi.object().keys({
    user_id:Joi.string(),
    reservation_id:Joi.string(),
    booking_time:Joi.string().required(),
    booking_status:Joi.string().required(),
    
})

}





module.exports = {
    validateRequest,
    schemas
};