const express = require('express')
const router = express.Router()
const {registration,getStudentByEventID} = require('../controller/registration')

router.post('/:id',registration)
router.get('/event/:id',getStudentByEventID)

module.exports=router