import React from 'react'

const CodeChildrenWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-1/2 h-full border-l-[1px] border-mauveNeon flex justify-center'>
      <div className='h-full w-full flex justify-center items-center overflow-hidden'>
        <div className='h-full w-full flex justify-center'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CodeChildrenWrapper