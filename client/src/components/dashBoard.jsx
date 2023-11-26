import React, { useState } from 'react'

const DashboardHome = () => {
  const [Expantion , setExpention]  = useState([]);
  return (
    <div className=' w-full'>
    <div className='  w-full'>
    <button className=' py-1 px-2 bg-danger hover:bg-danger2 rounded-sm block ml-auto'>Add Expention</button>
    </div>
    {
      Expantion.length > 0 ? (
        <div className=''>
        </div>
      ) : (
        <div className=' flex justify-center  flex-col items-center select-none text-center my-5'>
        {/* <i className='fas fa-5x fa-sad-tear text-gray'></i> */}
        <i className='fa-solid fa-check fa-5x text-gray'></i>
        <h1 className='text-center text-2xl font-bold text-gray'>You All Settle</h1>
        <span className=' text-gray'>Add An by Above Add Expantion Button</span>
        </div>
      )
    }
    </div>
  )
}

export default DashboardHome