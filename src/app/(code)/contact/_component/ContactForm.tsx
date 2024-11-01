"use client"
import React from 'react'
import ContactInputWrapper from './ContactInputWrapper'
import MailIcon from '@/icons/MailIcon'
import ChatBubbleIcon from '@/icons/ChatBubbleIcon'
import UserIcon from '@/icons/UserIcon'
import { InferType } from 'yup'
import { contactFormSchema } from '@/schemas/yupSchema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import ErrorMessageWrapper from '@/components/ErrorMessageWrapper'
import { handleContactForm } from '@/actions/contactFormAction'
// import BlueBtn from '@/components/BlueBtn'

type ContactFormType = InferType<typeof contactFormSchema>;

const ContactForm = () => {

    const {register, handleSubmit, setError, formState:{errors, isSubmitting}} = useForm<ContactFormType>({
        resolver: yupResolver(contactFormSchema)
    })

    // const form = useForm<ContactFormType>({
    //     resolver: yupResolver(contactFormSchema),
    //     defaultValues: {
    //         name: "",
    //         mail: "",
    //         message: ""
    //     }
    // })

    const onSubmit = async (data:ContactFormType) => {
        // console.log("client data ", data)
        // await new Promise(resolve => setTimeout(resolve,5000))
        const response = await handleContactForm(data)
        // if (response.status === "error" && response.message) {
        //     Object.entries(response.message).forEach(([message]) => {
        //       setError("root", { type: "server", message });
        //     });
        //   }
        if (response.status === "error" && response.message) {
            // Utiliser setError pour afficher tous les messages d'erreurs en une seule fois
            setError("root", { type: response.type, message: response.message });
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 items-center'>

                <ContactInputWrapper className='group' errorMessage={errors.name && errors.name.message}>
                    <label className='w-[8%]' htmlFor='name'>
                        <UserIcon size={28} className='text-mauveNeon group-focus-within:text-bleuNeon' />
                    </label>
                    <input {...register("name")} name='name' id='name' type="text" placeholder='Nom' className='placeholder-blancPur bg-transparent w-full text-orTamise focus:outline-none'/>
                </ContactInputWrapper>


                <ContactInputWrapper className='group' errorMessage={errors.mail && errors.mail.message}>
                    <label className='w-[8%]' htmlFor='email'>
                        <MailIcon size={28} className='text-mauveNeon group-focus-within:text-bleuNeon' />
                    </label>
                    <input {...register("mail")} name='mail' id='mail' type="email" placeholder='Email' className='placeholder-blancPur bg-transparent w-full text-orTamise focus:outline-none'/>
                </ContactInputWrapper>


            <div className='flex flex-col w-full gap-1'>
                <div className='flex flex-col w-full bg-grisAnthracite py-[1.5%] px-[3%] rounded-lg gap-0 group'>
                    <label className='w-full' htmlFor='message'>
                        <div className='w-[8%]'>
                            <ChatBubbleIcon size={28} className='text-mauveNeon group-focus-within:text-bleuNeon'/>
                        </div>
                    </label>
                    <textarea {...register("message")} name="message" id="message" placeholder='Message' className='placeholder-blancPur bg-grisAnthracite py-[2%] px-[4%] rounded-lg w-full h-[100%] resize-none text-orTamise focus:outline-none scrollbar-hidden'>
                    </textarea>
                </div>
                {errors.message && (<ErrorMessageWrapper message={errors.message.message}/>)}
            </div>

            {errors.root && (errors.root.type==="server" || errors.root.type==="yup") && (<ErrorMessageWrapper message={errors.root.message}/>)}
            <button type='submit' className={`bg-bleuNeon text-center p-[4%] text-grisAnthracite rounded-md min-w-30 w-40`} disabled={isSubmitting}>{isSubmitting? "Envoi en cours": "Envoyer"}</button>
            {/* <BlueBtn path='/' innerName='Envoyer'/> */}
            {/* <input type="submit" /> */}
        </form>
    )
}

export default ContactForm