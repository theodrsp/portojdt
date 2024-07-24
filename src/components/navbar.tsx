import React from 'react'

const navbar = () => {
  return (
    <div className='flex flex-row w-full justify-between px-5 py-8 shadow-md bg-gray-800 text-white'>
      <h2 className='text-large' >Name</h2>
      <div className='flex flex-row gap-8'>
        <a href="">Home</a>
        <a href="">Summary</a>
        <a href="">Projects</a>
        <a href="">Education</a>
      </div>

    </div>
  )
}

export default navbar

