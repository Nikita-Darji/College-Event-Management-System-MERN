const mongoose = require('mongoose')

const eventSchema= mongoose.Schema({
      title: {
       type: String,
       required:true
      },
      description: {
       type: String,
       required:true
      },
       date: {
       type: Date,
       required:true
      },
      time:{
        type:String,
        required:true
      },
      location:{
        type:String,
        required:true
      },
      eventImage:{
        type:String,
        // required:true
      },

},{timestamps:true})

module.exports=mongoose.model('EventData',eventSchema)