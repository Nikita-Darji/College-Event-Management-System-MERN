const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3000
const connectdb = require('./config/connectdb')
connectdb()
app.use('/events',require('./route/eventHead'))

app.listen(PORT,(err)=>{
    console.log(`app is listening to port ${PORT}`)
})