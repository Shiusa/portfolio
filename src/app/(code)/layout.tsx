import React from 'react'

const layout = ({ children, codeChildren } : { children:React.ReactNode; codeChildren:React.ReactNode }) => {
  return (
    <div className='w-full h-full flex columns-2'>
        <div className='w-1/2 h-full border-r-[1px] border-mauveNeon flex justify-center'>
            {children}
        </div>
        <div className='w-1/2 h-full border-l-[1px] border-mauveNeon'>
            {codeChildren}
        </div>
    </div>
  )
}

export default layout