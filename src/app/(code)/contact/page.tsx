import CodeChildrenWrapper from '@/components/CodeChildrenWrapper'
import MainChildrenWrapper from '@/components/MainChildrenWrapper'
import React from 'react'
import ContactForm from './_component/ContactForm'

const ContactPage = () => {
  return (
    <>
      <MainChildrenWrapper title='Contactez-moi'>
        <div className='w-[56%]'>
          <ContactForm />
        </div>
      </MainChildrenWrapper>
      <CodeChildrenWrapper>
        <p>contactCodeSide</p>
      </CodeChildrenWrapper>
    </>
  )
}

export default ContactPage