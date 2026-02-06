import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full px-24 py-3 flex items-center justify-between'>
        <h3>Orange</h3>
        <div className='flex px-4 py-2 bg-orange-600 text-white text-sm rounded-md gap-2'>
            <h3>Favourites</h3>
            <h4>{data.filter(item => item.added).length}</h4>
        </div> 
    </div>
  )
}

export default Navbar
