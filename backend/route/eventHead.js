const express = require('express')
const router = express.Router()
const {getEvent,getEvents,addEvent,editEvent,deleteEvent} = require('../controller/eventHead')

router.get('/',getEvents)
router.get('/:id',getEvent)
router.post('/',addEvent)
router.put('/:id',editEvent)
router.delete('/:id',deleteEvent)


module.exports=router