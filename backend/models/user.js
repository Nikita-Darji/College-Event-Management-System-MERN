const mongoose = require('mongoose')

const user = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['student','event_head'],
        default:'student'
    }
},{timestamps:true})

module.exports = mongoose.model('User',user)