import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function AllEvents() {
    const event = useLoaderData()
    console.log(event);
    return (
        <>
            <div className="w-full bg-black flex grid-cols-3 gap-5 px-9 py-5">{
                event?.map((evt, index) => {
                    return (
                        <div key={index} className='w-1/4 bg-white rounded-2xl overflow-hidden'>

                            <div className="h-48 overflow-hidden">
                                <img
                                    src={evt.image || "https://images.unsplash.com/photo-1503424886307-b090341d25d1"}
                                    alt={event.title}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {evt.title}
                                </h2>

                                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                    {evt.description}
                                </p>

                                {/* Date & Time */}
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <span>📅 {new Date(evt.date).toDateString()}</span>
                                    <span>⏰ {evt.time}</span>
                                </div>

                                {/* Action */}
                                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    )

                })
            }
            </div>

        </>
    );
}
