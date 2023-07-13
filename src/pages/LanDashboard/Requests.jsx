import React from 'react'
import Sidebar from '../../components/LanDashboardContents/Sidebar'
import Navs from '../../components/LanDashboardContents/Navs'
import RequestsContent from '../../components/LanDashboardContents/RequestsContent'

function Requests() {
  return (
    <div className='flex bg-[#f6f6f6]'>
    <Sidebar/>
    <Navs/>
    <div className='m-[70px] ml-[210px] h-100vh w-full p-11'>
        <div className='flex flex-col'>
            <h3 className='font-bold text-xl text-[#00befe]'>Requests</h3>
            <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
        </div>
        {/* content */}
        <RequestsContent/>
    </div>
    </div>
  )
}

export default Requests