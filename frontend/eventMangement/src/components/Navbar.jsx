import React, { useEffect, useState } from 'react'
import LoginBox from './LoginBox'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    
    const [isOpen,setisOpen]=useState(false)

    let token = localStorage.getItem('token')
    let user = JSON.parse(localStorage.getItem('user'))
    // console.log(user.role);
    
    const [userLoggedIn,setuserLoggedIn]=useState(token?true:false)

    useEffect(() => {
      setuserLoggedIn(token?true:false)
    }, [token])
    

    const checkOpen=()=>{
        if(token){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setuserLoggedIn(false)
        }else{
             setisOpen(true)
        }
    }
    return (
        <>
            <nav className="bg-teal-900 text-white px-6 py-4 flex justify-between items-center fixed w-full z-3">

                <div className="text-xl font-semibold">
                    College Events
                </div>

                <ul className="flex space-x-6 text-sm">
                    {user?.role==="event_head" && <li className="hover:text-gray-300 cursor-pointer" onClick={()=>navigate('/addEvent')}>
                        Add Event
                    </li>}
                    
                    {user?.role==="student" && <li className="hover:text-gray-300 cursor-pointer">
                        My Events
                    </li>}
                    <li onClick={checkOpen} className="hover:text-gray-300 cursor-pointer">
                        {userLoggedIn?'LogOut':'LogIn'}
                    </li>
                </ul>

            </nav>

            {(isOpen) && <LoginBox onClose={()=>setisOpen(false)}/>}

        </>
    )
}
