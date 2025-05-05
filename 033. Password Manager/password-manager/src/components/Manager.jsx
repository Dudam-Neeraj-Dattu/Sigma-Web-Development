import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Manager = () => {
   return (
      <div className="flex flex-col justify-center items-center mt-6 w-[80%] m-auto gap-5">
         <div className="name text-2xl font-bold">
            <span className='text-green-500'> &lt;</span>
            <span>NeePass</span>
            <span className='text-green-500'>/&gt;</span>
         </div>
         <div className="additional-info text-lg text-gray-700">
            <p>Manage your passwords securely.</p>
         </div>
         <div className="form flex flex-col justify-center items-center gap-4 w-3/4">
            <div className="sitename w-full">
               <input className="px-3 py-1.5 border-2 border-green-400 w-full rounded-2xl focus:border-green-200 focus:outline-none" type="url" name="url" placeholder="Enter the website URL" />
            </div>
            <div className="username relative w-full flex gap-10">
               <input className="px-3 py-1.5 border-2 border-green-400 w-full rounded-2xl focus:border-green-200 focus:outline-none" type="text" name="username" placeholder="Enter your username" />
               <input className="px-3 py-1.5 border-2 border-green-400 w-full rounded-2xl focus:border-green-200 focus:outline-none" type="password" name="password" placeholder="Enter your password" />               
               <FaRegEyeSlash className='absolute cursor-pointer right-3 top-2 ' size={25} />                            
            </div>
                        
            <div className="save">               
               <button className="bg-green-200 text-green-900 font-bold py-2 px-4 rounded-lg hover:bg-green-100 hover:text-white transition duration-300 ease-in-out flex items-center"><lord-icon
                  src="https://cdn.lordicon.com/sbnjyzil.json"
                  trigger="hover"
                  stroke="bold">
               </lord-icon>Save Password</button>
            </div>
         </div>
      </div>
   )
}

export default Manager
