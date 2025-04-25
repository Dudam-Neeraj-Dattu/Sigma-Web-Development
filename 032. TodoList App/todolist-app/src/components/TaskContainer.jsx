import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TaskContainer = () => {
   return (
      <div className="taskContainer flex justify-between items-center gap-5 my-5 p-5 bg-purple-300 font-medium rounded-lg hover:bg-purple-100 hover:shadow-lg hover: shadow-purple-300">
         <div className="task flex gap-2 items-center">
            <input className="h-8 w-8 cursor-pointer" type="checkbox" name="" id="" />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non vitae qui veritatis. Laboriosam numquam nemo aliquam, maiores atque praesentium provident iste neque.</h1>
         </div>
         <div className="taskButtons flex gap-2">
            <button className="bg-purple-800 cursor-pointer px-3 py-2 rounded-xl"><FaEdit className="h-5 w-8 invert" /></button>
            <button className="bg-red-600 cursor-pointer px-3 py-2 rounded-xl"><MdDeleteForever className="h-5 w-8 invert" /></button>
         </div>
      </div>
   )
}

export default TaskContainer
