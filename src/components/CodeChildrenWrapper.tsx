import React from 'react'

const CodeChildrenWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-1/2 h-full border-l-[1px] border-mauveNeon flex justify-center'>
        {children}
    </div>
  )
}

export default CodeChildrenWrapper