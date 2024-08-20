import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-600 text-white py-4'>
      <div className="logo">
        <span className='font-bold text-2xl mx-8'>Todo-App</span>
      </div>
      <ul className="flex gap-8 mx-9 text-2xl ">
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
