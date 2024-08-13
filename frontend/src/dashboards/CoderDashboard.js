import React from 'react'
import Header from '../components/Header'
import Chart from '../components/charts/Chart'
import BarRadius from '../components/charts/BarRadius.js'

const CoderDashboard = () => {
  return (
    <div className='w-full ps-4 '>
        <Header/>
        <div className='grid h-20 grid-cols-4 gap-4 w-full mb-4'>
          <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'> card</div>
          <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'> card</div>
          <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'> card</div>
          <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'> card</div>
        </div>
        <div className='lg:grid grid-cols-2 gap-4 w-full mb-4'>
          <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg px-2 py-3 lg:mb-0 mb-4'> <Chart/></div>
          <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg pb-3'><BarRadius/></div>
        </div>
        <div className='grid grid-cols-2 gap-4 w-full'>
          <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg px-2'> </div>
          <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'>ghg</div>
        </div>
    </div>
  )
}

export default CoderDashboard
