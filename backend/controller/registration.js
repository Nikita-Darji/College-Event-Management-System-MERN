const regis = require('../models/registration')

const registration=async(req,res)=>{
    const {studentname,studentemail,phone,department,year,studentId}=req.body
    if(!studentname||!studentemail||!phone||!department||!year){
        return res.json({message:"Fields Cant be Empty"})
    }
    const register = await regis.create({
        studentname,studentemail,eventid:req.params.id,phone,department,year,studentId
    })
    return res.json(register)
}

module.exports={registration}