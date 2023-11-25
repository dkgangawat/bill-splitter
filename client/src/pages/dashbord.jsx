import React from 'react'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <>
      <div className=' flex'>
      <div className=' sideBar h-[80vh] border-r border-r-gray w-[200px]'>
      <Sidebar />
      </div>
      <div className=' main'>
      </div>
      </div>
    </>
  )
}

export default Dashboard