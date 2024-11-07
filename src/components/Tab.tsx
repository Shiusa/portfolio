"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Tab = ({ title,path, onRemove }:{ title:string; path:string; onRemove: ()=>void }) => {

    const pathName = usePathname();
    const isPathActive = pathName === path;

    const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
        onRemove();
	}
    return (
        <Link href={path} className={`h-full w-auto px-1 ${isPathActive ? 'bg-mauveNeon text-gray-200' : 'bg-grisAnthracite text-orTamise'}`} onClick={(e)=>{e.stopPropagation()}}>
            <div className={` h-[100%] flex items-center justify-between min-w-[6rem] max-w-[10rem] w-auto gap-2 `}>
                <div className='min-w-[8px] min-h-[8px]'></div>
                <div className='flex items-center justify-start max-h-[100%] overflow-hidden'>
                    <p className='whitespace-nowrap'>{title}</p>
                </div>
                <div className='flex items-center justify-center hover:bg-bleuNeon min-w-[24px] min-h-[24px] rounded-sm text-bleuNeon hover:text-bleuAcier'>
                    <button onClick={handleOnClick} className='z-10 w-full h-full'>x</button>
                </div>
            </div>
        </Link>
    )
}

export default Tab