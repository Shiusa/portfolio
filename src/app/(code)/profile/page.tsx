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
        </div>
        <div className='flex flex-col justify-center py-[8%] px-[8%]  mt-[3.5%] text-bleuAcier text-base leading-tight text-center text-pretty gap-2'>
            <p>
                {\`J'ai une préférence pour le backend mais je m'en sors en front aussi.\`}<br />
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