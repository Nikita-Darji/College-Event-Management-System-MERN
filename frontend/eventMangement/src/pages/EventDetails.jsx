import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

export default function EventDetails() {

    let user = JSON.parse(localStorage.getItem('user'))

    const navigate = useNavigate()
    const { id } = useParams()
    const events = useLoaderData()
    console.log(events);

    const event = events.find(env=>env._id===id)
    
    return ( 
            <div className='w-full bg-white rounded-2xl overflow-hidden px-5 py-5'>

            <div className="h-48 overflow-hidden">
                <img
                    src={event.image || "https://images.unsplash.com/photo-1503424886307-b090341d25d1"}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {event.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {event.description}
                </p>

                {/* Date & Time */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>📅 {new Date(event.date).toDateString()}</span>
                    <span>⏰ {event.time}</span>
                </div>

                {/* Action */}
                <button onClick={()=>navigate(`/registration/${id}`)} className="w-full bg-teal-900 hover:bg-teal-600 text-white py-2 rounded-lg font-medium transition">
                    Register Now
                </button>
            </div>
        </div>
    )
}
