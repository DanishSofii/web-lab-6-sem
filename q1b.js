const express = require('express');
const {MongoClient} = require('mongodb');
const app = express();


const url = "mongodb://localhost:27017/college";
const client = new MongoClient(url);

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


async function connectToDB(){
    try{
        await client.connect();
        console.log("connected to mongodb");
    }
    catch(err){
        console.log(err);
    }
}

connectToDB();


app.get("/",(req,res)=>{
    res.sendFile("/index.html");
})

app.get("/insert",(req,res)=>{
    let name = req.query.name;
    let usn = req.query.usn;
    let sem = req.query.sem;
    let examfee = req.query.examfee;
    let cie = req.query.cie;

    const db = client.db();

    db.collection('student').insertOne({'name':name,'usn' : usn, 'sem':sem,'examfee':examfee,'cie':cie});

    res.send("insertd data");
    
})
app.get("/display",async (req,res)=>{
    const db = client.db();
    let result = await db.collection('student').find({ cie: { $lt: '20' } }).toArray();

    res.send(result)
})

app.listen(5000,(req,res)=>{
    console.log("server started at : http://localhost:5000");
})