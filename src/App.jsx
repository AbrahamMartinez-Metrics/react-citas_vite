
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import {useState, useEffect} from "react";


const App = () => {

 const [pacientes, setPacientes] = useState([])
 const [paciente, setPaciente] = useState({})

 
 useEffect(() =>{
   const pacientesLS = JSON.parse(localStorage.getItem("pacientes"))??[]
   setPacientes(pacientesLS)
 },[])

 useEffect(() => {
   localStorage.setItem('pacientes', JSON.stringify(pacientes))
 }, [pacientes])

 const deletePaciente = (id) => {
   
   const pacienteEliminado = pacientes.filter(p => p.id !== id )
   setPacientes(pacienteEliminado)
   setPaciente({})
 }

  return (
    <div className="container mx-auto mt-20">    
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}  
          setPaciente={setPaciente}
        />      
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          deletePaciente={deletePaciente}
        />
      </div>
    </div>
  )
}

export default App
