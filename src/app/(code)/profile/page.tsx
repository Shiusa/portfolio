import CodeChildrenWrapper from '@/components/CodeChildrenWrapper'
import MainChildrenWrapper from '@/components/MainChildrenWrapper'
import ProfileCard from '@/app/(code)/profile/_component/ProfileCard'
import React from 'react'
// import PrismCodeWrapper from '@/components/PrismCodeWrapper'
import PrismLoader from '@/components/PrismLoader'

const ProfilePage = () => {

  const codeString = `
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
        <div className='flex justify-center py-[8%] px-[8%] border-t-4 border-mauveNeon mt-[3.5%]'>
            <p className='text-bleuAcier text-base leading-tight text-center text-pretty'>
            Etudiant informatique en 3ème année
            à la recherche d&apos;un stage
            de début février à mai pour <br /><span className='underline underline-offset-4 text-bleuNeon font-bold text-lg'>75 jours</span>.<br /><br />
            Ce portfolio est un projet fait en <br /><span className='underline underline-offset-8 px-[3%] py-[1.5%] bg-bleuAcier text-orTamise rounded-sm text-lg'>Next JS</span>.
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
  `

  return (
    <>
      <MainChildrenWrapper title='Apercu du Profil'>
        {/* <h1 className='pt-[12%] pb-[6%] w-full font-bold text-3xl text-center text-blancPur'>Apercu du Profil</h1> */}
        <div className='max-w-[90%] h-[72%]'>
          <div className='h-[100%] w-full'>
            <ProfileCard />
          </div>
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

export default ProfilePage