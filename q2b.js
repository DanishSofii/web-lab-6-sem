const express = require('express');
const {MongoClient} = require("mongodb");
const path = require('path');

const app = express();
const url = "mongodb://localhost:27017/college";
const client = new  MongoClient(url);

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


async function connectToDB(){
    try{
        await client.connect();
        console.log("connected to db");
    }
    catch(err){
        console.log(err);
    }
}

connectToDB();

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","q2b.html"));
})

app.get("/q2b",(req,res)=>{
        const db =client.db();

        let name = req.query.name;
        let usn = req.query.usn;
        let sem = req.query.sem;
        let examfee = req.query.examfee;
        let cie = req.query.cie;
    db.collection('student').insertOne({'name':name,'usn' : usn, 'sem':sem,'examfee':examfee,'cie':parseFloat(cie)});
            res.send("Data inserted")
})

app.post("/deleteUnpaid",async(req,res)=>{
    try{
        const db = client.db();
        const result = await db.collection('student').deleteMany({examfee :{$lte : '0'}});
        res.send(result);
    }
    catch(err){
        console.log(err);
    }
    
})

app.listen(5000,(req,res)=>{
    console.log("server started http://localhost:5000");
})