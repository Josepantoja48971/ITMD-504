import React,{useState, use Effect} from 'react';
import '/App.css';
function App() {
const [tasks, setTasks]=useState([]);
const[title, setTitle]=useState('');
const[dueDate, setDueDate]=useState('');
useEffect(()=>{
fetchTasks();
},[]);
const fetchTasks=()=>{