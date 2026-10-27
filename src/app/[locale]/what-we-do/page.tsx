import Image from "next/image";
import { getTranslations } from "next-intl/server";

async function WhatWeDo() {
  const t = await getTranslations('WhatWeDo');

  return (
    <>
      {/* Banner Superior */}
      <div
        className="h-[15rem] sm:h-[20rem] lg:h-[30rem] w-[100%] bg-cover bg-center bg-no-repeat flex items-start" 
        style={{ backgroundImage: "url('/Banner_Background.jpg')" }}
      />
      
      {/* Contenido Principal Responsive */}
      <main className="flex flex-col text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] w-[90%] md:w-[70%] lg:w-[50%] mx-[auto] mt-[2rem] lg:mt-[4rem]">

        {/* Encabezado Logo + Título */}
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline mb-[1.5rem] lg:mb-[2rem] gap-2 sm:gap-0" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          <Image
            src="/DRTG-complete-logo.png"
            alt="DRTG"
            width={150}
            height={300}
            className="w-[100px] sm:w-[130px] lg:w-[150px] h-auto"
          />
          <h1 className="text-[2.2rem] sm:text-[3rem] lg:text-[4rem] font-bold sm:pl-[1rem] text-[#5CA241] text-center sm:text-left">
            {t('title')}
          </h1>
        </div>

        {/* Párrafos */}
        <div className="flex flex-col gap-[1.5rem] lg:gap-[3rem] text-gray-400 text-justify sm:text-left">
          <p>{t('paragraphs.1')}</p>
          <p>{t('paragraphs.2')}</p>
          <p>{t('paragraphs.3')}</p>
          <p>{t('paragraphs.4')}</p>
          <p>{t('paragraphs.5')}</p>
        </div>

      </main>
    </>
  );
}

export default WhatWeDo;