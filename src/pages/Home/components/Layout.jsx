import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import YogaFooter from './Footer'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <YogaFooter  />
    </div>
  )
}
