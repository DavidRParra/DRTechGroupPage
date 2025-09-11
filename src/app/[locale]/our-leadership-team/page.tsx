import Image from "next/image"
import { getTranslations } from "next-intl/server"


export default async function OurLeadershipTeam(){

    const t = await getTranslations("ourLeadershipTeam")

    return (
        <div className="flex justify-center w-full my-[10rem] gap-[5%] items-center">
            <div className="flex flex-col w-[25%] gap-3">
                <div
                    
                    className="w-full h-[50rem] bg-cover bg-bottom "

                    style={{backgroundImage: "url('/JoseLuis_Profile.jpg')"}}
                />

                <p className="flex items-center justify-center text-[3.5rem] text-center">{t("JoseLuis.name")}</p>

                <p className="flex items-center justify-center font-bold text-[4rem] text-center h-[12rem]">{t("JoseLuis.position")}</p>

                <p className="flex items-center justify-center text-[2rem] text-center h-[6rem]">{t("JoseLuis.description")}</p>

            </div>

            <div className="flex flex-col w-[25%] gap-3">
                <div
                    
                    className="w-full h-[50rem] bg-cover bg-bottom "

                    style={{backgroundImage: "url('/VictorDelgado_Profile.jpg')"}}
                />

                <p className="flex items-center justify-center text-[3.5rem] text-center">{t("VictorDelgado.name")}</p>

                <p className="flex items-center justify-center font-bold text-[3.5rem] text-center h-[12rem]">{t("VictorDelgado.position")}</p>

                <p className="flex items-center justify-center text-[2rem] text-center h-[6rem]">{t("VictorDelgado.description")}</p>

            </div>

            <div className="flex flex-col w-[25%] gap-3">
                <div

                    className="w-full h-[50rem] bg-cover bg-bottom "

                    style={{backgroundImage: "url('/Persona.png')"}}
                />
                <p className="flex items-center justify-center text-[3.5rem] text-center">{t("DavidParra.name")}</p>

                <p className="flex items-center justify-center font-bold text-[3.5rem] text-center h-[12rem]">{t("DavidParra.position")}</p>

                <p className="flex items-center justify-center text-[2rem] text-center h-[6rem]">{t("DavidParra.description")}</p>

            </div>

            

            
        </div>
    )
}