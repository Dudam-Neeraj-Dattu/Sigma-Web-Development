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
      console.log(text);
      try {
         await navigator.clipboard.writeText(text);         
         toast.success('Text copied to clipboard');
      } catch (err) {
         toast.error('Failed to copy text: ', err);
      }
   }

   return (
      <>
         <div className="py-2 px-4 border-b-2  border-r-2 border-l-2 border-green-400 col-span-3 flex items-center">{props.site}
            <lord-icon onClick={() => handleCopy(props.site)} className="cursor-pointer"
               style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
               src="https://cdn.lordicon.com/iykgtsbt.json"
               colors="primary:16c72e"
               trigger="hover" >
            </lord-icon> </div>
         <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center">{props.username}
            {props.username.length > 0 && <lord-icon onClick={() => handleCopy(props.username)} className="cursor-pointer"
               style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
               src="https://cdn.lordicon.com/iykgtsbt.json"
               trigger="hover" >
            </lord-icon>}
         </div>
         <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center">{showPassword ? props.password : ('*').repeat(props.password.length)}
            <lord-icon onClick={() => handleCopy(props.password)} className="cursor-pointer"
               style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
               src="https://cdn.lordicon.com/iykgtsbt.json"
               trigger="hover" >
            </lord-icon>
         </div>
         <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center justify-center gap-3">
            <lord-icon onClick={togglePasswordVisibility} className="cursor-pointer"
               src="https://cdn.lordicon.com/dicvhxpz.json"
               trigger="hover"
               stroke="bold"
               colors="primary:#242424,secondary:#16c72e"
               style={{ "width": "30px", "height": "30px" }}>
            </lord-icon>
            <lord-icon onClick={handleEdit} className="cursor-pointer"
               src="https://cdn.lordicon.com/exymduqj.json"
               trigger="hover"
               stroke="bold"
               colors="primary:#242424,secondary:#16c72e"
               style={{ "width": "30px", "height": "30px" }}></lord-icon>
            <lord-icon onClick={handleDelete} className="cursor-pointer"
               src="https://cdn.lordicon.com/hwjcdycb.json"
               trigger="hover"
               stroke="bold"
               colors="primary:#242424,secondary:#16c72e"
               style={{ "width": "30px", "height": "30px" }}>
            </lord-icon>            
         </div>
      </>
   )
}

export default Password
