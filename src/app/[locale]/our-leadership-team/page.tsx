import Image from "next/image"
import { getTranslations } from "next-intl/server"


export default async function OurLeadershipTeam(){

    const t = await getTranslations("ourLeadershipTeam")

    return (
        <div className="flex  mx-auto items-center h-[60vh] w-[80%]">
            <div className="flex w-[25%] group">
                <div className="flex flex-col w-full">
                    <div
                        
                        className="w-[40%] h-[20rem] bg-cover bg-bottom rounded-full mx-auto"

                        style={{backgroundImage: "url('/Jose_Profile_Final.jpg')"}}
                    />

                    <p className="flex items-center justify-center text-[1.8rem] text-center">{t("JoseLuis.name")}</p>

                    <p className="flex items-center justify-center font-bold text-[1.8rem] text-center">{t("JoseLuis.position")}</p>


                </div>

                <Image 
                    src={"/Jose_Resumen.png"}
                    alt="Jose Resumen"
                    width={900}
                    height={300}
                    className="absolute hidden w-[110rem] bottom-90 group-hover:block"
                ></Image>
            </div>

            <div className="flex flex-col w-[25%]">
                <div
                    
                    className="w-[40%] h-[20rem] bg-cover bg-bottom rounded-full mx-auto"

                    style={{backgroundImage: "url('/Victor_Profile_Final.jpg')"}}
                />

                <p className="flex items-center justify-center text-[1.8rem] text-center">{t("VictorDelgado.name")}</p>

                <p className="flex items-center justify-center font-bold text-[1.8rem] text-center">{t("VictorDelgado.position")}</p>


            </div>

            <div className="flex flex-col w-[25%]">
                <div

                    className="w-[40%] h-[20rem] bg-cover bg-bottom rounded-full mx-auto"

                    style={{backgroundImage: "url('/David_Profile_Final.jpg')"}}
                />
                <p className="flex items-center justify-center text-[1.8rem] text-center">{t("DavidParra.name")}</p>

                <p className="flex items-center justify-center font-bold text-[1.8rem] text-center">{t("DavidParra.position")}</p>

            </div>


            <div className="flex flex-col w-[25%]">
                <div

                    className="w-[40%] h-[20rem] bg-cover bg-top rounded-full mx-auto"

                    style={{backgroundImage: "url('/Carina_Profile_Final.jpg')"}}
                />
                <p className="flex items-center justify-center text-[1.8rem] text-center">{t("CarinaDuran.name")}</p>

                <p className="flex items-center justify-center font-bold text-[1.8rem] text-center">{t("CarinaDuran.position")}</p>

            </div>

        </div>
    )
}