const express = require('express')
const router = express.Router()
const {signUp,login,allUser} = require('../controller/user')

router.post('/signUp',signUp)
router.post('/login',login)
router.post('/allUser',allUser)


module.exports=router