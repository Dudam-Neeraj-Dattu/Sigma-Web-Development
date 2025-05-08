import React from 'react'

const Password = (props) => {
   return (
      <>
         <div className="py-2 px-4 border-b-2  border-r-2 border-l-2 border-green-400 col-span-3 flex items-center">{props.website}
            <lord-icon className="cursor-pointer"
               style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
               src="https://cdn.lordicon.com/iykgtsbt.json"
               colors="primary:16c72e"
               trigger="hover" >
            </lord-icon> </div>
         <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center">{props.username}
            <lord-icon className="cursor-pointer"
               style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
               src="https://cdn.lordicon.com/iykgtsbt.json"
               trigger="hover" >
            </lord-icon>
         </div>
         <div className="py-2 px-4 border-b-2 border-r-2 border-green-400 flex items-center">{props.password}
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
      </>
   )
}

export default Password
