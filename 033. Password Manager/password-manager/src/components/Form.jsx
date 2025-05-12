import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setForm, savePassword } from "../redux/passwordSlice";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Manager = () => {

   const dispatch = useDispatch();
   const form = useSelector((state) => state.passwords.form);
   // const passwords = useSelector((state) => state.passwords.passwords);
   const [showPassword, setShowPassword] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(setForm({ ...form, [name]: value }));
   }

   const handleSave = () => {
      if (form.site && form.password) {
         toast("Password saved successfully!")         
         dispatch(savePassword());
      }
      else {
         toast.error("Fill both URL and Password fields!");                  
      }
   }
   
   // useEffect(() => {
   //    console.log("Updated passwords:", passwords);
   // }, [passwords]);

   const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev);
   };

   return (
      <div className="flex flex-col justify-center items-center mt-6 w-[80%] m-auto gap-3 max-md:w-[95%]">
         <div className="name text-2xl font-bold max-[480px]:hidden">
            <span className='text-green-500'> &lt;</span>
            <span>NeePass</span>
            <span className='text-green-500'>/&gt;</span>
         </div>
         <div className="additional-info text-lg text-gray-700 max-[480px]:hidden">
            <p>Manage your passwords securely.</p>
         </div>
         <div className="additional-info text-lg font-bold text-gray-700 min-[480px]:hidden">
            <p>Enter the details.</p>
         </div>
         <div className="form flex flex-col justify-center items-center gap-4 w-3/4 max-xl:w-full">
            <div className="sitename w-full max-[480px]:w-[90%]">
               <input value={form.site} onChange={handleChange} className="px-3 py-1.5 border-2 border-green-400 w-full rounded-2xl focus:border-green-200 focus:outline-none" type="url" name="site" placeholder="Enter the website URL" required />
            </div>
            <div className="username relative w-full flex gap-10 max-[480px]:flex-col max-[480px]:gap-4 max-[480px]:w-[90%]">
               <input value={form.username} onChange={handleChange} className="px-3 py-1.5 border-2 border-green-400 w-full rounded-2xl focus:border-green-200 focus:outline-none" type="text" name="username" placeholder="Enter your username" />
               <input value={form.password} onChange={handleChange} className="px-3 py-1.5 border-2 border-green-400 w-full rounded-2xl focus:border-green-200 focus:outline-none" type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" required />
               {
                  showPassword ? (
                     <FaRegEye
                        className='absolute cursor-pointer right-3 top-2 max-[480px]:top-16'
                        size={25}
                        onClick={togglePasswordVisibility}
                     />
                  ) : (
                     <FaRegEyeSlash
                        className='absolute cursor-pointer right-3 top-2 max-[480px]:top-16'
                        size={25}
                        onClick={togglePasswordVisibility}
                     />
                  )
               }
            </div>

            <div className="save">
               <button onClick={handleSave}
                  className="bg-green-200 text-green-900 font-bold py-2 px-4 rounded-lg border-2 border-transparent hover:bg-green-100 hover:border-green-400 transition-all duration-300 ease-in-out flex items-center gap-2 cursor-pointer">
                  <lord-icon
                     src="https://cdn.lordicon.com/sbnjyzil.json"
                     trigger="hover"
                     stroke="bold">
                  </lord-icon>
                  Save Password
               </button>
               <ToastContainer autoClose={2000} />
            </div>

            <div className='w-[90%] min-[480px]:hidden h-[1px] bg-green-600'>

            </div>

            <div className="min-[480px]:self-start">
            <h1 className='self-start text-2xl font-bold text-green-800' >Your Passwords</h1>
            </div>
         </div>
      </div>
   )
}

export default Manager
