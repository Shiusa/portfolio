import Link from 'next/link'
import React from 'react'

const BlueBtn = ({ path, innerName }:{ path:string; innerName:string }) => {
  return (
    <Link href={path} className='bg-bleuNeon text-center p-[4%] text-grisAnthracite rounded-md min-w-30 w-40'>
        {innerName}
    </Link>
  )
}

export default BlueBtn