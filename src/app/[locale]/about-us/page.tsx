import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function AboutUsPage() {
    const t = await getTranslations('aboutUs');

    return (
        <div className="flex flex-col items-center pb-16">

            {/* Cabecera / Banner superior */}
            <div className="flex flex-col gap-[1rem] py-[3rem] px-4 bg-gray-200 w-[100%] items-center mb-[3rem] lg:mb-[5rem]">
                <div className="w-[90%] md:w-[70%]">
                    <h1 className="text-[2.2rem] lg:text-[3rem] font-bold">{t('title')}</h1>
                    <p className="text-[1.4rem] lg:text-[2rem] mt-2">{t('description')}</p>
                </div>
            </div>

            {/* Sección de Párrafos e Imágenes */}
            <section className="flex flex-col items-center gap-[4rem] w-[90%] md:w-[80%] lg:w-[60%]">
                
                {/* Bloque 1 */}
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-[2rem]">
                    <Image
                        src="/business-intelligence.png"
                        alt="Business Intelligence"
                        className="w-full max-w-[18rem] lg:w-[50%] h-auto object-contain"
                        width={500}
                        height={500}
                    />
                    <p className="text-[1.3rem] lg:text-[1.7rem] text-center lg:text-left">{t('paragraphs.1')}</p>
                </div>

                {/* Bloque 2 (En móvil va imagen arriba y texto abajo, en escritorio se alterna con lg:flex-row-reverse) */}
                <div className="flex flex-col lg:flex-row-reverse justify-between items-center w-full gap-[2rem]">
                    <Image
                        src="/cloud-computing.png"
                        alt="Cloud Computing"
                        className="w-full max-w-[18rem] lg:w-[55%] h-auto object-contain"
                        width={500}
                        height={500}
                    />
                    <p className="text-[1.3rem] lg:text-[1.7rem] text-center lg:text-left">{t('paragraphs.2')}</p>
                </div>

                {/* Bloque 3 */}
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-[2rem]">
                    <Image
                        src="/system-eco.png"
                        alt="Ecosystem of Systems"
                        className="w-full max-w-[18rem] lg:w-[55%] h-auto object-contain"
                        width={500}
                        height={500}
                    />
                    <p className="text-[1.3rem] lg:text-[1.7rem] text-center lg:text-left">{t('paragraphs.3')}</p>
                </div>

            </section>
        </div>
    );
}