// src/app/[locale]/newsletter/page.tsx
// ¡SIN 'use client'; aquí! Por defecto, es un Server Component.
import { getTranslations } from "next-intl/server";
import NewsletterFormClient from './newsletterForm'; // Creamos este nuevo archivo

export default async function Page() {
    // getTranslations se ejecuta SEGURAMENTE en el servidor aquí.
    const t = await getTranslations('Newsletter');

    // Pasamos las traducciones necesarias y los datos iniciales al Client Component.
    // Esto es más eficiente, ya que solo pasas lo que el cliente realmente necesita.
    const translationsForClient = {
        title: t('title'),
        description: t('description'),
        firstNameLabel: t('form.firstName'),
        firstNamePlaceholder: t('form.firstNamePlaceholder'),
        lastNameLabel: t('form.lastName'),
        lastNamePlaceholder: t('form.lastNamePlaceholder'),
        roleLabel: t('form.role'),
        rolePlaceholder: t('form.rolePlaceholder'),
        emailLabel: t('form.email'),
        emailPlaceholder: t('form.emailPlaceholder'),
        messageLabel: t('form.message'),
        messagePlaceholder: t('form.messagePlaceholder'),
        subscribeButton: t('form.subscribe'),
        imageAlt: t('form.imageAlt'),
        // Añade aquí cualquier otra traducción que tu formulario o secciones de cliente necesiten.
    };

    return (
        <div>
            <main>
                <div className="flex flex-col gap-[2rem] justify-center w-[100%] h-[20rem] mx-[auto] bg-gray-200">
                    <h1 className="text-[3rem] font-semibold w-[100rem] mx-[auto]">
                        {translationsForClient.title} {/* Usamos las traducciones pasadas */}
                    </h1>
                    <p className="text-[1.8rem] w-[100rem] mx-[auto]">
                        {translationsForClient.description} {/* Usamos las traducciones pasadas */}
                    </p>
                </div>
            </main>

            {/* Renderizamos el Client Component y le pasamos las props */}
            <div className="flex justify-center items-center gap-0">
                <NewsletterFormClient translations={translationsForClient} />

                <img
                    src="/contacto_image.png"
                    alt={translationsForClient.imageAlt}
                    className="w-[55rem]"
                />
            </div>
        </div>
    );
}