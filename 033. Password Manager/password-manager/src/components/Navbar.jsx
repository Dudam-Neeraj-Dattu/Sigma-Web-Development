import React from 'react'

const Navbar = () => {
   return (
      <div className="bg-green-200 text-green-900 flex justify-between items-center p-2 px-10">
         <div className="name text-2xl font-bold">
            <span className='text-green-500'> &lt;</span>
            <span>NeePass</span>
            <span className='text-green-500'>/&gt;</span>
         </div>
         <div className="github flex items-center gap-2 cursor-pointer border-3 border-green-500 rounded-lg p-1 hover:bg-white transition duration-300 ease-in-out">
            <lord-icon
               src="https://cdn.lordicon.com/jjxzcivr.json"
               trigger="hover"
               stroke="bold"
            ></lord-icon>
            <a className="text-xl font-bold" href="https://github.com/Dudam-Neeraj-Dattu" target="_blank" rel="noopener noreferrer">Github</a>
            
         </div>
      </div>
   )
}

export default Navbar
