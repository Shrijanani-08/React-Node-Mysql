import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './navs/Navbar'

const Template = () => {
  return (
    <div className='w-full flex flex-row p-0 '>
       <div className='flex basis-1/7  relative'>
         <Navbar/>
       </div>
       <div className='flex basis-6/7 '>
         <Outlet/>
       </div>
    </div>
  )
}

export default Template
