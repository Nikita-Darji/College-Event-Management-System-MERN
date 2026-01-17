const regis = require('../models/registration')
const mongoose = require('mongoose')

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
const getStudentByEventID=async(req,res)=>{
    try{
        // const eventId = req.params.id
        const register = await regis.find({eventid:req.params.id})
        return res.status(200).json(register)
    }catch(error){
        return res.status(500).json({error:error.message})
    }
    
}

module.exports={registration,getStudentByEventID}