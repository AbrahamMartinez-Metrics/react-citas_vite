import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, deletePaciente}) => {
    return(
        
        <div className="md:w-1/2 lg:w-3/5 ">

            { pacientes && pacientes.length? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado de pacientes
                    </h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Administra tus {' '}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>


                    <div className="h-screen md:overflow-y-auto">

                    {
                        pacientes.map( paciente => (
                            
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                deletePaciente={deletePaciente}
                            />
                        ))
                    }
                    

                    </div>
                </>

            ): (
                <>
                    <h2 className="font-black text-3xl text-center">
                        No hay pacientes
                    </h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Comienza agregando un paciente {' '}
                        <span className="text-indigo-600 font-bold">y los podras ver en esta sección</span>
                    </p>
                </>
            )}
        </div>

    )
}

export default ListadoPacientes;