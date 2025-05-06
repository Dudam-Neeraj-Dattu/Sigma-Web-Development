import React from 'react'

const Passwords = () => {

   return (
      <div className="flex justify-center m-auto w-[80%] mt-7 mb-10 ">

         <div className="grid grid-cols-6 w-3/4">
            {/* Header */}
            <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-2 border-r-2 border-green-400 rounded-tl-lg sticky top-15.5 col-span-3">Website URL</div>
            <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-b-2  border-r-2 border-t-2 text-center border-green-400 sticky top-15.5">Username</div>
            <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-b-2 border-r-2 border-t-2  text-center border-green-400 sticky top-15.5">Password</div>
            <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-b-2 border-t-2 border-r-2 text-center border-green-400 rounded-tr-lg sticky top-15.5">Actions</div>

            {/* Rows */}
            <div className="py-2 px-4 border-b-2  border-r-2 border-l-2 border-green-400 col-span-3 flex items-center">The Sliding Mr. Bones (Next Stop, Pottersville)
               <lord-icon className="cursor-pointer"
                  style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                  src="https://cdn.lordicon.com/iykgtsbt.json"
                  colors="primary:16c72e"
                  trigger="hover" >
               </lord-icon> </div>
            <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center">Malcolm Lockyer
               <lord-icon className="cursor-pointer"
                  style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                  src="https://cdn.lordicon.com/iykgtsbt.json"
                  trigger="hover" >
               </lord-icon>
            </div>
            <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center">1961
               <lord-icon className="cursor-pointer"
                  style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                  src="https://cdn.lordicon.com/iykgtsbt.json"
                  trigger="hover" >
               </lord-icon>
            </div>
            <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center justify-center gap-3">
               <lord-icon className="cursor-pointer"
                  src="https://cdn.lordicon.com/dicvhxpz.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#242424,secondary:#16c72e"
                  style={{ "width": "30px", "height": "30px" }}>
               </lord-icon>
               <lord-icon className="cursor-pointer"
                  src="https://cdn.lordicon.com/exymduqj.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#242424,secondary:#16c72e"
                  style={{ "width": "30px", "height": "30px" }}></lord-icon>
               <lord-icon className="cursor-pointer"
                  src="https://cdn.lordicon.com/hwjcdycb.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#242424,secondary:#16c72e"
                  style={{ "width": "30px", "height": "30px" }}>
               </lord-icon>
            </div>
         </div>
      </div>
   )
}

export default Passwords