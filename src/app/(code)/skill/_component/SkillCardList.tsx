'use client'
import React from 'react'
import SkillCard from './SkillCard'
import { skillList } from '@/data/data'
import { motion } from 'framer-motion'

const SkillCardList = () => {

    return (
        <div className='h-full w-[60%] xl:w-[68%] 2xl:w-[60%]'>
            <motion.div className='grid grid-cols-1 xl:grid-cols-2'
                variants={{
                    hidden: {
                        opacity: 1
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            // duration: 0.5,
                            staggerChildren: 0.025
                        }
                    }
                }}
                initial="hidden"
                animate="visible"
            >
                {skillList.map(skill=>(
                    <SkillCard key={skill.id} skillData={skill} />
                ))}
            </motion.div>
        </div>
    )
}

export default SkillCardList