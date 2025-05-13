import React from 'react'
import { useState } from 'react'
import PasswordActions from '../hooks/passwordActions';


const PasswordSmallScreen = (props) => {
   const [showPassword, setShowPassword] = useState(false);

   const { handleEdit, handleDelete, handleCopy, formatURL } = PasswordActions();

   const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev);
   }
   return (
      <div className="border-2 border-green-400 rounded-lg p-2 flex flex-col gap-2 justify-between">
         <div className='flex items-center gap-2'>

            <div className="font-bold text-green-900 shrink-0">
               Website :
            </div>
            <div className="flex items-center ">
               <div className='break-all'>
                  <a href={formatURL(props.site)} target="_blank" rel="noopener noreferrer">
                     {props.site}
                  </a>
               </div>
               <div>
                  <lord-icon onClick={() => handleCopy(props.site)} className="cursor-pointer"
                     style={{ "width": "25px", "height": "25px", "paddingTop": "6px", "paddingLeft": "3px" }}
                     src="https://cdn.lordicon.com/iykgtsbt.json"
                     colors="primary:16c72e"
                     trigger="hover" >
                  </lord-icon>
               </div>
            </div>
         </div>
         <div className='flex items-center gap-2'>

            <div className="col-span-1 font-bold text-green-900 shrink-0">
               Username:
            </div>
            <div className="col-span-2 flex items-center">
               <div className="break-all">{props.username}</div>
               {props.username.length > 0 && <div> <lord-icon onClick={() => handleCopy(props.username)} className="cursor-pointer"
                  style={{ "width": "25px", "height": "25px", "paddingTop": "6px", "paddingLeft": "3px" }}
                  src="https://cdn.lordicon.com/iykgtsbt.json"
                  trigger="hover" >
               </lord-icon></div>}
            </div>
         </div>
         <div className='flex items-center gap-2'>

            <div className="col-span-1 font-bold text-green-900 shrink-0">
               Password:
            </div>
            <div className="col-span-2 flex items-center">
               <div className="break-all">{showPassword ? props.password : ('*').repeat(props.password.length)}</div>
               <div>

                  <lord-icon onClick={() => handleCopy(props.password)} className="cursor-pointer"
                     style={{ "width": "25px", "height": "25px", "paddingTop": "6px", "paddingLeft": "3px" }}
                     src="https://cdn.lordicon.com/iykgtsbt.json"
                     trigger="hover" >
                  </lord-icon>
               </div>
            </div>
         </div>
         <div className='flex items-center gap-2'>

            <div className="col-span-1 font-bold text-green-900 shrink-0">
               Actions :
            </div>
            <div className="col-span-2 flex items-center gap-3 ">
               <div className='h-[25px]'>

                  <lord-icon onClick={togglePasswordVisibility} className="cursor-pointer w-[25px] h-[25px]"
                     src="https://cdn.lordicon.com/dicvhxpz.json"
                     trigger="hover"
                     stroke="bold"
                     colors="primary:#242424,secondary:#16c72e"
                  >
                  </lord-icon>
               </div>
               <div className='h-[25px]'>

                  <lord-icon onClick={() => handleEdit(props.id)} className="cursor-pointer w-[25px] h-[25px]"
                     src="https://cdn.lordicon.com/exymduqj.json"
                     trigger="hover"
                     stroke="bold"
                     colors="primary:#242424,secondary:#16c72e"
                  ></lord-icon>
               </div>
               <div className='h-[25px]'>

                  <lord-icon onClick={() => handleDelete(props.id)} className="cursor-pointer w-[25px] h-[25px]"
                     src="https://cdn.lordicon.com/hwjcdycb.json"
                     trigger="hover"
                     stroke="bold"
                     colors="primary:#242424,secondary:#16c72e"

                  >
                  </lord-icon>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PasswordSmallScreen
