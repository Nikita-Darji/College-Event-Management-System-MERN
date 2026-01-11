import { useState } from 'react'

import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import axios from 'axios'
import EventDetails from './pages/EventDetails'
import AddEvent from './pages/AddEvent'
import Registration from './pages/Registration'

export default function Helllo() {

  const getEventData = async()=>{
    let allEvt = []
    await axios.get('http://localhost:5000/events').then(res=>{
      allEvt = res.data
    })
      return (allEvt)
    }
    
  const router = createBrowserRouter([
    {path:'/',element:<MainNavigation/>,children:[
      {path:'/',element:<Home/>,loader:getEventData},
      {path:'/eventDetails/:id',element:<EventDetails/>,loader:getEventData},
      {path:'/addEvent',element:<AddEvent/>},
      {path:'/registration/:id',element:<Registration/>,loader:getEventData},

    ]}
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}
