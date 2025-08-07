// src/app/[locale]/newsletter/NewsletterFormClient.tsx
'use client'; // <-- ¡MUY IMPORTANTE! Esto lo convierte en un Client Component.

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Definimos la interfaz para las props que esperamos recibir
interface NewsletterTranslations {
    firstNameLabel: string;
    firstNamePlaceholder: string;
    lastNameLabel: string;
    lastNamePlaceholder: string;
    roleLabel: string;
    rolePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    subscribeButton: string;
    alertMessage: string;
    // Agrega aquí todas las demás traducciones que necesites usar dentro de este componente
}

interface NewsletterFormClientProps {
    translations: NewsletterTranslations;
}

export default function NewsletterFormClient({ translations }: NewsletterFormClientProps) {
    const router = useRouter()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validarFormulario = () => {
        if (!formData.firstName || !formData.lastName || !formData.role || !formData.email || !formData.message) {
            alert('Todos los campos son obligatorios');
            return false;
        }
        return true;
    }

    // Puedes añadir una función handleSubmit aquí para enviar los datos del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!validarFormulario()) return;

        try {
            const response = await fetch('/api/suscripcion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if(!response.ok) {
                throw new Error('Error al enviar formulario')
            }
            alert(translations.alertMessage)
            router.push('/')

        }catch (error) {
            console.error('Error: ', error);
        }
    };

    return (
        <section className="flex mt-[1rem] justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem]">
                <div className="flex w-[30rem] gap-[1rem]">
                    <div className="flex flex-col text-[2rem]">
                        <label htmlFor="firstName" className="text-[1.5rem]">{translations.firstNameLabel}</label>
                        <input
                            name="firstName"
                            id="firstName"
                            type="text"
                            maxLength={25}
                            required
                            placeholder={translations.firstNamePlaceholder}
                            className="border rounded-lg w-[14.5rem] px-[.5rem]"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col text-[2rem]">
                        <label htmlFor="lastName" className="text-[1.5rem]">{translations.lastNameLabel}</label>
                        <input
                            name="lastName"
                            id="lastName"
                            type="text"
                            maxLength={25}
                            placeholder={translations.lastNamePlaceholder}
                            className="border rounded-lg w-[14.5rem] px-[.5rem]"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col text-[2rem]">
                    <label htmlFor="role" className="text-[1.5rem]">{translations.roleLabel}</label>
                    <input
                        name="role"
                        id="role"
                        type="text"
                        maxLength={40}
                        placeholder={translations.rolePlaceholder}
                        className="border rounded-lg w-[30rem] px-[.5rem]"
                        value={formData.role}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col text-[2rem]">
                    <label htmlFor="email" className="text-[1.5rem]">{translations.emailLabel}</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        maxLength={100}
                        placeholder={translations.emailPlaceholder}
                        className="border rounded-lg w-[30rem] px-[.5rem]"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col text-[2rem]">
                    <label htmlFor="message" className="text-[1.5rem]">{translations.messageLabel}</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={5}
                        maxLength={900}
                        placeholder={translations.messagePlaceholder}
                        className="border rounded-lg w-[30rem] px-[.5rem] text-[1.5rem] resize-none"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-[30rem] text-white bg-[#5CA241] rounded-lg flex justify-center items-center border-transparent border-2 hover:bg-white hover:border-[#5CA241] hover:text-[#5CA241] cursor-pointer"
                >
                    <span className="text-[2rem]">{translations.subscribeButton}</span>
                </button>
            </form>
        </section>
    );
}