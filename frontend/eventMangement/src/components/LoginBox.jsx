import React, { useState } from 'react'
import axios from 'axios'

export default function LoginBox({onClose}) {
    
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [isSignUp,setisSignUp]=useState(false)

    // localStorage.clear()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        let SignUp = isSignUp?'signUp':'logIn'
        await axios.post(`http://localhost:5000/${SignUp}`,{email,password})
        .then((res)=>{
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('user',JSON.stringify(res.data.user))
            onClose()
        })
        .catch(error=>{
            console.log(error);
        })
    }

  return (

 <div className="fixed top-10 w-full min-h-screen flex items-center justify-center bg-gray-100 z-2">

  <div className="bg-white p-8 rounded-lg shadow-md w-96">
     <button onClick={onClose} className=" text-gray-700 hover:text-black text-2xl z-2"
        >
          ×
        </button>
    <h2 className="text-2xl font-semibold text-center mb-6">{isSignUp?'SignIn':'LogIn'}</h2>

    <form className="space-y-2" onSubmit={handleSubmit}>
      <input
        onChange={(e)=>setemail(e.target.value)}
        type="email"
        placeholder="Email"
        className="w-full border px-4 py-2 rounded"
      />

      <input
        onChange={(e)=>setpassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="w-full border px-4 py-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
      >
        {isSignUp?'SignIn':'LogIn'}
      </button>
    </form>

    <p className="text-sm text-center mt-4" onClick={()=>setisSignUp(pre=>!pre)}>
     {isSignUp?'Already have an Account':'Don’t have an account?'}
    </p>
  </div>

</div>

  )
}
