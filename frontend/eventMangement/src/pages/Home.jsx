import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AllEvents from '../components/AllEvents';

export default function Home() {
  
  
  return (
    <>
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519660837772-a823cd69d885?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Manage College Events Easily
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Create, manage and track college events with one simple platform.
        </p>
        <button className="bg-teal-700 hover:bg-teal-800 px-6 py-3 rounded text-lg transition">
          Get Started
        </button>
      </div>
    </section>
    <div>
      <AllEvents/>
    </div>

    </>
  )
}
