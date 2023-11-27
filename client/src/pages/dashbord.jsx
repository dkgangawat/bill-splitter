import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import { MobileMenuContext } from '../context/mobilemenuContext';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const { showSidebar } = useContext(MobileMenuContext);
  return (
    <>
      <div className={` inline-flex ${showSidebar ? " overflow-hidden" :""}`}>
      <div className={` sideBar inline-block  `}>
      <Sidebar />
      </div>
      <div className={` main w-screen inline-block md:w-full text-white  p-4`}>
      <Outlet />
      </div>
      </div>
    </>
  )
}

export default Dashboard