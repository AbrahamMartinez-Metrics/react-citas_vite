const Paciente = ({paciente, setPaciente, deletePaciente}) => {

    return (
        <div className=" mx-10 bg-white shadow-md rounded-lg ml-3 py-10 px-5 mb-5">
            <p className="font-bold mb-3 text-gray-700 uppercase"> 
                Nombre: {''}
                <span className="font-normal normal-case">
                    {paciente.petName}                        
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> 
                Dueño: {''}
                <span className="font-normal normal-case">
                    {paciente.ownerName}                     
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> 
                Email: {''}
                <span className="font-normal normal-case">
                    {paciente.contactEmail}                     
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> 
                Fecha de alta: {''}
                <span className="font-normal normal-case">
                    {paciente.date}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> 
                Síntomas: {''}
                <span className="font-normal normal-case">
                    {paciente.symptom}
                </span>
            </p>
            <div className="text-right">
                <input 
                    type="button"
                    value="Editar"
                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700  cursor-pointer rounded-lg text-center uppercase text-white m-2 font-bold"
                    onClick={()=>setPaciente(paciente)}
                />
                <input 
                    type="button"
                    value="Eliminar"
                    className="px-5 py-2 bg-red-600 hover:bg-red-700 cursor-pointer rounded-lg text-center uppercase text-white m-2 font-bold"
                    onClick={()=>deletePaciente(paciente.id)}
                />
            </div>
        </div>
    );
}

export default Paciente;