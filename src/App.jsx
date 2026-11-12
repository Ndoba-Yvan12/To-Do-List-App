import { useState } from "react";


function App(){

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  
    const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };


  console.log(task);

  return(
    <div>
      <h1 className="text-3xl mb-4 mt-8 mx-4">My To-Do App</h1> 
      <input type="text" placeholder="Add a new task" className="border border-gray-300 rounded px-8 py-2 pr-4 pl-4 mx-4" value={task}
        onChange={(e) => setTask(e.target.value)}/>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTask}>Add Task</button>  

      <h2 className="text-3xl mb-4 mt-8 mx-4">My Tasks</h2>

      <ul className="list-disc list-inside mx-4">
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>



    </div>
  )
}
 

export default App;