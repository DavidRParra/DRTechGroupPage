import { getTranslations } from "next-intl/server";


export default async function AboutUsPage() {
    const t = await getTranslations('aboutUs');

    return (
        <div className="flex flex-col items-center">

            <div className="flex flex-col gap-[1rem] py-[3rem] bg-gray-200 w-[100%] items-center mb-[5rem]">
                <div className="w-[70%]">
                    <h1 className="text-[3rem] font-bold">{t('title')}</h1>
                    <p className="text-[2rem]">{t('description')}</p>
                </div>
            </div>

            <section className="flex flex-col items-center gap-[4rem]">
                <div className="flex justify-between items-center w-[60%] gap-[1rem]">
                    <img 
                        src="/business-intelligence.png" 
                        alt="Cloud Computing" 
                        className="w-[50%]"
                    />

                    <p className="text-[1.7rem]">{t('paragraphs.1')}</p>
                </div>

                <div className="flex justify-between items-center w-[60%] gap-[1rem]">
                    <p className="text-[1.7rem]">{t('paragraphs.2')}</p>
                    <img 
                        src="/cloud-computing.png" 
                        alt="Cloud Computing" 
                        className="w-[55%]"
                    />
                </div>

                <div className="flex justify-between items-center w-[60%] gap-[2rem]">
                    
                    <img 
                        src="/system-eco.png" 
                        alt="Cloud Computing" 
                        className="w-[55%]"
                    />
                    <p className="text-[1.7rem]">{t('paragraphs.3')}</p>
                </div>
            </section>
        </div>
    );
}