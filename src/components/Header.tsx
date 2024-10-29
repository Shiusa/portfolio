import React from 'react'

const Header = () => {
  return (
    <header className='h-[4%] flex'>
        <div className='lg:w-1/5 xl:w-[10.5%] bg-bleuAcier text-orTamise lg:flex items-center lg:justify-start pl-[4%] xl:pl-[2%] hidden'>
            <p className='xl:text-left w-full'>Nguyen Kyle</p>
        </div>
        <div className='flex items-start justify-center w-full lg:w-4/5 xl:w-[89.5%] bg-grisAnthracite'>
            <div className='bg-roseNeon w-[20%] h-3/4 rounded-b-full'></div>
        </div>
    </header>
  )
}

export default Header