"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon } from "@heroicons/react/24/solid";
import LangSwitch from "./LangSwitch";
import { useTranslations } from "next-intl"; // <--- Importamos el hook

export default function MobileMenu() {
  const t = useTranslations("navbar"); 

  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div className="xl:hidden">
      {/* Botón de Hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-[#5CA241] focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="w-8 h-8" />
        ) : (
          <Bars3Icon className="w-8 h-8" />
        )}
      </button>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="absolute top-[6rem] left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-6 z-50 gap-4">
          <nav className="flex flex-col gap-2">
            {/* Industries */}
            <div>
              <button
                onClick={() => toggleSubmenu("industries")}
                className="flex items-center justify-between w-full text-[1.2rem] font-bold text-gray-800 py-2 border-b"
              >
                <span>{t("industries")}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openSubmenu === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSubmenu === "industries" && (
                <div className="flex flex-col pl-4 py-2 bg-gray-50 rounded-lg gap-2 text-[1rem]">
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("banking")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("health")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("iot")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("hr")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("finance")}</Link>
                </div>
              )}
            </div>

            {/* Services */}
            <div>
              <button
                onClick={() => toggleSubmenu("services")}
                className="flex items-center justify-between w-full text-[1.2rem] font-bold text-gray-800 py-2 border-b"
              >
                <span>{t("services")}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openSubmenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSubmenu === "services" && (
                <div className="flex flex-col pl-4 py-2 bg-gray-50 rounded-lg gap-2 text-[1rem]">
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("all_services")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("digital")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("ai")}</Link>
                </div>
              )}
            </div>

            {/* Resources */}
            <div>
              <button
                onClick={() => toggleSubmenu("resources")}
                className="flex items-center justify-between w-full text-[1.2rem] font-bold text-gray-800 py-2 border-b"
              >
                <span>{t("resources")}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openSubmenu === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSubmenu === "resources" && (
                <div className="flex flex-col pl-4 py-2 bg-gray-50 rounded-lg gap-2 text-[1rem]">
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("blog")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("cases")}</Link>
                  <Link href="#" onClick={() => setIsOpen(false)}>{t("newsletter")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("downloads")}</Link>
                </div>
              )}
            </div>

            {/* Company */}
            <div>
              <button
                onClick={() => toggleSubmenu("company")}
                className="flex items-center justify-between w-full text-[1.2rem] font-bold text-gray-800 py-2 border-b"
              >
                <span>{t("company")}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openSubmenu === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSubmenu === "company" && (
                <div className="flex flex-col pl-4 py-2 bg-gray-50 rounded-lg gap-2 text-[1rem]">
                  <Link href="/what-we-do" onClick={() => setIsOpen(false)}>{t("what_we_do")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("support")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("careers")}</Link>
                  <Link href="/construction" onClick={() => setIsOpen(false)}>{t("partners")}</Link>
                  <Link href="/about-us" onClick={() => setIsOpen(false)}>{t("about")}</Link>
                  <Link href="/our-leadership-team" onClick={() => setIsOpen(false)}>{t("our-leadership-team")}</Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="text-[1.2rem] font-bold text-gray-800 py-2 border-b block"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Teléfonos y Selector de Idioma */}
          <div className="flex flex-col gap-3 pt-4 border-t w-full items-center">
            <div className="flex flex-col text-[0.9rem] font-bold gap-1 text-gray-700">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#5CA241]" />
                <p>Tel: +1 (954) 647-2606</p>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#5CA241]" />
                <p>Tel: +1 (954) 743-7399</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[1.1rem] font-bold pt-2">
              <p>{t("language")}</p>
              <LangSwitch />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}