// import GithubIcon from '@/icons/GithubIcon'
import React from 'react'
import Image from 'next/image'
import { Skill } from '@/types/types'
import { motion } from 'framer-motion'

const SkillCard = ({ skillData }: { skillData:Skill }) => {
  return (
    <motion.a href={skillData.path} target='_blank' className='flex columns-2 p-[4%] hover:bg-mauveNeon rounded-md gap-[6%] group transition-colors duration-100 ease-in-out'
        variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
            }
        }}
        transition={{
            duration: 0.5,
            ease: 'easeOut'
        }}
    >
        <div className='w-[40%] h-full flex items-center justify-center'>
            <div className='aspect-square w-[100%] flex items-center justify-center bg-blancPur rounded-lg'>
                <div className='relative w-[80%] h-[80%] flex items-center justify-center'>
                    <Image
                        alt={skillData.imgAlt}
                        src={skillData.image}
                        fill
                        className='object-contain object-center'
                        // style={{objectFit:'contain', objectPosition:'center'}}
                    />
                </div>
                {/* <GithubIcon className='w-[100%] h-[100%] text-mauveNeon' /> */}
            </div>
        </div>
        <div className='text-gray-100 w-full'>
            <div className='flex flex-col pt-[2%]'>
                <h2 className='font-bold text-base text-mauveNeon group-hover:text-bleuNeon'>{skillData.title}</h2>
                <p className='text-sm'>{skillData.subTitle}</p>
            </div>
        </div>
    </motion.a>
  )
}

export default SkillCard