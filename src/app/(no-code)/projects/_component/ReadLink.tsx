"use client"
import { useTabContext } from '@/context/TabProvider';
import Link from 'next/link'
import React from 'react'

const ReadLink = ({ title, id}:{title:string; id:number}) => {
    const { addTab } = useTabContext();
    const handleClick = () => {
        addTab(title, `/projects/${id}`);
    };

    return (
        <Link onClick={handleClick} href={`/projects/${id}`}>
            <p className='text-bleuNeon hover:text-mauveNeon underline underline-offset-2 py-[2%] text-sm transition-colors duration-100 ease-out'>Lire la suite</p>
        </Link>
    )
}

export default ReadLink