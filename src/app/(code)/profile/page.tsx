import CodeChildrenWrapper from '@/components/CodeChildrenWrapper'
import MainChildrenWrapper from '@/components/MainChildrenWrapper'
import ProfileCard from '@/components/ProfileCard'
import React from 'react'

const ProfilePage = () => {
  return (
    <>
      <MainChildrenWrapper>
        <div className='flex flex-col items-center h-full w-full'>
          <h1 className='pt-[12%] pb-[6%] w-full font-bold text-3xl text-center text-blancPur'>Profile Overview</h1>
          <div className='h-[72%]'>
            <ProfileCard />
          </div>
        </div>
      </MainChildrenWrapper>
      <CodeChildrenWrapper>
        <div>
          test2
        </div>
      </CodeChildrenWrapper>
    </>
  )
}

export default ProfilePage