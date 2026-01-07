const mongoose = require('mongoose')

const eventHead = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{timeStamp:true})

module.exports=eventHead