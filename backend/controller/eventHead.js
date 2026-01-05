const Events = require("../models/event")

const getEvents=async(req,res)=>{
    const allEvents = await Events.find()
    return res.json(allEvents)
}
const getEvent=async(req,res)=>{
    const event = await Events.findById(req.params.id)
    return res.json(event)
}
const addEvent=async(req,res)=>{
    const {title,description,date,time,location} = req.body
    if(!title || !description || !date || !time || !location){
        return res.json({message:"Required Fields cant be empty"})
    }
    const eventData = await Events.create({
        title,description,date,time,location
    })
    return res.json(eventData)
}
const editEvent=async(req,res)=>{
     const {title,description,date,time,location} = req.body
    let event = await Events.findById(req.params.id)
    try{
         if(event){
        await Events.findByIdAndUpdate(req.params.id,res.body,{new:true})
        return res.json({title,description,date,time,location})
    }
    }catch(err){
        return res.status(404).json({message:"errorrr"})
    }
   
}
const deleteEvent=(req,res)=>{
    res.json({message:"Helllo"})
}
module.exports = {getEvent,getEvents,addEvent,editEvent,deleteEvent}