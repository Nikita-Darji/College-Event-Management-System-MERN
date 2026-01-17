import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useSearchParams } from 'react-router-dom'

export default function RegisteredStudents () {

    const {id} = useParams()
    const [studData,setstudData]=useState([])
    useEffect(() => {
        const handleData=async(req,res)=>{
            const data = await axios.get(`http://localhost:5000/register/event/${id}`)
            .then(res=>{
                setstudData(res.data)
            })
        }
        handleData()
    }, [id])
    
    return(
        <>
        {studData.length === 0 && (
        <div className='w-full border mt-20'>
            <p>No Registered Student found</p>
        </div>)}
        
        {studData.length > 1 && (
        <div className="overflow-x-auto">
            <table className='w-full border mt-20'>
                <thead className='bg-teal-900 text-white'>
                    <tr>
                        <th className='border p-2'>Student Name</th>
                        <th className='border p-2'>Student Email</th>
                        <th className='border p-2'>Phone Number</th>
                        <th className='border p-2'>Department</th>
                        <th className='border p-2'>Year</th>
                    </tr>
                </thead>
                <tbody>
                {studData.map((stud)=>(
                    <tr key={stud._id}>
                         <td className='border p-2'>{stud.studentname}</td>
                         <td className='border p-2'>{stud.studentemail}</td>
                         <td className='border p-2'>{stud.phone}</td>
                         <td className='border p-2'>{stud.department}</td>
                         <td className='border p-2'>{stud.year}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>)}
        </>
    )

}

