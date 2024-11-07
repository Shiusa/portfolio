import { useTabContext } from '@/context/TabProvider';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Tab = ({ title,path, onRemove }:{ title:string; path:string; onRemove: ()=>void }) => {

    const pathName = usePathname();
    // console.log("tab pathname: ", pathName)
    const [isRemoving, setIsRemoving] = useState(false);
    const { addTab } = useTabContext();
    const router = useRouter();

    const isPathActive = pathName === path;

    const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>, btnPath:string) => {
		e.preventDefault();
		e.stopPropagation();
        setIsRemoving(true);

        console.log("tab delete: ", pathName)
        console.log("btn delete: ", btnPath)
        setTimeout(() => {
            onRemove();
            if (pathName === btnPath) {
                addTab("Accueil", "/");
                router.push('/');
            }
        }, 150);
	}
    return (
        <Link href={path} className={`h-full w-auto px-1 transition-colors duration-100 ease-out ${isPathActive ? 'bg-mauveNeon text-gray-200' : 'bg-grisAnthracite text-orTamise'} ${isRemoving ? 'animate-fadeOut' : 'animate-fadeIn'}`} onClick={(e)=>{e.stopPropagation()}}>
            <div className={` h-[100%] flex items-center justify-between min-w-[6rem] max-w-[10rem] w-auto gap-2 `}>
                <div className='min-w-[8px] min-h-[8px]'></div>
                <div className='flex items-center justify-start max-h-[100%] overflow-hidden'>
                    <p className='whitespace-nowrap'>{title}</p>
                </div>
                <div className='flex items-center justify-center hover:bg-bleuNeon min-w-[24px] min-h-[24px] rounded-sm text-bleuNeon hover:text-bleuAcier transition-colors duration-100 ease-in-out'>
                    <button onClick={(e)=>{handleOnClick(e, path)}} className='z-10 w-full h-full'>x</button>
                </div>
            </div>
        </Link>
    )
}

export default Tab