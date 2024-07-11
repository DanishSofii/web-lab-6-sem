const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home');
})

router.get('/registration',(req,res)=>{
    res.render('registration');
})

router.get('/announcements',(req,res)=>{
    res.render("announcements");
})

router.get('/contact',(req,res)=>{
    res.render('contact');
})

module.exports = router;


