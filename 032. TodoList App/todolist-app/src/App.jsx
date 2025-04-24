import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import TaskContainer from './components/TaskContainer';

function App() {
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
                  <input className="py-2 px-5 bg-white w-full rounded-xl" type="text" placeholder="Enter your task here..." />
                  <button className="bg-green-800 cursor-pointer px-3 py-2 rounded-xl text-white font-bold">Add</button>
               </div>
               <div className="showCompleted flex gap-2 items-center">
                  <input className="cursor-pointer h-5 w-5" type="checkbox" name="" id="" />
                  <h1 className="font-bold">Show Completed</h1>
               </div>
            </div>
            <div className="tasksContainer flex-grow border-2 border-purple-800 rounded-lg w-3/4 px-5">
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
               <TaskContainer />
            </div>
         </div>
         <Footer />         
      </div>
   )
}

export default App
