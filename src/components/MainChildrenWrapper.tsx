import React from 'react'

const MainChildrenWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-1/2 h-full border-r-[1px] border-mauveNeon flex justify-center'>
        {children}
    </div>
  )
}

export default MainChildrenWrapper