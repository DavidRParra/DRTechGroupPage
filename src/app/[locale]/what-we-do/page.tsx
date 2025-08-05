import Image from "next/image";
import { getTranslations } from "next-intl/server";

async function WhatWeDo(){
    const t = await getTranslations('WhatWeDo');
    return(
        <>
            <div
                className="h-[30rem] w-[100%] bg-cover bg-center bg-no-repeat flex items-start" 
                style={{backgroundImage: "url('/Banner_Background.jpg')"}}
            />
            
            <main className="flex flex-col text-[1.8rem] w-[50%] mx-[auto] mt-[4rem]" >

                <div className="flex items-baseline mb-[1rem]" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                    <Image
                        src="/DRTG-complete-logo.png"
                        alt="DRTG"
                        width={150}
                        height={300}
                    />
                    <h1 className="text-[4rem] font-bold pl-[1rem] text-[#5CA241]">{t('title')}</h1>
                </div>

                

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