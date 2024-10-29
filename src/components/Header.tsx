import React from 'react'

const Header = () => {
  return (
    <header className='h-[4%] flex'>
        <div className='w-[10.5%] bg-bleuAcier text-orTamise flex items-center pl-[2%]'>
            Nguyen Kyle
        </div>
        <div className='flex items-start justify-center w-[89.5%] bg-grisAnthracite'>
            <div className='bg-roseNeon w-[20%] h-3/4 rounded-b-full'></div>
        </div>
    </header>
  )
}

export default Header