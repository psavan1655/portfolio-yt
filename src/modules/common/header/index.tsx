import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-8 py-4 shadow-sm shadow-slate-600'>
        <div className='text-2xl cursor-pointer font-bold'>SRP Pixels</div>
        <ul className='flex'>
            <li className='text-lg mr-4 cursor-pointer font-thin'>Projects</li>
            <li className='text-lg cursor-pointer font-thin'>Experience</li>
        </ul>
    </div>
  )
}

export default Header