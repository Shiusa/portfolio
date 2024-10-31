import CodeChildrenWrapper from '@/components/CodeChildrenWrapper'
import MainChildrenWrapper from '@/components/MainChildrenWrapper'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <MainChildrenWrapper title='Contactez-moi'>
        <p>contactSide</p>
      </MainChildrenWrapper>
      <CodeChildrenWrapper>
        <p>contactCodeSide</p>
      </CodeChildrenWrapper>
    </>
  )
}

export default ContactPage