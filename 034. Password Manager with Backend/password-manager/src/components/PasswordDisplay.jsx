import React from 'react'
import Password from './Password'
import { useSelector } from "react-redux";
import PasswordSmallScreen from './PasswordSmallScreen';
import { useMediaQuery } from 'react-responsive';


const Passwords = () => {
   const passwords = useSelector((state) => state.passwords.passwords);

   const isSmallScreen = useMediaQuery({ maxWidth: '580px' });

   return (
      <div className="flex justify-center m-auto w-[80%] mt-7 mb-10 max-md:w-[95%]">

         {passwords.length === 0 ? (
            <div className="text-center text-red-500 text-xl font-bold">No passwords saved yet.</div>
         ) : (
            <>
            {!isSmallScreen ? (
            <div className="grid grid-cols-6 w-3/4  max-2xl:grid-cols-5 max-xl:w-full max-xl:grid-cols-6 max-lg:grid-cols-5 max-[580px]:hidden">
               {/* Header */}
               <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-2 border-r-2 border-green-400 rounded-tl-lg sticky top-15.5 z-10 col-span-3 break-all max-2xl:col-span-2 max-xl:col-span-3 max-lg:col-span-2">Website URL</div>
               <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-b-2  border-r-2 border-t-2 text-center border-green-400 sticky top-15.5 z-10 break-all">Username</div>
               <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-b-2 border-r-2 border-t-2  text-center border-green-400 sticky top-15.5 z-10 break-all">Password</div>
               <div className="bg-green-200 text-green-900 py-2 px-4 font-bold border-b-2 border-t-2 border-r-2 text-center border-green-400 rounded-tr-lg sticky top-15.5 z-10 break-all">Actions</div>

               {/* Rows */}
               {passwords.map((pw) => (                  
                  <Password key={pw.id} id={pw.id} site={pw.site} username={pw.username} password={pw.password} />
               ))}
            </div>
            ) : (
            <div className="grid grid-cols-2 gap-3 w-full min-[580px]:hidden max-[480px]:grid-cols-1 max-[480px]:w-[90%]">
               {passwords.map((pw) => (
                  <PasswordSmallScreen key={pw.id} id={pw.id} site={pw.site} username={pw.username} password={pw.password} />
               ))}
            </div>
            )}
            </>
         )
         }
      </div>
   )
}

export default Passwords