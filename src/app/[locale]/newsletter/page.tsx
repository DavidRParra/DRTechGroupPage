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
    };

    return (
        <div>
            <main>
                <div className="flex flex-col gap-[2rem] justify-center w-[100%] h-[20rem] mx-[auto] bg-gray-200">
                    <h1 className="text-[3rem] font-semibold w-[100rem] mx-[auto]">
                        {translationsForClient.title} 
                    </h1>
                    <p className="text-[1.8rem] w-[100rem] mx-[auto]">
                        {translationsForClient.description} 
                    </p>
                </div>
            </main>

            <div className="flex justify-center items-center gap-0">
                <NewsletterFormClient translations={translationsForClient} />

                <Image
                    src="/contacto_image.png"
                    width={500}
                    height={500}
                    alt={translationsForClient.imageAlt}
                    className="w-[55rem]"
                />
            </div>
        </div>
    );
}