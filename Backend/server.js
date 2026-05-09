const express=require('express');
const mysql=require('mysql2');
const mysql=require('cors');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json());
const myDB=mysql.createConnection({
host:process.env. DB_Host,
user:process.env.DB_USER,
password:process.env.DB_PASSWORD,
database:process.env.DB_NAME
});
myDB.connect((err)=>{
if (err) throw err;
});
app.get('/',(req,res)=>{
res.json({message:'Welcome to task manager josep'});
});

