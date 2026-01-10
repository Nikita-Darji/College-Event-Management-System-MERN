import React, { useState } from 'react'
import LoginBox from './LoginBox'

export default function Navbar() {
    // useEffect(asyn(req,res) => {
    //   const user = localStorage.get()
    // }, [])
    const [isOpen,setisOpen]=useState(false)

    const checkOpen=()=>{
        setisOpen(true)
    }
    return (
        <>
            <nav className="bg-teal-900 text-white px-6 py-4 flex justify-between items-center fixed w-full z-3">

                {/* Left side */}
                <div className="text-xl font-semibold">
                    College Events
                </div>

                {/* Right side */}
                <ul className="flex space-x-6 text-sm">
                    {/* <li className="hover:text-gray-300 cursor-pointer">
                        Dashboard
                    </li> */}
                    <li className="hover:text-gray-300 cursor-pointer">
                        Add Event
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer">
                        My Events
                    </li>
                    <li onClick={checkOpen} className="hover:text-gray-300 cursor-pointer">
                        LogIn
                    </li>
                </ul>

            </nav>

            {(isOpen) && <LoginBox onClose={()=>setisOpen(false)}/>}

        </>
    )
}
