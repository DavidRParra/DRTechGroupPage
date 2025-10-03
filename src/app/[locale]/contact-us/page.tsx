import ScaleIn from "@/app/components/ScaleIn";
import { ArrowDownRightIcon } from "@heroicons/react/20/solid"

function ContactoPage(){
    return (
        <div className="flex flex-col w-full items-center text-[1.8rem] h-[85vh] justify-center"
        style={{backgroundImage: "url('/Slider5.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            
            <form action="" className="flex flex-col w-[70%]  border border-[#5CA241]/0 rounded-lg bg-white/0 shadow-lg">
                <ScaleIn>
                    <div className="bg-white py-8 px-20 rounded-lg">
                        <div className="mt-10">
                            <h2 className="text-[3rem] font-semibold text-[#5CA241] mb-5">Formulario de Consultas</h2>
                            <p className="font-semibold">Cuentanos lo que buscas y lo haremos realidad.</p>
                        </div>
                        <div className="flex w-full justify-between items-center mt-10">
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Nombre
                                    <span className="text-red-700">*</span>
                                </label>
                                <input type="text" placeholder="Jose" className="flex border rounded-lg py-2 px-4" />
                            </div>

                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Apellido
                                    <span className="text-red-700">*</span>
                                </label>
                                <input type="text" placeholder="Rodriguez" className="flex border rounded-lg py-2 px-4"/>
                            </div>
                        </div>

                        <div className="flex w-full justify-between items-center mt-10">
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Telefono
                                    <span className="text-red-700">*</span>
                                </label>
                                <input type="number" placeholder="8299992211" className="flex border rounded-lg py-2 px-4" />
                            </div>

                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Correo
                                    <span className="text-red-700">*</span>
                                </label>
                                <input type="text" placeholder="JRodriguez@Ejemplo.com" className="flex border rounded-lg py-2 px-4"/>
                            </div>
                        </div>

                        
                        <div className="flex w-full items-center justify-between mt-10">
                            <div className="flex flex-col mt-5 w-[48%]">

                                <label htmlFor="" className="text-[#5CA241]">
                                    Tipo de consulta
                                    <span className="text-red-700">*</span>
                                </label>

                                <select name="tipo-consulta" id="tipo-consulta" className="flex border rounded-lg py-2 px-4">
                                    <option value="default" hidden>--Sleccione una opcion--</option>
                                    <option value="compra">Compra</option>
                                    <option value="alquiler">Alquiler</option>
                                    <option value="venta">Venta</option>
                                    <option value="evaluacion">Evaluación</option>
                                    <option value="hipoteca">Hipoteca</option>
                                    <option value="compra">Otro</option>
                                </select>

                            </div>

                            <div className="flex flex-col mt-5 w-[48%]">
                                <label htmlFor="" className="text-[#5CA241]">
                                    Fecha de la consulta
                                    <span className="text-red-700">*</span>
                                </label>

                                <input type="date" className="flex border rounded-lg py-2 px-4"/>
                            </div>

                        </div>



                        <div className="flex flex-col my-10">
                            <label htmlFor="" className="text-[#5CA241]">
                                Mensaje
                                <span className="text-red-700">*</span>
                            </label>
                            <textarea name="" id="" rows={5} className="flex border rounded-lg py-2 px-4 resize-none"></textarea>
                        </div>

                        <div className="flex items-center justify-center text-white">
                        <button 
                            className="
                                flex items-center justify-center gap-4 
                                mx-auto w-[30rem]
                                border border-transparent rounded-xl 
                                bg-[#5CA241] py-1 px-4 cursor-pointer 
                                hover:text-[#5CA241] hover:border-[#5CA241] hover:bg-white"
                            >
                            Confirmar cita
                            <ArrowDownRightIcon className="border rounded-full p-1 w-10"/>
                        </button>
                    </div>
                    </div>
                </ScaleIn>

            </form>
            

        </div>
    )
}

export default ContactoPage;