import React from 'react'
import Password from './Password'
import { useSelector } from "react-redux";

const Passwords = () => {
   const passwords = useSelector((state) => state.passwords.passwords);

   return (
      <div className="flex justify-center m-auto w-[80%] mt-7 mb-10 ">

         {passwords.length === 0 ? (
            <div className="text-center text-red-500 text-xl font-bold">No passwords saved yet.</div>
         ) : (
            <div className="grid grid-cols-6 w-3/4">
               {/* Header */}
               <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-2 border-r-2 border-green-400 rounded-tl-lg sticky top-15.5 z-10 col-span-3">Website URL</div>
               <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-b-2  border-r-2 border-t-2 text-center border-green-400 sticky top-15.5 z-10">Username</div>
               <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-b-2 border-r-2 border-t-2  text-center border-green-400 sticky top-15.5 z-10">Password</div>
               <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-b-2 border-t-2 border-r-2 text-center border-green-400 rounded-tr-lg sticky top-15.5 z-10">Actions</div>

               {/* Rows */}
               {passwords.map((pw) => (
                  <Password key={pw.id} id={pw.id} site={pw.site} username={pw.username} password={pw.password} />
               ))}
            </div>
         )
         }
      </div>
   )
}

export default Passwords