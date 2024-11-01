import GithubIcon from '@/icons/GithubIcon'
import LinkedInIcon from '@/icons/LinkedInIcon'
import MailIcon from '@/icons/MailIcon'
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
            Etudiant informatique en 3ème année
            à la recherche d&apos;un stage
            de début février à mai pour 75 jours.<br /><br />
            Ce portfolio est un projet fait en Next JS.
            </p>
        </div>
        <div className='flex items-center justify-center gap-[2%] p-[1.5%]'>
            <a href="https://github.com/Shiusa?tab=repositories">
                <GithubIcon size={52} className='text-mauveNeon' />
            </a>
            <a href="mailto:kylenguyen60@hotmail.com">
                <MailIcon size={52} className='text-mauveNeon' />
            </a>
            <a href="https://github.com/Shiusa?tab=repositories">
                <LinkedInIcon size={52} className='text-mauveNeon p-[10%]' />
            </a>
        </div>
    </div>
  )
}

export default ProfileCard