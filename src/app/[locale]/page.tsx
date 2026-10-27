import { getTranslations } from "next-intl/server";
import { Link } from '@/i18n/navigation';
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations('Home');
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="h-[25rem] lg:h-[40rem] w-[100%] bg-cover bg-center bg-no-repeat m-0 flex items-start" 
        style={{ backgroundImage: "url('/Banner_Background.jpg')" }}
      >
        <h1 className="w-[90%] lg:w-[70%] text-[2.2rem] lg:text-[3.5rem] font-bold text-[#fff] text-shadow-[0_.2rem_.2rem_rgba(0,0,0,1)] text-center mx-auto mt-[2rem]">
          {t('hero_title')}
        </h1>
      </section>

      {/* Cards Section */}
      <section className="flex flex-col lg:flex-row text-center mt-[2rem] lg:mt-[-15rem] justify-center items-center lg:items-stretch gap-[1rem] px-[1rem] lg:px-0">

        <div className="bg-white w-full max-w-[20rem] h-[28rem] border shadow-black shadow rounded-lg">
          <Image src="/AI.png" alt="AI" width={500} height={500} className="w-[6rem] mx-[auto] mt-[1rem] mb-[1rem]" />
          <h2 className="text-[2.3rem] font-bold">{t('cards.data.title')}</h2>
          <p className="text-[1.3rem] px-[3.5rem] h-[10rem]">{t('cards.data.description')}</p>
          <div className="my-[2rem] text-[1.8rem] bg-[#5CA241] w-[60%] rounded-lg mx-[auto] text-white border-2 border-transparent hover:border-[#5CA241] hover:bg-white hover:text-[#5CA241]">
            <Link href="/construction"><p className="text-center leading-[2.7rem]">{t('cards.learnMore')}</p></Link>
          </div>
        </div>

        <div className="bg-white w-full max-w-[20rem] h-[28rem] border shadow-black shadow rounded-lg">
          <Image src="/arquitectura.png" alt="AI" width={500} height={500} className="w-[6rem] mx-[auto] mt-[1rem] mb-[1rem]" />
          <h2 className="text-[2.3rem] font-bold">{t('cards.architecture.title')}</h2>
          <p className="text-[1.3rem] px-[3.5rem] h-[10rem]">{t('cards.architecture.description')}</p>
          <div className="my-[2rem] text-[1.8rem] bg-[#5CA241] w-[60%] rounded-lg mx-[auto] text-white border-2 border-transparent hover:border-[#5CA241] hover:bg-white hover:text-[#5CA241]">
            <Link href="/construction"><p className="text-center leading-[2.7rem]">{t('cards.learnMore')}</p></Link>
          </div>
        </div>

        <div className="bg-white w-full max-w-[20rem] h-[28rem] border shadow-black shadow rounded-lg">
          <Image src="/migracion.png" alt="AI" width={500} height={500} className="w-[6rem] mx-[auto] mt-[1rem] mb-[1rem]" />
          <h2 className="text-[2.3rem] font-bold">{t('cards.migration.title')}</h2>
          <p className="text-[1.3rem] px-[3rem] h-[10rem]">{t('cards.migration.description')}</p>
          <div className="my-[2rem] text-[1.8rem] bg-[#5CA241] w-[60%] rounded-lg mx-[auto] text-white border-2 border-transparent hover:border-[#5CA241] hover:bg-white hover:text-[#5CA241]">
            <Link href="/construction"><p className="text-center leading-[2.7rem]">{t('cards.learnMore')}</p></Link>
          </div>
        </div>

        <div className="bg-white w-full max-w-[20rem] h-[28rem] border shadow-black shadow rounded-lg">
          <Image src="/delivery.png" alt="AI" width={500} height={500} className="w-[6rem] mx-[auto] mt-[1rem] mb-[1rem]" />
          <h2 className="text-[2.3rem] font-bold">{t('cards.delivery.title')}</h2>
          <p className="text-[1.3rem] px-[3.5rem] h-[10rem]">{t('cards.delivery.description')}</p>
          <div className="my-[2rem] text-[1.8rem] bg-[#5CA241] w-[60%] rounded-lg mx-[auto] text-white border-2 border-transparent hover:border-[#5CA241] hover:bg-white hover:text-[#5CA241]">
            <Link href="/construction"><p className="text-center leading-[2.7rem]">{t('cards.learnMore')}</p></Link>
          </div>
        </div>

      </section>

      {/* Blog Section */}

      <section className="px-[1rem] lg:px-0">
        <h1 className="text-[3rem] flex justify-center my-[3rem] text-center">{t('blog')}</h1>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-[1rem]">

          <div className="text-[1.8rem] w-full max-w-[40rem] bg-[#5CA241] text-white shadow-black shadow">
            <Image src="/Consultoria.jpg" alt="Consultoria" width={500} height={500} className="h-[15rem] lg:h-[21rem] w-full object-cover" />
            <p className="flex justify-center mt-[1rem] h-[5.4rem] items-center text-center px-2">{t('firstPost')}</p>
            <div className="bg-white h-[.2rem] w-[90%] lg:w-[35rem] mx-[auto] my-[1rem]" />
            <div className="flex justify-between px-[1rem] mb-[1rem]">
              <p>{t('view')} 3</p>
              <Link href="/construction">{t('viewArticle')}</Link>
            </div>
          </div>

          <div className="text-[1.8rem] w-full max-w-[40rem] bg-[#5CA241] text-white shadow-black shadow">
            <Image src="/New_York.jpg" alt="Consultoria" width={500} height={500} className="h-[15rem] lg:h-[21rem] w-full object-cover" />
            <p className="flex justify-center mt-[1rem] h-[5.4rem] items-center text-center px-2">{t('secondPost')}</p>
            <div className="bg-white h-[.2rem] w-[90%] lg:w-[35rem] mx-[auto] my-[1rem]" />
            <div className="flex justify-between px-[1rem] mb-[1rem]">
              <p>{t('view')} 5</p>
              <Link href="/construction">{t('viewArticle')}</Link>
            </div>
          </div>

          <div className="text-[1.8rem] w-full max-w-[40rem] bg-[#5CA241] text-white shadow-black shadow">
            <Image src="/Pensar-problema.jpg" alt="Consultoria" width={500} height={500} className="h-[15rem] lg:h-[21rem] w-full object-cover" />
            <p className="flex justify-center mt-[1rem] h-[5.4rem] items-center text-center px-2">{t('thirdPost')}</p>
            <div className="bg-white h-[.2rem] w-[90%] lg:w-[35rem] mx-[auto] my-[1rem]" />
            <div className="flex justify-between px-[1rem] mb-[1rem]">
              <p>{t('view')} 8</p>
              <Link href="/construction">{t('viewArticle')}</Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}