import Image from "next/image"
import { getTranslations } from "next-intl/server"

export default async function OurLeadershipTeam() {
  const t = await getTranslations("ourLeadershipTeam")

  return (
    <div className="flex flex-col md:flex-row mx-auto items-center justify-center min-h-[60vh] h-auto md:h-[60vh] w-[90%] md:w-[80%] gap-8 md:gap-4 my-10 md:my-0">
      
      {/* José Luis */}
      <div className="relative flex flex-col w-full md:w-[25%] group items-center">
        <div className="flex flex-col w-full items-center">
          <div
            className="w-36 h-36 lg:w-44 lg:h-44 bg-cover bg-bottom rounded-full mx-auto shadow-md"
            style={{ backgroundImage: "url('/JoseBeatoProfile.jpeg')" }}
          />

          <p className="flex items-center justify-center text-[1.4rem] lg:text-[1.8rem] text-center mt-3">
            {t("JoseLuis.name")}
          </p>

          <p className="flex items-center justify-center font-bold text-[1.4rem] lg:text-[1.8rem] text-center">
            {t("JoseLuis.position")}
          </p>
        </div>

        <Image
          src={"/Jose_Resumen.png"}
          alt="Jose Resumen"
          width={900}
          height={300}
          className="absolute hidden w-full max-w-[90vw] md:max-w-[110rem] md:w-[110rem] bottom-full mb-4 group-hover:block z-30 shadow-2xl rounded-lg"
        />
      </div>

      {/* David Parra */}
      <div className="flex flex-col w-full md:w-[25%] items-center">
        <div
          className="w-36 h-36 lg:w-44 lg:h-44 bg-cover bg-bottom rounded-full mx-auto shadow-md"
          style={{ backgroundImage: "url('/DavidParraProfile.jpeg')" }}
        />

        <p className="flex items-center justify-center text-[1.4rem] lg:text-[1.8rem] text-center mt-3">
          {t("DavidParra.name")}
        </p>

        <p className="flex items-center justify-center font-bold text-[1.4rem] lg:text-[1.8rem] text-center">
          {t("DavidParra.position")}
        </p>
      </div>

      {/* Víctor Delgado */}
      <div className="flex flex-col w-full md:w-[25%] items-center">
        <div
          className="w-36 h-36 lg:w-44 lg:h-44 bg-cover bg-bottom rounded-full mx-auto shadow-md"
          style={{ backgroundImage: "url('/VictorDelgadoProfile.jpeg')" }}
        />

        <p className="flex items-center justify-center text-[1.4rem] lg:text-[1.8rem] text-center mt-3">
          {t("VictorDelgado.name")}
        </p>

        <p className="flex items-center justify-center font-bold text-[1.4rem] lg:text-[1.8rem] text-center">
          {t("VictorDelgado.position")}
        </p>
      </div>
      
      {/* Carina Durán */}
      <div className="flex flex-col w-full md:w-[25%] items-center">
        <div
          className="w-36 h-36 lg:w-44 lg:h-44 bg-cover bg-top rounded-full mx-auto shadow-md"
          style={{ backgroundImage: "url('/CarinaMoraProfile.jpeg')" }}
        />

        <p className="flex items-center justify-center text-[1.4rem] lg:text-[1.8rem] text-center mt-3">
          {t("CarinaDuran.name")}
        </p>

        <p className="flex items-center justify-center font-bold text-[1.4rem] lg:text-[1.8rem] text-center">
          {t("CarinaDuran.position")}
        </p>
      </div>

      {/* Manuel Mueses */}
      <div className="flex flex-col w-full md:w-[25%] items-center">
        <div
          className="w-36 h-36 lg:w-44 lg:h-44 bg-cover bg-top rounded-full mx-auto shadow-md"
          style={{ backgroundImage: "url('/ManuelMuesesProfile.jpeg')" }}
        />

        <p className="flex items-center justify-center text-[1.4rem] lg:text-[1.8rem] text-center mt-3">
          {t("ManuelMueses.name")}
        </p>

        <p className="flex items-center justify-center font-bold text-[1.4rem] lg:text-[1.8rem] text-center">
          {t("ManuelMueses.position")}
        </p>
      </div>

    </div>
  )
}