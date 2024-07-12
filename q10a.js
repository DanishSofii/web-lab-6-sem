const express = require('express');
const app = express();
const port = 5000;

const loggerMiddleware = (req,res,next)=>{
    console.log(`${new Date().toLocaleString()} , ${req.method} , ${req.url}`);
    next();
}
let visitCount = 0;
const visitCounterMiddleware = (req,res,next)=>{
    visitCount++;
    console.log(`Visit Count is : ${visitCount}`);
    next();
}

app.use(loggerMiddleware);
app.use(visitCounterMiddleware);

app.get("/",(req,res)=>{
    res.send(`Visit Count is : ${visitCount}`);
})

app.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`);
})
