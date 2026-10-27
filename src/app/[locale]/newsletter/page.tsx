import Image from "next/image";
import { getTranslations } from "next-intl/server";
import NewsletterFormClient from './newsletterForm';

export default async function Page() {
    const t = await getTranslations('Newsletter');

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
        alertMessage: t('alert'),
    };

    return (
        <div>
            <main>
                {/* Cabecera responsiva */}
                <div className="flex flex-col gap-[1rem] lg:gap-[2rem] justify-center w-full min-h-[15rem] lg:h-[20rem] px-6 lg:px-0 bg-gray-200">
                    <h1 className="text-[2.2rem] lg:text-[3rem] font-semibold w-full max-w-[100rem] mx-auto text-center lg:text-left">
                        {translationsForClient.title} 
                    </h1>
                    <p className="text-[1.4rem] lg:text-[1.8rem] w-full max-w-[100rem] mx-auto text-center lg:text-left">
                        {translationsForClient.description} 
                    </p>
                </div>
            </main>

            {/* Contenedor del Formulario e Imagen (Se apilan en móvil, lado a lado en escritorio) */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 px-4 py-8">
                <NewsletterFormClient translations={translationsForClient} />

                <Image
                    src="/contacto_image.png"
                    width={500}
                    height={500}
                    alt={translationsForClient.imageAlt}
                    className="w-full max-w-[25rem] lg:w-[45rem] h-auto object-contain"
                />
            </div>
        </div>
    );
}