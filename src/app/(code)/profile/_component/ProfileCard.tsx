import GithubIcon from '@/icons/GithubIcon'
import LinkedInIcon from '@/icons/LinkedInIcon'
import MailIcon from '@/icons/MailIcon'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='aspect-[11/16] h-full w-full bg-blancPur rounded-lg flex flex-col  p-[3.5%] border-[2px] border-orTamise'>
        <div className=' bg-bleuAcier bg-gradient-to-t from-mauveNeon to-orTamise h-[52%] w-full rounded-t-lg flex flex-col p-[4%] relative'>
            <div className='flex items-center justify-center rounded-md bg-blancPur p-[2.5%] min-h-[18%] border-[1px] border-orTamise'>
                <p className='text-mauveNeon text-2xl'>Nguyen Kyle</p>
            </div>
            <div className='w-full h-full relative'>
                <div className='absolute bottom-[-12%] left-[-5%] w-[110%] h-[24%] bg-bleuAcier flex items-center justify-between px-[10%] rounded-b-lg border-b-[2px] border-mauveNeon gap-4'>
                    <p className='text-orTamise text-lg uppercase tracking-tight text-balance'>Recherche d&apos;un stage</p>
                    <div className='bg-orTamise px-[4%] py-[6%] w-[18%] rounded-b-md flex items-center justify-center'>
                        <p className='text-bleuAcier text-center text-sm leading-3'> <span className='text-2xl font-bold'>75</span> jours</p>
                    </div>
                </div>

            </div>
            {/* <div className='absolute bottom-[-10%] left-[-10%] w-[120%] h-[20%] bg-bleuAcier flex items-center justify-between px-[10%] rounded-b-lg border-b-[1px] border-orTamise'>
                <p className='text-orTamise text-lg uppercase tracking-tight'>Etudiant informatique</p>
                <div className='bg-orTamise p-[4%] rounded-b-md object-right-top'>
                    <p className='text-bleuAcier'>3e</p>
                </div>
            </div> */}
        </div>
        {/* border-t-4 border-mauveNeon */}
        <div className='flex flex-col justify-center py-[8%] px-[8%]  mt-[3.5%] text-bleuAcier text-base leading-tight text-center text-pretty gap-2'>
            {/* <p className='text-pretty'>
                Etudiant informatique en 3ème année.<br />
                Recherche d&apos;un stage
                de début février à mai<br />
                <span className='underline underline-offset-4 text-mauveNeon font-bold text-lg'>75 jours</span>
            </p> */}
            <p>
                {`J'ai une préférence pour le backend mais je m'en sors en front aussi.`}<br />
                {/* {`Spécialisé en développement back-end avec des compétences solides en front-end`} */}
                Expérience avec Java, Spring, PostgreSQL, et technologies web.
            </p>
            <p className='leading-7'>
                <br />
                Ce portfolio est un projet realisé avec <br /><span className='underline underline-offset-8 px-[3%] py-[1.5%] bg-bleuAcier text-orTamise rounded-sm text-lg'>Next JS</span>.
            </p>
        </div>
        <div className='flex items-center justify-center gap-[8%] p-[1.5%]'>
            <a href="https://github.com/Shiusa?tab=repositories">
                <GithubIcon size={52} className='text-bleuNeon hover:text-mauveNeon transition-colors duration-100 ease-out' />
            </a>
            <a href="mailto:kylenguyen60@hotmail.com">
                <MailIcon size={52} className='text-bleuNeon hover:text-mauveNeon transition-colors duration-100 ease-out' />
            </a>
            <a href="https://github.com/Shiusa?tab=repositories">
                <LinkedInIcon size={52} className='text-bleuNeon p-[10%] hover:text-mauveNeon transition-colors duration-100 ease-out' />
            </a>
        </div>
    </div>
  )
}

export default ProfileCard