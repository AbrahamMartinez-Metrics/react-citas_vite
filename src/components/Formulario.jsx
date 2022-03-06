import {useState, useEffect} from "react";
import Alert from "./Alert";



const Formulario =({pacientes,setPacientes, paciente, setPaciente}) =>{

    const [petName, setPetName] = useState("")
    const [ownerName, setOwnerName] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [date, setDate] = useState("")
    const [symptom, setSymptom] = useState("") 
    const [error, setError] = useState(false)

    //hooks para las alertas
    const [message, setMessage] = useState("")
    const [classAlert, setClassAlert] = useState("")
    const [update, setUpdate] = useState(false)

    const generateId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)

        return random + date
    }

    useEffect(() => {
        
        if(paciente.id !== undefined){
            console.log("Paciente listo")
            setUpdate(true)
            setPetName(paciente.petName)
            setOwnerName(paciente.ownerName) 
            setContactEmail(paciente.contactEmail)
            setDate(paciente.date)
            setSymptom(paciente.symptom)
            
        }
    }, [paciente])

    const handleSubmit = (e) =>{
        e.preventDefault()

        if([petName, ownerName, contactEmail, date, symptom].includes("")){
            setError(true)
            setMessage("Todos los campos son obligatorios")
            setClassAlert("error")
            return          
        }
        setError(false)
        setClassAlert("")

        const objectPaciente ={
            petName, 
            ownerName, 
            contactEmail, 
            date, 
            symptom
        }

        if(paciente.id){
            objectPaciente.id = paciente.id
            const pacienteActualizado =  pacientes.map(p => p.id === paciente.id ? objectPaciente: p)
            setPacientes(pacienteActualizado)
        }else{
            objectPaciente.id = generateId()
            setPacientes([...pacientes,objectPaciente])
        }
        
        cleanForm()

    }
  
    const cleanForm = () =>{
        setPetName("")
        setOwnerName("")
        setContactEmail("")
        setDate("")
        setSymptom("")

        setPaciente({})
    }

    return (
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade paciente y {' '}
                <span className="text-indigo-600 font-bold">Administrarlos</span>
            </p>
            <form 
            onSubmit={handleSubmit}
            className="mx-5 bg-white shadow-md rounded-lg py-10 px-5 mb-9">
                <div className="mb-5">
                    <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota 
                    </label>
                    <input 
                        id="petName"
                        type="text" 
                        placeholder="Nombre de la mascota" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={petName}
                        onChange={(e)=>{ setPetName(e.target.value) } }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="ownerName" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input 
                        id="ownerName"
                        type="text" 
                        placeholder="Nombre del Propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ownerName}
                        onChange={(e)=>{ setOwnerName(e.target.value) } }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email Contacto
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Email contacto" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={contactEmail}
                        onChange={(e)=>{ setContactEmail(e.target.value) } }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input 
                        id="alta"
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={(e)=>{ setDate(e.target.value) } }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas"
                        value={symptom}
                        onChange={(e)=>{ setSymptom(e.target.value) } }
                    />
                </div>

                <div className="text-center">

                    <input 
                        type="submit"
                        className="bg-indigo-600 w-full p-3 rounded-md text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer"
                        value={paciente.id?"Editar paciente":"Agregar paciente"}
                    />

                    {
                        paciente.id&&
                        <input 
                        type="button"
                        className="bg-yellow-600 w-full p-3 rounded-md text-white font-bold uppercase hover:bg-yellow-700 cursor-pointer mt-5"
                        value="Cancelar edición"
                        onClick={()=>cleanForm()}
                    />
                    }

                </div>              

                
                <Alert
                message={message}
                classAlert={classAlert}
                />
            </form>
        </div>
    )
}

export default Formulario;