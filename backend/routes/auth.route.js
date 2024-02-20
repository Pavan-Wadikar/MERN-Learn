const {signup,signIn,google} = require('../controllers/auth.controller')

const router=require('express').Router()


router.post('/signup',signup)
router.post('/signin',signIn)
router.post('/google',google)

module.exports=router