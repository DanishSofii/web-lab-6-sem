// Latest mongo version ------------------------ code for lab version is below ---------------------------------------------

// const express = require('express')
// const {MongoClient} = require("mongodb");
// const path = require('path');
// const bodyParser = require('body-parser');

// const app = express();
// const url = 'mongodb://localhost:27017/college';

// app.use(express.static("public"));
// app.use(express.urlencoded({extended:true}));
// // for post method
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// const client = new MongoClient(url);

// async function connectToDB(){
//     try{
//         await client.connect();
//         console.log("Connected to DB");
//     }
//     catch(err){
//         console.log(err);
//     }
// };

// connectToDB();

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","q5b.html"));
// })

// app.get("/q5b",(req,res)=>{
//     try{
//         const db = client.db();

//         const {name,usn,dept,grade} = req.query;
//         db.collection('student3').insertOne({name,usn,dept,grade});
//         res.send("Data Inserted");


//     }catch(err){
//         console.log(err);
//     }
// })

// app.post("/updateData",async (req,res)=>{
//     try{
//         const db = client.db();
//         const {name,grade} = req.body;
//         await db.collection('student3').updateOne({name:name},{$set:{grade:grade}});
//         res.send("Grade updated succesfully");
        
//     }catch(err){
//         console.log(err);
//     }
// })

// app.listen(5000,(req,res)=>{
//     console.log("Server is running on port 5000 http://localhost:5000");
// })

//code for cse lab mongodb version---------------------------------------------------------------------------

const express = require('express')
const {MongoClient} = require("mongodb");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const url = 'mongodb://localhost:27017/college';

MongoClient.connect(url,(err,db)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected to database");
        app.use(express.static(path.join(__dirname,"public")));
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(express.urlencoded({extended:true}));


        app.get('/',(req,res)=>{
            res.sendFile(path.join(__dirname,"public","q5b.html"));
        })

        app.get("/q5b",(req,res)=>{
            try{
                const {name,usn,dept,grade} = req.query;
                db.collection('student3').insertOne({name,usn,dept,grade});
                res.send("Data Inserted");

            }catch(err){
                console.log(err);
            }
        })

        app.post("/updateData",async (req,res)=>{
            try{
                const {name,grade} = req.body;
                await db.collection('student3').updateOne({name:name},{$set:{grade:grade}});
                res.send("Grade updated succesfully");
                
            }catch(err){
                console.log(err);
            }
        })
        app.listen(5000,(req,res)=>{
            console.log("Server is running on port 5000 http://localhost:5000");
        })
    }
})