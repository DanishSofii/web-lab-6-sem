// New version mongo


// const express = require('express');
// const {MongoClient} = require("mongodb");
// const path = require('path');

// const app = express();
// const url ="mongodb://localhost:27017/hr";

// app.use(express.static("public"));
// app.use(express.urlencoded({extended:true}));

// const client = new MongoClient(url);

// async function connectToDB(){
//     try{
//         await client.connect();
//         console.log("Connected to DB");
//     }
//     catch(err){
//         console.log(err);
//         }
// }

// connectToDB();

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","q3b.html"));
// })

// app.get("/q3b",(req,res)=>{
//     try{
//         const db = client.db();
//         const {name,email,pnumber,hireDate,title,salary} = req.query;
//         db.collection('employees').insertOne({name,email,pnumber,hireDate,title,salary});
//         res.send("inserted data");
//     }
//     catch(err){
//         console.log(err);
//     }

// })
// app.get("/display",async(req,res)=>{
//     try{
//         const db = client.db();
//         const data = await db.collection("employees").find({salary:{$gt : '50000'}}).toArray();
//         // res.send(data);
//         res.send(`
//             <html>
//             <body>
//             <table border="1">
//             <tr><th>name</th><th>email</th><th>phone Number</th><th>hire date</th><th>Job title</th><th>salary</th></tr>
//             ${data.map(item =>`
//                 <tr>
//                 <td>${item.name}</td>
//                 <td>${item.email}</td>
//                 <td>${item.pnumber}</td>
//                 <td>${item.hireDate}</td>
//                 <td>${item.title}</td>
//                 <td>${item.salary}</td>
//                 </tr>
//                 `)}
//             </table>
//             </body>
//             </html>
//                 `)
//     }
//     catch(err){
//         console.log(err);
//     }
// })

// app.listen(4000,(req,res)=>{
//     console.log("server is running on port 4000 http://localhost:4000");
// })

//lab mongo version: -------------------------------------------------------------------------------

const express = require('express');
const {MongoClient} = require("mongodb");
const path = require("path");

const app = express();
const url = "mongodb://localhost:27017/hr";

MongoClient.connect(url,(err,db)=>{
    if(err){
        console.log(err);
        }
        else{
            console.log("connected to database");

            app.get("/",(req,res)=>{
                res.sendFile(path.join(__dirname,"public","q3b.html"));
            })

            app.get("/q3b",(req,res)=>{
            try{
                const db = client.db();
                const {name,email,pnumber,hireDate,title,salary} = req.query;
                db.collection('employees').insertOne({name,email,pnumber,hireDate,title,salary});
                res.send("inserted data");
            }
            catch(err){
                console.log(err);
            }
            })

            app.get("/display",async(req,res)=>{
                try{
                            const data = await db.collection("employees").find({salary:{$gt : '50000'}}).toArray();
                            // res.send(data);
                            res.send(`
                                <html>
                                <body>
                                <table border="1">
                                <tr><th>name</th><th>email</th><th>phone Number</th><th>hire date</th><th>Job title</th><th>salary</th></tr>
                                ${data.map(item =>`
                                    <tr>
                                    <td>${item.name}</td>
                                    <td>${item.email}</td>
                                    <td>${item.pnumber}</td>
                                    <td>${item.hireDate}</td>
                                    <td>${item.title}</td>
                                    <td>${item.salary}</td>
                                    </tr>
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
                console.log("server is running on port 5000 http://localhost:5000 ");
            })
        }
})
