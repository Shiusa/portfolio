// import GithubIcon from '@/icons/GithubIcon'
import React from 'react'
import { Skill } from './SkillCardList'
import Image from 'next/image'

const SkillCard = ({ skillData }: { skillData:Skill }) => {
  return (
    <a href={skillData.path} target='_blank' className='flex columns-2 p-[4%] hover:bg-mauveNeon rounded-md gap-[6%]'>
        <div className='aspect-square w-[50%] flex items-center justify-center bg-blancPur rounded-lg'>
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
        <div className='text-blancPur w-full'>
            <div className='flex flex-col pt-[2%]'>
                <h2 className='font-bold text-base text-mauveNeon'>{skillData.title}</h2>
                <p className='text-sm'>{skillData.subTitle}</p>
            </div>
        </div>
    </a>
  )
}

export default SkillCard