import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) =>{
    const respuesta = confirm('¿Seguro que desea eliminar este registro?')

    if(respuesta){
      const filter = pacientes.filter( paciente => paciente.id != id)
      setPacientes(filter)
    }
  
  }
  useEffect(()=>{
    const obtenerLS = ()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []

      setPacientes(pacientesLS)

    }

    obtenerLS()
  },[])

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  return (
    <div className='container  mx-auto mt-10'>

      <Header></Header>

      <div className='mt-12 md:flex'>
      <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente}></Formulario>
      <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}></ListadoPacientes>
      </div>

    </div>
  )
}

export default App
