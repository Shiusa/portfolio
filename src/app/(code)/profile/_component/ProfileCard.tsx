import GithubIcon from '@/icons/GithubIcon'
import LinkedInIcon from '@/icons/LinkedInIcon'
import MailIcon from '@/icons/MailIcon'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='aspect-[11/16] h-full w-full bg-blancPur rounded-lg flex flex-col  p-[3.5%] border-[2px] border-orTamise'>
        <div className=' bg-bleuAcier bg-gradient-to-t from-mauveNeon to-orTamise h-[44%] w-full rounded-t-lg flex flex-col p-[4%]'>
            <div className='flex items-center justify-center rounded-md bg-blancPur p-[2.5%] min-h-[18%] border-[1px] border-orTamise'>
                <p className='text-mauveNeon text-2xl'>Nguyen Kyle</p>
            </div>
            <div className='w-full h-full'>

            </div>
        </div>
        {/* border-t-4 border-mauveNeon */}
        <div className='flex flex-col justify-center py-[8%] px-[8%]  mt-[3.5%] text-bleuAcier text-base leading-tight text-center text-pretty gap-2'>
            <p className=''>
            Etudiant informatique en 3ème année
            à la recherche d&apos;un stage
            de début février à mai pour <br /><span className='underline underline-offset-4 text-mauveNeon font-bold text-lg'>75 jours</span>
            </p>
            <p>
                {`J'ai une préférence pour le backend mais je m'en sors en front aussi.`}
            </p>
            <p className='leading-7'>
                Ce portfolio est un projet realisé avec <br /><span className='underline underline-offset-8 px-[3%] py-[1.5%] bg-bleuAcier text-orTamise rounded-sm text-lg'>Next JS</span>.
            </p>
        </div>
        <div className='flex items-center justify-center gap-[8%] p-[1.5%]'>
            <a href="https://github.com/Shiusa?tab=repositories">
                <GithubIcon size={52} className='text-bleuNeon hover:text-mauveNeon' />
            </a>
            <a href="mailto:kylenguyen60@hotmail.com">
                <MailIcon size={52} className='text-bleuNeon hover:text-mauveNeon' />
            </a>
            <a href="https://github.com/Shiusa?tab=repositories">
                <LinkedInIcon size={52} className='text-bleuNeon p-[10%] hover:text-mauveNeon' />
            </a>
        </div>
    </div>
  )
}

export default ProfileCard