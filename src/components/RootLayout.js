import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from './MainNav'

const RootLayout = () => {
  return (<>
    <MainNav/>
    <Outlet/>
    </>
  )
}

export default RootLayout