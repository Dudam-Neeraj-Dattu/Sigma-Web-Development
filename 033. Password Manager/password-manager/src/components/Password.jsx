import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { startEdit, deletePassword } from "../redux/passwordSlice"
import { ToastContainer, toast } from 'react-toastify';

const Password = (props) => {

   const [showPassword, setShowPassword] = useState(false);
   const dispatch = useDispatch();

   const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev);
   }

   const handleEdit = () => {
      // console.log(props.id);
      dispatch(startEdit(props.id));
   }

   const handleDelete = () => {
      if (window.confirm("Are you sure you want to delete this password?")) {
         dispatch(deletePassword(props.id));
      }
   }

   const handleCopy = async (text) => {
      // console.log(text);
      try {
         await navigator.clipboard.writeText(text);
         toast.success('Text copied to clipboard');
      } catch (err) {
         toast.error('Failed to copy text: ', err);
      }
   }

   const formatURL = (url) => {
      if (!/^https?:\/\//i.test(url)) {
         return `https://${url}`;
      }
      return url;
   };

   return (
      <>
         <div className="py-2 px-4 border-b-2  border-r-2 border-l-2 border-green-400 col-span-3 flex items-center">
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
         <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center justify-center gap-3">
            <div>

               <lord-icon onClick={togglePasswordVisibility} className="cursor-pointer"
                  src="https://cdn.lordicon.com/dicvhxpz.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#242424,secondary:#16c72e"
                  style={{ "width": "30px", "height": "30px" }}>
               </lord-icon>
            </div>
            <div>

               <lord-icon onClick={handleEdit} className="cursor-pointer"
                  src="https://cdn.lordicon.com/exymduqj.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#242424,secondary:#16c72e"
                  style={{ "width": "30px", "height": "30px" }}></lord-icon>
            </div>
            <div>

               <lord-icon onClick={handleDelete} className="cursor-pointer"
                  src="https://cdn.lordicon.com/hwjcdycb.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#242424,secondary:#16c72e"
                  style={{ "width": "30px", "height": "30px" }}>
               </lord-icon>
            </div>
         </div>
      </>
   )
}

export default Password
