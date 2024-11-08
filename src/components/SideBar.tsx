"use client"
// import React, { useEffect, useState } from 'react'
import SocialBar from './SocialBar'
import Navbar from './Navbar'
import { useNavbarContext } from '@/context/ToggleNavbarProvider'

const SideBar = () => {

    const {isNavbarOpen} = useNavbarContext();
    // const [playAnimation, setPlayAnimation] = useState(isNavbarOpen);

    // useEffect(()=>{
    //     if (isNavbarOpen) {
    //         setPlayAnimation(true)
    //     } else {
    //         // Attendre la durée de l'animation avant de retirer l'élément du DOM
    //         setTimeout(() => setPlayAnimation(false), 150); // 300ms correspond à la durée de l'animation
    //     }
    // }, [isNavbarOpen])
    return (
        isNavbarOpen ? (
            // ${playAnimation ? 'animate-fadeIn' : 'animate-fadeOut'}
            <div className={`lg:w-1/5 xl:w-[16%] 2xl:w-[14%] w-[50%] h-full lg:h-full flex columns-2 lg:overflow-hidden absolute top-0 left-0 lg:static z-20 lg:z-0`}>
                <div className="h-full w-[10%] lg:w-[26%] xl:w-[28%] 2xl:w-[30%] border-r-[1px] border-mauveNeonClair">
                    <SocialBar />
                </div>
                <Navbar />
            </div>
        ) : <></>
    )
}

export default SideBar