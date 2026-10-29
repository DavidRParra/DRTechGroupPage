"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { useState } from "react"

interface TeamMember {
  id: string
  nameKey: string
  positionKey: string
  descriptionKey: string
  bgImage: string
  bgPosition?: string
  hasResumeImage?: boolean
  resumeImageSrc?: string
}

export default function OurLeadershipTeam() {
  const t = useTranslations("ourLeadershipTeam")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const members: TeamMember[] = [
    {
      id: "JoseLuis",
      nameKey: "JoseLuis.name",
      positionKey: "JoseLuis.position",
      descriptionKey: "JoseLuis.description",
      bgImage: "url('/JoseBeatoProfile.jpeg')",
      bgPosition: "bg-bottom",
      hasResumeImage: false,
    },
    {
      id: "DavidParra",
      nameKey: "DavidParra.name",
      positionKey: "DavidParra.position",
      descriptionKey: "DavidParra.description",
      bgImage: "url('/DavidParraProfile.jpeg')",
      bgPosition: "bg-bottom",
    },
    {
      id: "VictorDelgado",
      nameKey: "VictorDelgado.name",
      positionKey: "VictorDelgado.position",
      descriptionKey: "VictorDelgado.description",
      bgImage: "url('/VictorDelgadoProfile.jpeg')",
      bgPosition: "bg-bottom",
    },
    {
      id: "ManuelMueses",
      nameKey: "ManuelMueses.name",
      positionKey: "ManuelMueses.position",
      descriptionKey: "ManuelMueses.description",
      bgImage: "url('/ManuelMuesesProfile.jpeg')",
      bgPosition: "bg-top",
    },
    {
      id: "CarinaDuran",
      nameKey: "CarinaDuran.name",
      positionKey: "CarinaDuran.position",
      descriptionKey: "CarinaDuran.description",
      bgImage: "url('/CarinaMoraProfile.jpeg')",
      bgPosition: "bg-top",
    },
  ]

  const joseLuisList: string[] = t.raw("JoseLuis.list") || []

  return (
    <div className="w-[92%] md:w-[85%] mx-auto my-12">
      {/* Grid principal */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-row items-center justify-center min-h-[60vh] h-auto md:h-[60vh] gap-8 md:gap-6">
        {members.map((member, index) => {
          const isLastOddItem = index === members.length - 1
          return (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className={`flex flex-col w-full md:w-[25%] items-center cursor-pointer group transition-transform duration-300 hover:scale-105 ${
                isLastOddItem ? "col-span-2 sm:col-span-2 md:col-span-1 justify-self-center" : ""
              }`}
            >
              <div className="flex flex-col w-full items-center">
                <div
                  className={`w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 bg-cover ${member.bgPosition || "bg-bottom"} rounded-full mx-auto shadow-xl transition-shadow group-hover:shadow-2xl border-3 border-gray-700/50`}
                  style={{ backgroundImage: member.bgImage }}
                />

                <p className="flex items-center justify-center text-[1.3rem] sm:text-[1.5rem] lg:text-[1.9rem] text-center mt-4 font-bold text-black">
                  {t(member.nameKey)}
                </p>

                <p className="flex items-center justify-center text-[1.1rem] sm:text-[1.25rem] lg:text-[1.45rem] text-center font-semibold text-gray-800 mt-1.5 px-2">
                  {t(member.positionKey)}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal / Popup Optimizado para móviles con scroll interno en el texto */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-4 animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl max-w-5xl w-full p-5 sm:p-10 relative flex flex-col items-center max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-md z-10"
            >
              ✕
            </button>

            {/* Foto dentro del modal (ajustada para que no sea gigante en celulares) */}
            <div
              className={`w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-cover ${selectedMember.bgPosition || "bg-bottom"} rounded-full shadow-2xl mb-4 sm:mb-6 border-4 border-primary/60 shrink-0`}
              style={{ backgroundImage: selectedMember.bgImage }}
            />

            {/* Nombre */}
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mt-1">
              {t(selectedMember.nameKey)}
            </h3>

            {/* Cargo */}
            <p className="text-base sm:text-2xl lg:text-3xl font-bold text-blue-400 text-center mb-4 sm:mb-6 mt-2 px-2">
              {t(selectedMember.positionKey)}
            </p>

            {/* Contenedor con scroll interno independiente para el texto */}
            {selectedMember.id === "JoseLuis" ? (
              <div className="w-full text-left text-gray-100 py-4 px-4 sm:py-6 sm:px-8 text-base sm:text-xl lg:text-2xl leading-relaxed bg-gray-800/70 rounded-2xl sm:rounded-3xl border border-gray-700/60 shadow-inner max-h-[42vh] sm:max-h-[50vh] overflow-y-auto">
                <p className="mb-4 font-medium">
                  {t("JoseLuis.intro")}
                </p>
                <ul className="list-disc pl-5 sm:pl-6 space-y-3">
                  {joseLuisList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : selectedMember.hasResumeImage && selectedMember.resumeImageSrc ? (
              <div className="w-full mt-2 max-h-[45vh] overflow-y-auto">
                <Image
                  src={selectedMember.resumeImageSrc}
                  alt="Resumen profesional"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-xl object-contain bg-black/20 p-2"
                />
              </div>
            ) : (
              <div className="w-full text-center text-gray-100 py-4 px-4 sm:py-6 sm:px-8 text-base sm:text-xl lg:text-2xl leading-relaxed bg-gray-800/70 rounded-2xl sm:rounded-3xl border border-gray-700/60 shadow-inner max-h-[42vh] sm:max-h-[50vh] overflow-y-auto">
                <p>{t(selectedMember.descriptionKey)}</p>
              </div>
            )}

            {/* Botón Cerrar inferior */}
            <button
              onClick={() => setSelectedMember(null)}
              className="mt-6 sm:mt-8 px-8 sm:px-12 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl sm:rounded-2xl transition-colors shadow-xl text-base sm:text-xl tracking-wide shrink-0"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}