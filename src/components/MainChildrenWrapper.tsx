import React from 'react'

const MainChildrenWrapper = ({children, title}:{children:React.ReactNode; title:string}) => {
  return (
    <div className='w-1/2 h-screen border-r-[1px] border-mauveNeon flex justify-center overflow-scroll scrollbar-hidden'>
      <div className='flex flex-col items-center h-full w-full'>
        <h1 className='pt-[12%] pb-[6%] w-full font-bold text-3xl text-center text-orTamise'>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default MainChildrenWrapper