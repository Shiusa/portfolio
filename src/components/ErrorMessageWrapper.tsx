import React from 'react'

const ErrorMessageWrapper = ({ message }:{ message?:string }) => {
  return (
    <p className='text-roseNeon text-sm gap-0'>{message}</p>
  )
}

export default ErrorMessageWrapper