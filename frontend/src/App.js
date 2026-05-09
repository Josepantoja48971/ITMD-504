import React,{ useState, useEffect} from 'react';
import './App.css';
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
body: JSON.stringify({title, due_date:dueDate})
})
.then(res=>res.json())
.then(()=>{
fetchTasks();
setTitle('');
setDueDate('');
});
};
const updateTask=(id)=>{
fetch(`http://localhost:3001/tasks/${id}`,{
method:'PUT',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({status:'completed'})
})
.then(()=>fetchTasks());
};
const deleteTask=(id)=>{
fetch(`http://localhost:3001/tasks/${id}`,{
method:'DELETE'
})
.then(()=>fetchTasks());
};
return(
<div className="App">
<h1>Josep Task Manager</h1>
<div className="add-task">
<input
type="text"
placeholder="Task title"
value={title}
onChange={e=>setTitle(e.target.value)}
/>
<input
type="date"
value={dueDate}
onChange={e=>setDueDate(e.target.value)}
/>
<button onClick={addTask}>Add Task</button>
</div>
<div className="task-list">
{tasks.map(task=>(
<div key={task.id} className="task-card">
<h3>{task.title}</h3>
<p>Due: {task.due_date}</p>
<p>Status:{task.status}</p>
<button onClick={()=> updateTask(task.id)}>Complete</button>
<button onClick={()=>deleteTask(task.id)}>Delete</button>
</div>
))}
</div>
</div>
);
}
export default App;
