import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddEvent() {

    const navigate=useNavigate()

    const [eventData, seteventData] = useState({
        title:'',
        description:'',
        date:'',
        time:'',
        location:''
    })
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:5000/events/',eventData)
        .then((res)=>{
            console.log(res);
             navigate('/')
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleChange=(e)=>{
        seteventData({...eventData,[e.target.name]:e.target.value})
    }
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Add Event
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Event Title"
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Event Description"
            className="w-full border px-4 py-2 rounded"
            rows="3"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Event Location"
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
          >
            Add Event
          </button>

        </form>
      </div>
    </div>
  )
}
