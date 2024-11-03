import React from 'react'
import SkillCard from './SkillCard'
import { skillList } from '@/data/data'

const SkillCardList = () => {

    return (
        <div className='h-full w-[60%] xl:w-[68%] 2xl:w-[60%]'>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
                {skillList.map(skill=>(
                    <SkillCard key={skill.id} skillData={skill} />
                ))}
            </div>
        </div>
    )
}

export default SkillCardList