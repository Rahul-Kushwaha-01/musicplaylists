import React from 'react'

const Card = ({img,name,artist,added,handleclick,index}) => {
  return (
    <div className='w-60 px-4 py-8 bg-zinc-100 rounded-md flex gap-2 relative mt-10'>
      <div className='w-24 h-24 bg-amber-700 rounded-md overflow-hidden'>
        <img className='h-full w-full object-cover' src={img} alt="" />
      </div>
      <div className=''>
        <h1 className='text-xl leading-none'>{name}</h1>
        <h5 className='text-sm'>{artist}</h5>
      </div>
      <button onClick={()=>handleclick(index)} className={`whitespace-nowrap text-sm  px-4 py-2 ${added === false ? "bg-orange-600" : "bg-teal-600"} rounded-full absolute text-white -bottom-8 left-[50%]  -translate-x-[50%] -translate-y-[50%]`}>{added === false ? "Add to Favourites" : "Added"}</button>
    </div>
  )
}

export default Card
