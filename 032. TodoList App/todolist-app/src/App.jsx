import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import TaskContainer from './components/TaskContainer';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

   const [tasks, setTasks] = useState([]);
   const [task, setTask] = useState("");


   const handleAddClick = () => { 
      task.length <= 3 ? alert('Enter a valid task') : setTasks([...tasks, { id: uuidv4(), task: task, completed: false }]);        
      setTask("");      
   }

   const handleInputChange = (e) => {     
      setTask(e.target.value);
   }

   const handleCheckbox = (id) => () => {
      const updatedTasks = tasks.map((task) => {
         if (task.id === id) {
            return { ...task, completed: !task.completed };
         }
         return task;
      });
      setTasks(updatedTasks);
   }
   
   useEffect(() => {
     console.log(tasks);
   }, [tasks]);
   

   return (
      <div className="flex flex-col h-dvh">         
         <Navbar />
         <div className="flex-grow flex flex-col items-center p-5 bg-purple-200 w-3/4 mx-auto my-5 rounded-lg">
            <div className="heading text-2xl font-bold">
               <h1>Todo Bro - Let's make your tasks organised</h1>
            </div>
            <div className="addTaskContainer my-5 w-3/4">
               <div className="addTask font-bold text-xl">
                  <h2>Add Task</h2>
               </div>
               <div className="addTaskInput flex gap-2 my-4">
                  <input value={task} onChange={handleInputChange} className="py-2 px-5 bg-white w-full rounded-xl" type="text" placeholder="Enter your task here..." />
                  <button onClick={handleAddClick} className="bg-green-800 cursor-pointer px-3 py-2 rounded-xl text-white font-bold">Add</button>
               </div>
               <div className="showCompleted flex gap-2 items-center">
                  <input className="cursor-pointer h-5 w-5" type="checkbox" name="" id="" />
                  <h1 className="font-bold">Show Completed</h1>
               </div>
            </div>
            <div className="tasksContainer flex-grow border-2 border-purple-800 rounded-lg w-3/4 px-5">
               {tasks.length === 0 && <h1 className="text-center text-2xl font-bold">No tasks added yet</h1>}
               {tasks.map((task) => (
                  <div key={task.id} className="taskContainer flex justify-between items-center gap-5 my-5 p-5 bg-purple-300 font-medium rounded-lg hover:bg-purple-100 hover:shadow-lg hover: shadow-purple-300">
                     <div className="task flex gap-2 items-center">
                        <input onChange={handleCheckbox(task.id)} className="h-7 w-8 cursor-pointer" type="checkbox" name="" id="" checked={task.completed} />
                        <h1 className={task.completed ? "line-through" : ""}>{task.task}</h1>
                     </div>
                     <div className="taskButtons flex gap-2">
                        <button className="bg-purple-800 cursor-pointer px-3 py-2 rounded-xl"><FaEdit className="h-5 w-8 invert" /></button>
                        <button className="bg-red-600 cursor-pointer px-3 py-2 rounded-xl"><MdDeleteForever className="h-5 w-8 invert" /></button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <Footer />         
      </div>
   )
}

export default App
