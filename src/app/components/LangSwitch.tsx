'use client';

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LangSwitch(){
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const lang = ['ES', 'EN'];
    const image = ['/republica-dominicana.png', '/estados-unidos.png'];

    const [targetButtonText, setTargetButtonText] = useState(() => {
        return locale === 'es' ? lang[0] : lang[1];
    });
    const [targetImage, setTargetImage] = useState(() => {
        return locale === 'es' ? image[0] : image[1];
    })

    const setTarget = (text: string, image: string) => {
        setTargetButtonText(text);
        setTargetImage(image);

        const nuevoLocale = text.toLowerCase();

        if (nuevoLocale !== locale) {
            const pathSinLocale = pathname.replace(/^\/(es|en)/, '');
            router.push(`/${nuevoLocale}${pathSinLocale}`);
        }
    };

    return(
        <div className="relative group">

            <button className="flex gap-[0rem] px-[.3rem] border-[#5CA241] border-[.3rem] text-[1.5rem] items-center w-[5rem] rounded-lg cursor-pointer">
                <img src={targetImage} alt="" className="w-[2rem] mr-[.5rem]"/>
                <ChevronDownIcon className="w-[1.8rem] h-[1.8rem] transform group-hover:rotate-180 transition-transform duration-200"/>
            </button>

            <div className="absolute hidden group-hover:block bg-gray-100 w-[5rem]  rounded-lg">
                <button onClick={() => setTarget(lang[1], image[1])} className="flex gap-[1rem] w-[100%] px-[.3rem] rounded-lg text-[1.5rem] items-center justify-center cursor-pointer hover:bg-[#5CA241] hover:text-[#ffffff]">
                    <img src={image[1]} alt="estados unidos" className="w-[2rem]"/>
                </button>

                <button onClick={() => setTarget(lang[0], image[0])} className="flex gap-[1rem] w-[100%] px-[.3rem] rounded-lg text-[1.5rem] items-center justify-center cursor-pointer hover:bg-[#5CA241] hover:text-[#ffffff]">
                    <img src={image[0]} alt="estados unidos" className="w-[2rem]"/>
                </button>
            </div>

        </div>
    );

}