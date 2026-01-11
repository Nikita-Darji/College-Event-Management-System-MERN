const express = require('express')
const router = express.Router()
const {registration} = require('../controller/registration')

router.post('/:id',registration)

module.exports=router