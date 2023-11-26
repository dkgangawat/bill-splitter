import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import { MobileMenuContext } from '../context/mobilemenuContext';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const { showSidebar } = useContext(MobileMenuContext);
  return (
    <>
      <div className=' flex'>
      <div className=' sideBar '>
      <Sidebar />
      </div>
      <div className={` main w-full text-white ${showSidebar && " overflow-hidden"} p-4`}>
      <Outlet />
      </div>
      </div>
    </>
  )
}

export default Dashboard