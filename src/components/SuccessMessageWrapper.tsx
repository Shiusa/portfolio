import React from 'react'

const SuccessMessageWrapper = ({ message }:{ message?:string }) => {
  return (
    <p className='text-lime-400 text-sm gap-0'>{message}</p>
  )
}

export default SuccessMessageWrapper