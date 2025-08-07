
import Image from 'next/image';
import {Link} from '@/i18n/navigation'
import { getTranslations } from "next-intl/server";


async function Footer(){
    const t = await getTranslations('navbar');
    return(
        <div className="w-[100%] border-t-[.2rem] border-[#000000] mt-[10rem]">
            

            <nav className="flex justify-center mt-[.8rem]">
                <ul className="flex">
                    <li className="mx-[1rem]">
                        <h3 className="font-bold text-[1.5rem]">
                        {t('industries')}
                        </h3>
                        <div className="w-[9rem] h-[.2rem] bg-[#5ca241] rounded-lg"></div>

                        <ul className="left-0 top-9 rounded-lg text-[1.6rem]">
                            {/*<li className=" px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('banking')}</Link></li>*/}
                            <li className=" px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('finance')}</Link></li>

                            <li className=" px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('hr')}</Link></li>

                            <li className=" px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('payroll')}</Link></li>

                            <li className=" px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('health')}</Link></li>

                            <li className=" px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('iot')}</Link></li>
                            
                        </ul>
                    </li>

                    <li className="mx-[1rem]">
                        <h3 className="font-bold text-[1.5rem]">
                        {t('services')}
                        </h3>
                        <div className="w-[5rem] h-[.2rem] bg-[#5ca241] rounded-lg"></div>

                        <ul className="left-0 top-9 rounded-lg text-[1.6rem]">
                            <li className=" px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('all_services')}</Link></li>
                            <li className=" px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('digital')}</Link></li>
                            <li className=" px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('ai')}</Link></li>
                        </ul>

                    </li>

                    <li className="mx-[1rem]">
                        <h3 className="font-bold text-[1.5rem]">
                        {t('resources')}
                        </h3>
                        <div className="w-[3rem] h-[.2rem] bg-[#5ca241] rounded-lg"></div>

                        <ul className="left-0 top-9 rounded-lg text-[1.6rem]">
                            <li className="px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('blog')}</Link></li>
                            <li className="px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('cases')}</Link></li>
                            <li className="px-4 py-2 rounded-lg"><Link href="newsletter" className="hover:text-[#5ca241]" >{t('newsletter')}</Link></li>

                        </ul>
                    </li>

                    <li className="mx-[1rem]">
                        <h3 className="font-bold text-[1.5rem]">
                        {t('company')}
                        </h3>
                        <div className="w-[3rem] h-[.2rem] bg-[#5ca241] rounded-lg"></div>


                        <ul className="left-0 top-9 rounded-lg text-[1.6rem]">
                            <li className="px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('what_we_do')}</Link></li>
                            <li className="px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('support')}</Link></li>
                            <li className="px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('careers')}</Link></li>
                            <li className="px-4 py-2 rounded-lg"><Link href="/construction" className="hover:text-[#5ca241]" >{t('partners')}</Link></li>
                            <li className="px-4 py-2 rounded-lg"><Link href="/about-us" className="hover:text-[#5ca241]" >{t('about')}</Link></li>
                        </ul>
                    </li>

                    <div className="w-[.2rem] h-[14rem] bg-black rounded-lg mx-[1rem] my-[auto]"></div>
                    
                    <li className="mx-[1rem]">
                        <h3 className="font-bold text-[1.5rem]">
                        {t('contactUs')}
                        </h3>
                        <div className="w-[4rem] h-[.2rem] bg-[#5ca241] rounded-lg"></div>


                        <ul className="left-0 top-9 rounded-lg text-[1.1rem] flex">

                            <li className="px-4 py-2 rounded-lg">
                                <Link href="https://mail.google.com/" target="_blank">
                                    <Image src="/gmail.png" alt="Correo" width={500} height={500} className="w-[3rem]"/>
                                </Link>
                            </li>

                            <li className="px-4 py-2 rounded-lg">
                                <Link href="https://www.linkedin.com/" target="_blank">
                                    <Image src="/linkedin.png" alt="Linkedin" width={500} height={500} className="w-[3rem]"/>
                                </Link>
                            </li>

                            <li className="px-4 py-2 rounded-lg">
                                <Link href="https://x.com/" target="_blank">
                                    <Image src="/x.png" alt="X" width={500} height={500} className="w-[3rem]"/>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    
                </ul>

            </nav>

            <p className="flex justify-center my-0 bg-[#5ca241] text-[1.2rem] text-white">
                &copy; 2025 {t('createBy')} DRTechGroup
            </p>
            

        </div>
    )
}

export default Footer;