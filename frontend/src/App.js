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
fetch('http://localhost:3001/tasks')
.then(res=>res.json())
.then(data=>setTasks(data));
};
const addTask =()=>{
fetch('http://localhost:3001/tasks',{
method: 'POST',
headers:{'Content-type':'application/json'},
body: JSON.stringfly({title, due_date:dueDate})
})
.then(res=>res.json())
.then())=>{
fetchTasks();
setTitle('');
});
});
