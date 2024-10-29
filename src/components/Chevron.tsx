"use client"
import ChevronDownIcon from '@/icons/ChevronDownIcon'
import ChevronRightIcon from '@/icons/ChevronRightIcon'
import { useState } from 'react';

const Chevron = ({ isPathActive, toggleSubMenu }: { isPathActive:boolean; toggleSubMenu:()=>void; }) => {

    const [isActive, setIsActive] = useState<boolean>(false);

    
	const handleIsActive = () => {
		setIsActive(prev => !prev);
        toggleSubMenu();
	}

    return (
        <div onClick={handleIsActive}>
            <div className="flex items-center justify-center">
                {isActive? (
                    <ChevronDownIcon size={24} className="text-bleuNeon"/>
                ) : (
                    <ChevronRightIcon size={22} className={`${isPathActive ? 'text-bleuNeon' : 'text-orTamise'}`}/>
                )}
            
            {/* <ChevronRightIcon size={22} /> */}
            </div>
        </div>
    )
}

export default Chevron