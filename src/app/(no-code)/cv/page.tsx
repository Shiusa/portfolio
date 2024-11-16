import DownloadCVBtn from '@/components/DownloadCVBtn'
import HighlightSMWrapper from '@/components/HighlightSMWrapper'
import UnderlineSMWrapper from '@/components/UnderlineSMWrapper'
import React from 'react'

const CVPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center px-[10%] overflow-y-scroll'>
            <h1 className='pt-[12%] pb-[6%] w-full font-bold text-3xl text-center text-orTamise'>Curriculum Vitae</h1>
        <div className='flex flex-col items-center justify-center w-[72%]'>
            <h1 className='pt-[8%] pb-[2%] w-[50%] text-xl text-center text-gray-200 tracking-tight text-pretty mb-[4%]'>Téléchargez mon <HighlightSMWrapper>CV</HighlightSMWrapper> pour obtenir tous les <UnderlineSMWrapper>détails</UnderlineSMWrapper> sur mon <UnderlineSMWrapper>parcours</UnderlineSMWrapper> et mes <UnderlineSMWrapper>compétences</UnderlineSMWrapper>.</h1>
            <DownloadCVBtn />
        </div>
        <div>
        {/* width={720} height={1080}  */}
          {/* <iframe src="/cv.pdf" frameBorder="0" className='w-[720px] h-[1080px]'></iframe> */}
        </div>
    </div>
  )
}

export default CVPage