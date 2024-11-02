"use server"

import { contactFormSchema } from "@/schemas/yupSchema"
import { Resend } from "resend";
import { InferType, ValidationError } from "yup";

type ContactFormType = InferType<typeof contactFormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactForm(data:ContactFormType) {
    // const fakeData = { name: 'az', mail: 'aa', message: 'aze' }
    try {
        await contactFormSchema.validate(data);
        // const fakeResponse = await contactFormSchema.validate(fakeData, {abortEarly: false})
        // console.log("fake ", fakeResponse)
        // console.log("succes ", data)

        await resend.emails.send({
            from: 'stage@nguyen-kyle.fr',
            to: 'kylenguyen60@hotmail.com',
            subject: 'Message from portfolio',
            replyTo: data.mail,
            text: data.message
        })

        return { status: 200, type: "success", message: "Message envoyé" };
    } catch(contactError) {
        if (contactError instanceof ValidationError) {
            // Concaténer tous les messages d'erreurs en une seule chaîne de texte
            const errorMessage = contactError.inner
                .map((error) => error.message)
                .join(" | "); // Séparer les messages par un symbole ou espace

            return { status: 400, type: "error", message: errorMessage };
        }
        return { status: 500, type: "error", message: "Une erreur inattendue est survenue" };
        // console.log(validationError);
        // if(validationError instanceof ValidationError) {
        //     console.log("yup errors: ",validationError.errors)
        //     console.log("yup path: ",validationError?.path)
        // }
        // return {status: "error", message: "Formulaire invalide"}
    }
}