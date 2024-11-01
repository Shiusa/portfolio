"use server"

import { contactFormSchema } from "@/schemas/yupSchema"
import { InferType, ValidationError } from "yup";

type ContactFormType = InferType<typeof contactFormSchema>;

export async function handleContactForm(data:ContactFormType) {
    // const fakeData = { name: 'az', mail: 'aa', message: 'aze' }
    try {
        await contactFormSchema.validate(data);
        // const fakeResponse = await contactFormSchema.validate(fakeData, {abortEarly: false})
        // console.log("fake ", fakeResponse)
        // console.log("succes ", data)
        return {status:"success", message: "Formulaire valide"}
    } catch(contactError) {
        if (contactError instanceof ValidationError) {
            // Concaténer tous les messages d'erreurs en une seule chaîne de texte
            const errorMessage = contactError.inner
                .map((error) => error.message)
                .join(" | "); // Séparer les messages par un symbole ou espace

            return { status: "error", type:"yup", message: errorMessage };
        }
        return { status: "error", type:"server", message: "Une erreur inattendue est survenue." };
        // console.log(validationError);
        // if(validationError instanceof ValidationError) {
        //     console.log("yup errors: ",validationError.errors)
        //     console.log("yup path: ",validationError?.path)
        // }
        // return {status: "error", message: "Formulaire invalide"}
    }
}