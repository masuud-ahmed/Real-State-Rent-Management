import React from 'react'
import Nav from '../../components/TenDhashContent/Nav'
import Side from '../../components/TenDhashContent/Side'
import CardItem from '../../components/TenDhashContent/CardItem'
import ResentItem from '../../components/TenDhashContent/ResentItem'

function Dhashboard() {
  return (
    <div className='flex bg-[#f6f6f6]'>
    <Side/>
    <Nav/>
    <div className='mt-[70px] h-100vh w-full p-11'>
        <div className='flex flex-col'>
            <h3 className='font-bold text-xl text-[#00befe]'>Dashboard</h3>
            <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
        </div>
        {/* content */}
      <CardItem/>
      <ResentItem/>

    </div>
</div>
  )
}

export default Dhashboard