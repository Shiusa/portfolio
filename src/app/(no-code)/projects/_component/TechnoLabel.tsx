import React from 'react'

const TechnoLabel = ({ name }:{ name:string; }) => {
  return (
    <div className='bg-mauveNeon flex items-center justify-center px-5 py-1 rounded-sm max-h-8'>
        <p className='text-gray-100 whitespace-nowrap'>{name}</p>
    </div>
  )
}

export default TechnoLabel