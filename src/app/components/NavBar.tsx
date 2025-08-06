import Link from "next/link";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import LangSwitch from "./LangSwitch";
import { getTranslations } from "next-intl/server";

export default async function NavBar(){
    const t = await getTranslations('navbar');
    return(
        <div className="flex justify-evenly h-[6rem] items-center gap-[2rem]">
            <div className="flex justify-center  h-[6rem] items-center gap-[2rem]">
            {/*Logo*/}
                <Link href="/" 
                className="flex items-center gap-[0.5rem]"
                >
                <div className="flex flex-col items-center">
                    <img src="/DRTG_Logo.png" alt="DRTG Logo" 
                    className="w-[4rem]"
                    />
                    <p className="text-[#5CA214]">Cloud Tecnology</p>
                </div>

                <div className="h-[4rem] w-[.3rem] bg-black rounded-[1.5rem]"></div>

                <h1 className="text-[1.5rem] font-semibold text-[#5CA214] group inline-flex text-2xl">
                    
                    <span>DRT</span>
                    <span className="overflow-hidden transition-all duration-500 group-hover:w-[3ch] w-0">
                        <span className="inline-block">ech</span>
                    </span>

                    <span>G</span>
                    <span className="overflow-hidden transition-all duration-500 group-hover:w-[4ch] w-0">
                        <span className="inline-block">roup</span>
                    </span>

                </h1>

                </Link>

                {/*Navegacion*/}
                <nav className="flex gap-[1rem] items-center " >
                    <ul className="flex gap-[1rem] text-[1.5rem] text-[#000] items-center" >
                        <li className="relative group">
                            <Link href="/construction" className="flex items-center hover:text-[#5CA241] font-bold">
                            {t('industries')}
                            <ChevronDownIcon className="ml-1 h-[3rem] w-[3rem] transform group-hover:rotate-180 transition-transform duration-450" />
                            </Link>

                            <ul className="absolute hidden group-hover:block bg-gray-100 left-0 top-9 w-[35rem] rounded-lg z-10">
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('banking')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('health')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('iot')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('hr')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('finance')}</li></Link>
                            </ul>
                        </li>

                        

                        

                        <div className="w-[.2rem] h-[2rem] bg-black rounded-lg"></div>
                        
                        <li className="relative group">
                            <Link href="/construction" className="flex items-center hover:text-[#5CA241] font-bold">
                            {t('services')}
                            <ChevronDownIcon className="ml-1 h-[3rem] w-[3rem] transform group-hover:rotate-180 transition-transform duration-450" />
                            </Link>

                            <ul className="absolute hidden group-hover:block bg-gray-100 left-0 top-9 w-[20rem] rounded-lg z-10">
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('all_services')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('digital')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('ai')}</li></Link>
                            </ul>

                        </li>

                        <div className="w-[.2rem] h-[2rem] bg-black rounded-lg"></div>

                        <li className="relative group">
                            <Link href="#" className="flex items-center hover:text-[#5CA241] font-bold">
                            {t('resources')}
                            <ChevronDownIcon className="ml-1 h-[3rem] w-[3rem] transform group-hover:rotate-180 transition-transform duration-450" />
                            </Link>

                            <ul className="absolute hidden group-hover:block bg-gray-100 left-0 top-9 w-[20rem] rounded-lg z-10">
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('blog')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('cases')}</li></Link>
                                <Link href="newsletter" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('newsletter')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('downloads')}</li></Link>
                            </ul>
                        </li>

                        <div className="w-[.2rem] h-[2rem] bg-black rounded-lg"></div>
                        
                        <li className="relative group">
                            <Link href="/construction" className="flex items-center hover:text-[#5CA241] font-bold">
                                {t('company')}
                                <ChevronDownIcon className="ml-1 h-[3rem] w-[3rem] transform group-hover:rotate-180 transition-transform duration-450" />
                            </Link>

                            <ul className="absolute hidden group-hover:block bg-gray-100 left-0 top-9 w-[20rem] rounded-lg z-10">
                                <Link href="/what-we-do" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('what_we_do')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('support')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('careers')}</li></Link>
                                <Link href="/construction" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('partners')}</li></Link>
                                <Link href="/about-us" ><li className="hover:bg-[#5CA241] hover:text-[#ffffff] px-4 py-2 rounded-lg">{t('about')}</li></Link>
                            </ul>
                        </li>
                    </ul>

                    <div className="w-[.2rem] h-[2rem] bg-black rounded-lg"></div>

                    <form action="/buscar" className=" relative max-w-md">
                        <input 
                            type="text"
                            name="search"
                            placeholder={t('search')}
                            className="bg-gray-50 text-[1.5rem] rounded-[1rem] px-10 py-2 border-black [#5CA241] border-[.1rem] border-full w-[20rem]"
                        />

                        <img
                            src="/lupa.png"
                            alt="Buscar"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                        />
                    </form>

                </nav>

                
            </div>

            <div className="flex gap-[5rem]">

                <div className="flex flex-col items-center  text-[1.2rem] font-bold ">
                    <div className="flex">
                        <PhoneIcon className="w-[1.5rem]"/>
                        <p>
                            Tel: +1 (954) 647-2606
                        </p>
                    </div>
                    
                    <div className="flex ">
                        <PhoneIcon className="w-[1.5rem]"/>
                        <p>
                            Tel: +1 (954) 743-7399
                        </p>
                    </div>
                </div>

                
                <div className="flex items-center gap-[0.5rem] text-[1.5rem] font-bold">

                    
                    <p className="text-[1.1rem]">{t('language')}</p>
                    <LangSwitch/>
                </div>

            </div>

        </div>
    );
}
