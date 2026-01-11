const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3000
const connectdb = require('./config/connectdb')
const cors = require('cors')
connectdb()
app.use(express.json())
app.use(cors())

app.use('/',require('./route/user'))
app.use('/events',require('./route/eventHead'))
app.use('/register',require('./route/registration'))


app.listen(PORT,(err)=>{
    console.log(`app is listening to port ${PORT}`)
})