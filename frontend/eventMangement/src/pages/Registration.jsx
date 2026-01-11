import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Registration() {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'))

  const {id} = useParams()

  const [registerData, setRegisterData] = useState({
    studentname: '',
    studentemail: '',
    phone: '',
    department: '',
    year: '',
    studentId: user._id
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`http://localhost:5000/register/${id}`, registerData)
      .then((res) => {
        console.log(res);
        navigate('/')

      })
      .catch(error => {
        console.log(error);

      })
  }
  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold mb-2">
          Event Registration Form
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Please fill in your details to register for the event.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Student Name */}
          <div>
            <label className="text-sm font-medium">Student Name</label>
            <input
              type="text"
              name="studentname"
              value={registerData.studentname}
              onChange={handleChange}
              className="w-full mt-1 border px-3 py-2 rounded"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="studentemail"
              value={registerData.studentemail}
              onChange={handleChange}
              className="w-full mt-1 border px-3 py-2 rounded"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={registerData.phone}
              onChange={handleChange}
              className="w-full mt-1 border px-3 py-2 rounded"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label className="text-sm font-medium">Department</label>
            <input
              type="text"
              name="department"
              value={registerData.department}
              onChange={handleChange}
              className="w-full mt-1 border px-3 py-2 rounded"
              placeholder="Computer Science"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Year / Semester</label>
            <select
              name="year"
              value={registerData.year}
              onChange={handleChange}
              className="w-full mt-1 border px-3 py-2 rounded"
              required
            >
              <option value="" disabled>Select</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="Final Year">Final Year</option>
            </select>
          </div>


          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded hover:bg-teal-700"
            >
              Register for Event
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
