"use client"
import { useNavbarContext } from '@/context/ToggleNavbarProvider'
import React from 'react'

const ToggleBtn = () => {

    const { isNavbarOpen,toggleNavbar } = useNavbarContext()
    
    return (
        <button onClick={toggleNavbar} className="h-full w-full flex items-center justify-center text-grisAnthracite">
            {isNavbarOpen ? "close" : "open"}
        </button>
    )
}

export default ToggleBtn