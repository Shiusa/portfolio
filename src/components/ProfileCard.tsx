import GithubIcon from '@/icons/GithubIcon'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='aspect-[11/16] h-full w-full bg-blancPur rounded-lg flex flex-col  p-[3.5%]'>
        <div className='bg-bleuAcier h-[64%] w-full rounded-t-lg flex flex-col p-[4%]'>
            <div className='flex items-center justify-center rounded-md bg-blancPur p-[2.5%] h-[18%]'>
                <p className='text-bleuAcier text-2xl'>Nguyen Kyle</p>
            </div>
            <div className='w-full h-full'>

            </div>
        </div>
        <div className='flex justify-center py-[8%] px-[4%] border-t-4 border-mauveNeon mt-[3.5%]'>
            <p className='text-bleuAcier text-base text-center'>
            Student in computer sciences and I&apos;m looking for an internship.<br />
            This portfolio is a side project in Next.JS
            </p>
        </div>
        <div className='flex items-center justify-center gap-[2%] p-[1.5%]'>
            <GithubIcon size={52} className='text-mauveNeon' />
            <GithubIcon size={52} className='text-mauveNeon' />
            <GithubIcon size={52} className='text-mauveNeon' />
            <GithubIcon size={52} className='text-mauveNeon' />
        </div>
    </div>
  )
}

export default ProfileCard