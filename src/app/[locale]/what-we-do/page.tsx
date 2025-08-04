import Image from "next/image";
import { getTranslations } from "next-intl/server";

async function WhatWeDo(){
    const t = await getTranslations('WhatWeDo');
    return(
        <>
            <div
                className="h-[30rem] w-[100%] bg-cover bg-center bg-no-repeat flex items-start" 
                style={{backgroundImage: "url('/cloud-city.jpeg')"}}
            />
            
            <main className="flex flex-col text-[1.8rem] w-[50%] mx-[auto] mt-[4rem]" >

                <h1 className="text-[5rem] font-bold mb-[1rem] pl-[1rem]">{t('title')}</h1>

                <div className="flex flex-col gap-[3rem] text-gray-400">
                    <p>{t('paragraphs.1')}</p>

                    <p>{t('paragraphs.2')}</p>

                    <p>{t('paragraphs.3')}</p>

                    <p>{t('paragraphs.4')}</p>

                    <p>{t('paragraphs.5')}</p>
                </div>

                
            </main>
            
        </>
    )
}

export default WhatWeDo;