const express=require('express');
const mysql=require('mysql2');
const mysql=require('cors');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json());
