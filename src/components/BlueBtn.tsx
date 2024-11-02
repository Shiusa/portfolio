import Link from 'next/link'
import React from 'react'

const BlueBtn = ({ path, innerName, className }:{ path:string; innerName:string, className?:string; }) => {
  return (
    <Link href={path} className={`bg-bleuNeon flex items-center justify-center px-[3%] py-[1%] text-center text-lg tracking-tight text-grisAnthracite rounded-md min-w-30 hover:bg-mauveNeon hover:text-gray-100 ${className}`}>
        {innerName}
    </Link>
  )
}

export default BlueBtn