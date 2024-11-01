import ErrorMessageWrapper from '@/components/ErrorMessageWrapper';
import React, { ComponentProps } from 'react'

const ContactInputWrapper = ({ children, className, errorMessage, ...props }:{ children:React.ReactNode; errorMessage?:string; className?:string; } & ComponentProps<"div">) => {
  return (
    <div className='flex flex-col w-full gap-1'>
        <div className={`flex flex-row w-full bg-grisAnthracite py-[1.5%] px-[3%] rounded-lg gap-4 ${className}`} {...props}>
            {children}
        </div>
        <ErrorMessageWrapper message={errorMessage} />
    </div>
  )
}

export default ContactInputWrapper