import React from 'react'

const Navbar = () => {
   return (
      <div className="bg-green-200 text-green-900 flex justify-evenly items-center p-4">
         <div className="name">                        
            <h1 className="text-2xl font-bold">NeePass</h1>
         </div>
         <div className="github flex items-center gap-2 cursor-pointer border-3 border-green-500 rounded-lg p-2 hover:bg-white transition duration-300 ease-in-out">
            <lord-icon
               src="https://cdn.lordicon.com/jjxzcivr.json"
               trigger="hover"
               stroke="bold"
               ></lord-icon>
            <h1 className="text-xl font-bold">Github</h1>
         </div>
      </div>
   )
}

export default Navbar
