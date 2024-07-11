const express = require('express');
const path = require('path')
const app = express();

const port = 3000;


app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public")));

const mainRoute = require("./routes/main");

app.use('/',mainRoute);

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port} http://localhost:${port}`);
})