import Link from 'next/link'
import React, { ComponentPropsWithoutRef } from 'react'

type BlueBtnPropsType = {
  path: string;
  innerName: string;
  className?: string;
} & ComponentPropsWithoutRef<"a">;

const BlueBtn = ({ path, innerName, className, ...props }:BlueBtnPropsType) => {
  return (
    <Link href={path} className={`bg-bleuNeon flex items-center justify-center px-[3%] py-[1%] text-center text-lg tracking-tight text-grisAnthracite rounded-md min-w-30 hover:bg-mauveNeon hover:text-gray-100 ${className} transition-colors duration-100 ease-out`} {...props}>
        {innerName}
    </Link>
  )
}

export default BlueBtn