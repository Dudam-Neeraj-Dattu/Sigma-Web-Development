import React from 'react'
import { useState } from 'react'
import PasswordActions from '../hooks/passwordActions';

const Password = (props) => {

   const [showPassword, setShowPassword] = useState(false);

   const { handleEdit, handleDelete, handleCopy, formatURL } = PasswordActions();

   const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev);
   }

   return (
      <>
         <div className="py-2 px-4 border-b-2  border-r-2 border-l-2 border-green-400 col-span-3 flex items-center max-2xl:col-span-2 max-xl:col-span-3 max-lg:col-span-2">
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
         <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center">
            <div className="break-all">{props.username}</div>
            {props.username.length > 0 && <div> <lord-icon onClick={() => handleCopy(props.username)} className="cursor-pointer"
               style={{ "width": "25px", "height": "25px", "paddingTop": "6px", "paddingLeft": "3px" }}
               src="https://cdn.lordicon.com/iykgtsbt.json"
               trigger="hover" >
            </lord-icon></div>}
         </div>
         <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center">
            <div className="break-all">{showPassword ? props.password : ('*').repeat(props.password.length)}</div>
            <div>

               <lord-icon onClick={() => handleCopy(props.password)} className="cursor-pointer"
                  style={{ "width": "25px", "height": "25px", "paddingTop": "6px", "paddingLeft": "3px" }}
                  src="https://cdn.lordicon.com/iykgtsbt.json"
                  trigger="hover" >
               </lord-icon>
            </div>
         </div>
         <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center justify-center gap-3 max-sm:gap-1">
            <div className='h-[30px]'>

               <lord-icon onClick={togglePasswordVisibility} className="cursor-pointer w-[30px] h-[30px]"
                  src="https://cdn.lordicon.com/dicvhxpz.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#242424,secondary:#16c72e"
               >
               </lord-icon>
            </div>
            <div className='h-[30px]'>

               <lord-icon onClick={() => handleEdit(props.id)} className="cursor-pointer w-[30px] h-[30px]"
                  src="https://cdn.lordicon.com/exymduqj.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#242424,secondary:#16c72e"
               ></lord-icon>
            </div>
            <div className='h-[30px]'>

               <lord-icon onClick={() => handleDelete(props.id)} className="cursor-pointer w-[30px] h-[30px]"
                  src="https://cdn.lordicon.com/hwjcdycb.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#242424,secondary:#16c72e"

               >
               </lord-icon>
            </div>
         </div>
      </>
   )
}

export default Password
