import * as yup from "yup"

export const contactFormSchema = yup.object({
    name: yup.string().trim().required("Veuillez ajouter votre nom").min(2, "Le nom fait moins de 2 caractères").max(100, "Le nom fait plus de 100 caractères ce qui est trop long"),
    mail: yup.string().trim().required("Veuillez ajouter une adresse email de contact").email("Le format du mail est invalide"),
    message: yup.string().trim().required("Veuillez ajouter un message").min(9,"Le message est trop court")
})