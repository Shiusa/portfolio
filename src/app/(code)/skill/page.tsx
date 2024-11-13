import CodeChildrenWrapper from '@/components/CodeChildrenWrapper'
import MainChildrenWrapper from '@/components/MainChildrenWrapper'
import PrismLoader from '@/components/PrismLoader'
import React from 'react'
import SkillCardList from './_component/SkillCardList'

const SkillPage = () => {

  const codeString = `
import React from 'react'
import Image from 'next/image'
import { Skill } from '@/types/types'
import { skillList } from '@/data/data'

const SkillCard = ({ skillData }: { skillData:Skill }) => {
  return (
    <a href={skillData.path} target='_blank' className='flex columns-2 p-[4%] hover:bg-mauveNeon rounded-md gap-[6%] group'>
        <div className='w-[40%] h-full flex items-center justify-center'>
            <div className='aspect-square w-[100%] flex items-center justify-center bg-blancPur rounded-lg'>
                <div className='relative w-[80%] h-[80%] flex items-center justify-center'>
                    <Image
                        alt={skillData.imgAlt}
                        src={skillData.image}
                        fill
                        className='object-contain object-center'
                    />
                </div>
            </div>
        </div>
        <div className='text-gray-100 w-full'>
            <div className='flex flex-col pt-[2%]'>
                <h2 className='font-bold text-base text-mauveNeon group-hover:text-bleuNeon'>{skillData.title}</h2>
                <p className='text-sm'>{skillData.subTitle}</p>
            </div>
        </div>
    </a>
  )
}

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
  `

  return (
    <>
      <MainChildrenWrapper title='Outils et technologies'>
        {/* <h1 className='pt-[12%] pb-[6%] w-full font-bold text-3xl text-center text-blancPur'>Outils et technologies</h1> */}
        <div className='w-full flex justify-center'>
          <SkillCardList />
        </div>
      </MainChildrenWrapper>
      <CodeChildrenWrapper>

        <PrismLoader>
          {codeString}
        </PrismLoader>

      </CodeChildrenWrapper>
    </>
  )
}

export default SkillPage