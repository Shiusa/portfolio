"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Ribbon = () => {
    return (
        <motion.div className='absolute bottom-[-12%] left-[-5%] w-[110%] h-[24%] bg-bleuAcier flex items-center justify-between px-[10%] rounded-b-lg border-b-[2px] border-mauveNeon gap-4'
            initial={{
                scale: 1.1,
            }}
            animate={{
                scale: 1,
                transition: {
                    duration: 0.2,
                    ease: 'easeInOut'
                }
            }}
        >
            <p className='text-orTamise text-md uppercase tracking-tight text-balance'>Recherche d&apos;un job étudiant</p>
            <motion.div className='bg-orTamise px-[4%] py-[6%] w-[18%] rounded-b-md flex items-center justify-center'
                initial={{
                    opacity: 0,
                    scale: 1.1,
                }}
                animate={{
                    opacity:1,
                    scale: [1,1.1, 1,1.1, 1],
                    transition: {
                        duration: 0.3,
                        delay: 0.1,
                        ease: 'easeInOut',
                    }
                }}
            >
                <p className='text-bleuAcier text-center text-sm leading-3'> <span className='text-2xl font-bold'>2</span> mois</p>
            </motion.div>
        </motion.div>
    )
}

export default Ribbon