import React from 'react'

const UnderlineSMWrapper = ({ children }:{ children:React.ReactNode}) => {
  return (
    <span className='text-mauveNeon '>
        {children}
    </span>
  )
}

export default UnderlineSMWrapper