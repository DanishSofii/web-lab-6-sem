const express = require('express');
const router = express.Router();

router.get('/computerScience',(req,res)=>{
    res.render('branch',{
        branch : 'Computer Science',
        color : "lightblue",
        font : 'Arial'
    })
})

router.get('/electrical',(req,res)=>{
    res.render('branch',{
        branch : 'Electrical',
        color : "lightcoral",
        font : 'Monospace'
    })
})
router.get("/mechanical",(req,res)=>{
    res.render('branch',{
        branch : 'Mechanical',
        color:'lightgreen',
        font : 'Courier New'
    })
})

module.exports = router;