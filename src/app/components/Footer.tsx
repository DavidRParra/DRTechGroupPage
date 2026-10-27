import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getTranslations } from "next-intl/server";

async function Footer() {
  const t = await getTranslations('navbar');

  return (
    <footer className="w-full border-t-[.2rem] border-black mt-[5rem] lg:mt-[10rem]">
      
      {/* Contenedor principal responsive */}
      <nav className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Seccion 1: Industries */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-[1.5rem]">
              {t('industries')}
            </h3>
            <div className="w-[9rem] h-[.2rem] bg-[#5ca241] rounded-lg my-2"></div>

            <ul className="text-[1.2rem] lg:text-[1.4rem] space-y-1 text-center sm:text-left">
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('finance')}</Link></li>
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('hr')}</Link></li>
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('payroll')}</Link></li>
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('health')}</Link></li>
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('iot')}</Link></li>
            </ul>
          </div>

          {/* Seccion 2: Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-[1.5rem]">
              {t('services')}
            </h3>
            <div className="w-[5rem] h-[.2rem] bg-[#5ca241] rounded-lg my-2"></div>

            <ul className="text-[1.2rem] lg:text-[1.4rem] space-y-1 text-center sm:text-left">
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('all_services')}</Link></li>
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('digital')}</Link></li>
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('ai')}</Link></li>
            </ul>
          </div>

          {/* Seccion 3: Resources */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-[1.5rem]">
              {t('resources')}
            </h3>
            <div className="w-[3rem] h-[.2rem] bg-[#5ca241] rounded-lg my-2"></div>

            <ul className="text-[1.2rem] lg:text-[1.4rem] space-y-1 text-center sm:text-left">
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('blog')}</Link></li>
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('cases')}</Link></li>
              <li><Link href="newsletter" className="hover:text-[#5ca241] inline-block py-1">{t('newsletter')}</Link></li>
            </ul>
          </div>

          {/* Seccion 4: Company */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-[1.5rem]">
              {t('company')}
            </h3>
            <div className="w-[3rem] h-[.2rem] bg-[#5ca241] rounded-lg my-2"></div>

            <ul className="text-[1.2rem] lg:text-[1.4rem] space-y-1 text-center sm:text-left">
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('what_we_do')}</Link></li>
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('support')}</Link></li>
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('careers')}</Link></li>
              <li><Link href="/construction" className="hover:text-[#5ca241] inline-block py-1">{t('partners')}</Link></li>
              <li><Link href="/about-us" className="hover:text-[#5ca241] inline-block py-1">{t('about')}</Link></li>
            </ul>
          </div>

          {/* Seccion 5: Contact Us (Separado con linea vertical en escritorio) */}
          <div className="flex flex-col items-center sm:items-start border-t lg:border-t-0 lg:border-l border-gray-300 pt-6 lg:pt-0 lg:pl-8">
            <h3 className="font-bold text-[1.5rem]">
              {t('contactUs')}
            </h3>
            <div className="w-[4rem] h-[.2rem] bg-[#5ca241] rounded-lg my-2"></div>

            <ul className="flex items-center gap-4 mt-2">
              <li>
                <Link href="https://mail.google.com/" target="_blank">
                  <Image src="/gmail.png" alt="Correo" width={500} height={500} className="w-[2.5rem] lg:w-[3rem] transition-transform hover:scale-110" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/" target="_blank">
                  <Image src="/linkedin.png" alt="Linkedin" width={500} height={500} className="w-[2.5rem] lg:w-[3rem] transition-transform hover:scale-110" />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/" target="_blank">
                  <Image src="/x.png" alt="X" width={500} height={500} className="w-[2.5rem] lg:w-[3rem] transition-transform hover:scale-110" />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* Barrita inferior de Copyright */}
      <p className="flex items-center justify-center bg-[#5ca241] text-[1rem] lg:text-[1.2rem] text-black h-[3rem] text-center px-4">
        &copy; 2025 {t('createBy')} DRTechGroup
      </p>

    </footer>
  );
}

export default Footer;