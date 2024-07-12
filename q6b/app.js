const express = require('express');
const path = require('path');
const branchRouter = require('./routes/branchRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/branch',branchRouter);

app.get('/',(req,res)=>{
        res.render('home');
})

app.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`);
})