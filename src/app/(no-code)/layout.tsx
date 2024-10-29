import React from 'react'

const layout = ({ children } : { children:React.ReactNode }) => {
  return (
        <div className='w-full h-full flex justify-center'>
            {children}
        </div>
  )
}

export default layout