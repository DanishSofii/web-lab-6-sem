// q1b  lates mongo  version

// const express = require('express');
// const {MongoClient} = require('mongodb');
// const path = require('path');
// const app = express();


// const url = "mongodb://localhost:27017/college";
// const client = new MongoClient(url);

// app.use(express.static("public"));
// app.use(express.urlencoded({extended:true}));


// async function connectToDB(){
//     try{
//         await client.connect();
//         console.log("connected to mongodb");
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// connectToDB();


// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","/q1b.html"));
// })

// app.get("/q1b",(req,res)=>{
//     let name = req.query.name;
//     let usn = req.query.usn;
//     let sem = req.query.sem;
//     let examfee = req.query.examfee;
//     let cie = req.query.cie;

//     const db = client.db();

//     db.collection('student').insertOne({'name':name,'usn' : usn, 'sem':sem,'examfee':examfee,'cie':cie});

//     res.send("insertd data");
    
// })
// app.get("/display",async (req,res)=>{
//     try{
//         const db = client.db();
//         const result = await db.collection('student').find().toArray();
        

//         res.send(`
//             <html>
//             <body>
//             <h1>student details</h1>
//             <table>
//             <tr><th>Name</th><th>Usn</th><Semester</th><th>ExamFee</th><th>Cie Marks</th></tr>
//             ${result.map(item=>`
//                 <tr>
//                     <td>${item.name}</td>
//                     <td>${item.usn}</td>
//                     <td>${item.sem}</td>
//                     <td>${item.examfee}</td>
//                     <td>${item.cie}</td>
//                 `)}
//                 </table>
//                 </body>
//                 </html>
//             `)
//     }
//     catch(err){
//         console.log(err);
//     }
// })

// app.listen(5000,(req,res)=>{
//     console.log("server started at : http://localhost:5000");
// })


// lab mongo version ---------------------------------------------

const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();

const url = "mongodb://localhost:27017/college";

MongoClient.connect(url,(err,db)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connected to db");
        app.use(express.static("public"));

        app.get("/",(req,res)=>{
            res.sendFile(path.join(__dirname,"public","/q1b.html"));
        })


        app.get("/q1b",(req,res)=>{
            let name = req.query.name;
            let usn = req.query.usn;
            let sem = req.query.sem;
            let examfee = req.query.examfee;
            let cie = req.query.cie;
            db.collection('student').insertOne({'name':name,'usn' : usn, 'sem':sem,'examfee':examfee,'cie':cie});
            if(err){
                console.log(err);
            }
            else{
                res.send("Inserted data");
            }
        })

        app.get("/display",async (req,res)=>{
           try{
            const result = await db.collection('student').find({cie :{$lt : 20}}).toArray();
            res.send(`
                <html>
                <body>
                <h1>student details</h1>
                <table>
                <tr><th>Name</th><th>Usn</th><Semester</th><th>ExamFee</th><th>Cie Marks</th></tr>
                ${result.map(item=>`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.usn}</td>
                        <td>${item.sem}</td>
                        <td>${item.examfee}</td>
                        <td>${item.cie}</td>
                `)}
                </table>
                </body>
                </html>
            `)
           }
           catch(err){
            console.log(err);
           }

        })
        app.listen(5000,(req,res)=>{
            console.log("server is running on port 5000 http://localhost:5000");
        })
    }
})