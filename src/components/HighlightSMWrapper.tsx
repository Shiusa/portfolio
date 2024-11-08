import React from 'react'

const HighlightSMWrapper = ({ children }:{ children:React.ReactNode}) => {
  return (
    <span className='bg-mauveNeon py-[0.5%] px-[1%] text-center rounded-sm'>
        {children}
    </span>
  )
}

export default HighlightSMWrapper