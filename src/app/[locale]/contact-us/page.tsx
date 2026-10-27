import ScaleIn from "@/app/components/ScaleIn";
import { ArrowDownRightIcon } from "@heroicons/react/20/solid"

function ContactoPage(){
    return (
        <div className="flex flex-col w-full items-center text-[1.4rem] lg:text-[1.8rem] min-h-[85vh] justify-center py-10 px-4 sm:px-6"
        style={{backgroundImage: "url('/Slider5.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            
            <form action="" className="flex flex-col w-[95%] sm:w-[85%] lg:w-[70%] border border-[#5CA241]/0 rounded-lg bg-white/0 shadow-lg">
                <ScaleIn>
                    <div className="bg-white py-6 px-4 sm:px-10 lg:px-20 rounded-lg">
                        <div className="mt-4 lg:mt-10">
                            <h2 className="text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] font-semibold text-[#5CA241] mb-3 lg:mb-5">Formulario de Consultas</h2>
                            <p className="font-semibold text-[1.2rem] lg:text-[1.6rem]">Cuentanos lo que buscas y lo haremos realidad.</p>
                        </div>

                        {/* Nombre y Apellido */}
                        <div className="flex flex-col sm:flex-row w-full justify-between items-center mt-6 lg:mt-10 gap-4 sm:gap-0">
                            <div className="flex flex-col w-full sm:w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Nombre
                                    <span className="text-red-700">*</span>
                                </label>
                                <input type="text" placeholder="Jose" className="flex border rounded-lg py-2 px-4 w-full" />
                            </div>

                            <div className="flex flex-col w-full sm:w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Apellido
                                    <span className="text-red-700">*</span>
                                </label>
                                <input type="text" placeholder="Rodriguez" className="flex border rounded-lg py-2 px-4 w-full"/>
                            </div>
                        </div>

                        {/* Teléfono y Correo */}
                        <div className="flex flex-col sm:flex-row w-full justify-between items-center mt-6 lg:mt-10 gap-4 sm:gap-0">
                            <div className="flex flex-col w-full sm:w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Telefono
                                    <span className="text-red-700">*</span>
                                </label>
                                <input type="number" placeholder="8299992211" className="flex border rounded-lg py-2 px-4 w-full" />
                            </div>

                            <div className="flex flex-col w-full sm:w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Correo
                                    <span className="text-red-700">*</span>
                                </label>
                                <input type="text" placeholder="JRodriguez@Ejemplo.com" className="flex border rounded-lg py-2 px-4 w-full"/>
                            </div>
                        </div>

                        {/* Tipo de consulta y Fecha */}
                        <div className="flex flex-col sm:flex-row w-full items-center justify-between mt-6 lg:mt-10 gap-4 sm:gap-0">
                            <div className="flex flex-col w-full sm:w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Tipo de consulta
                                    <span className="text-red-700">*</span>
                                </label>
                                <select name="tipo-consulta" id="tipo-consulta" className="flex border rounded-lg py-2 px-4 w-full bg-white">
                                    <option value="default" hidden>--Seleccione una opcion--</option>
                                    <option value="compra">Compra</option>
                                    <option value="alquiler">Alquiler</option>
                                    <option value="venta">Venta</option>
                                    <option value="evaluacion">Evaluación</option>
                                    <option value="hipoteca">Hipoteca</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>

                            <div className="flex flex-col w-full sm:w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Fecha de la consulta
                                    <span className="text-red-700">*</span>
                                </label>
                                <input type="date" className="flex border rounded-lg py-2 px-4 w-full bg-white"/>
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div className="flex flex-col my-6 lg:my-10">
                            <label htmlFor="" className="text-[#5CA241]">
                                Mensaje
                                <span className="text-red-700">*</span>
                            </label>
                            <textarea name="" id="" rows={5} className="flex border rounded-lg py-2 px-4 resize-none w-full"></textarea>
                        </div>

                        {/* Botón */}
                        <div className="flex items-center justify-center text-white">
                            <button 
                                className="
                                    flex items-center justify-center gap-4 
                                    mx-auto w-full sm:w-[30rem]
                                    border border-transparent rounded-xl 
                                    bg-[#5CA241] py-2 px-4 cursor-pointer 
                                    hover:text-[#5CA241] hover:border-[#5CA241] hover:bg-white transition-colors"
                            >
                                Confirmar cita
                                <ArrowDownRightIcon className="border rounded-full p-1 w-8 sm:w-10"/>
                            </button>
                        </div>
                    </div>
                </ScaleIn>
            </form>
        </div>
    )
}

export default ContactoPage;