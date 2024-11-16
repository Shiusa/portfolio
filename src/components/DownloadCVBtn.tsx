'use client'
import DownloadIcon from '@/icons/DownloadIcon'
import React from 'react'
import { motion } from 'framer-motion'

const DownloadCVBtn = () => {
    return (
        <motion.a download={true} href="/cv.pdf" className='flex flex-row items-center justify-center bg-bleuNeon hover:bg-mauveNeon w-60 h-20 px-4 py-4 text-center leading-5 tracking-tight uppercase text-balance text-grisAnthracite hover:text-gray-200 text-lg rounded-md transition-colors duration-100 ease-in-out'
            variants={{
                hidden: {
                    opacity: 0,
                    y: 100
                },
                visible: {
                    opacity: 1,
                    y: 0,
                }
            }}
            initial="hidden"
            animate="visible"
            transition={{
                delay: 0.3,                
            }}
        >
            <span><DownloadIcon size={40} /></span>Télécharger mon CV
        </motion.a>
    )
}

export default DownloadCVBtn