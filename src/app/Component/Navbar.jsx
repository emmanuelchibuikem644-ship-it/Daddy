import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#181c12] h-16 flex items center ">
      <img src="/images/logo.png" className="rounded-full cursor-pointer" />
      <strong className='text-white mt-4'>Vaultx</strong>
      <ul className='text-[#94a3bb] flex gap-5 mt-4'>
        <li className='cursor-pointer hover:text-white pl-30'>Dashboard</li>
        <li className='cursor-pointer hover:text-white'>Crypto Trade</li>
        <li className='cursor-pointer hover:text-white'>Market Cap</li>
        <li className='cursor-pointer hover:text-white'>Giftcard</li>
        <li className='cursor-pointer hover:text-white'>Trade History</li>
      </ul>

      <ul className='flex pl-30 space-x-10 justify-center items-center'>
        <img src="/images/help.png" className="w-7 h-7 cursor-pointer"/>
        <img src="/images/setting.png" className="w-7 h-7  cursor-pointer" />
        <div className='bg-white flex items-center p-5 h-5 rounded-3xl gap-2 hover:bg-gray-500 cursor-pointer'>
          <img src="/images/person.svg" className="w-7"/>
          <strong className='font-extrabold'>Login</strong>
        </div>
        <div className='bg-[#B9A7FF] flex items-center p-5 h-5 rounded-3xl hover:bg-gray-500 cursor-pointer'>
          <strong className='font-extrabold'>Sign Up</strong>
        </div>
      </ul>    
    </div>
  )
}

export default Navbar