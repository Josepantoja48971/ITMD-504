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
app.get('/tasks',(req,res)=>{
myDB.query('SELECT*FROM tasks', (err,rows)=>{
if (err)return res.status(500).json({error:err.message});
res.json(rows);
});
});
app.post('/tasks', (req,res)=>{
const {title, due_date}=req.body;
myDB.query('INSERT INTO tasks(title, due_date,status)VALUES(?,?, "incomplete")',
[title, due_date],
(err,newTask)=>{
if(err) return res.status(500).json({error:err.message});
res.json({id:newTask.insertId, title, due_date,status:'incomplete'});
});
});
app.put('/tasks/:id', (req,res)=>{
const{status}=req.body;
myDB.query('UPDATE tasks SET status=? WHERE id=?',
[status, req.params.id],  
(err)=>{
if (err)return res.status(500).json({error:err.message});
res.json({message:'task updated'});
});
});
app.delete('/tasks/:id', (req,res)=>{
myDB.query('DELETE FROM tasks WHERE id=?',[req.params.id],
(err)=>{
if (err) return res.status(500).json({error:err.message});
res.json({message:'task removed'});
});
});
app.listen(process.env.PORT);
