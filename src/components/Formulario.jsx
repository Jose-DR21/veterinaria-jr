import { useEffect, useState } from "react";
import shotId from 'shortid'

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {

  const [datosFormulario, setDatosFormulario] = useState({})

  const tomarCambioFormulario = (e)=>{

    setDatosFormulario({...datosFormulario, [e.target.id] : e.target.value})

    
  }

  const enviarFormulario = async (e)=>{
    e.preventDefault()

    const datosPaciente = {
      mascota: datosFormulario.mascota,
      propietario: datosFormulario.propietario,
      email: datosFormulario.email,
      alta: datosFormulario.alta,
      sintomas: datosFormulario.sintomas,
      id: datosFormulario.id? datosFormulario.id : shotId.generate()
    }

    if(paciente.id){

     const pacienteActualizado = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? datosPaciente : pacienteState)
   
      await setPacientes(pacienteActualizado)
      setPaciente({})

    }else{
      await setPacientes([...pacientes, datosPaciente])

      console.log('a')
    }

   
   

   setDatosFormulario({})
  }

  useEffect(()=>{
      if(Object.keys(paciente).length>0){
        setDatosFormulario(paciente)
      }
  },[paciente])

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
 
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-xl py-10 px-5 mb-10" onSubmit={e=>enviarFormulario(e)}>
      <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota {""}
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            onChange={e=>{tomarCambioFormulario(e)}}
            value={datosFormulario.mascota? datosFormulario.mascota : ''}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario {""}
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            onChange={e=>{tomarCambioFormulario(e)}}
            value={datosFormulario.propietario? datosFormulario.propietario : ''}

            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            email {""}
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            type="email"
            placeholder="Correo electronico contacto propietario"
            value={datosFormulario.email? datosFormulario.email : ''}
            onChange={e=>{tomarCambioFormulario(e)}}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            alta {""}
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md"
            id="alta"
            type="date"
            onChange={e=>{tomarCambioFormulario(e)}}
            value={datosFormulario.alta? datosFormulario.alta : ''}
            required            
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            sintomas {""}
          </label>
          <textarea  id="sintomas" cols="30" rows="5"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={e=>{tomarCambioFormulario(e)}}
            value={datosFormulario.sintomas? datosFormulario.sintomas : ''}

            required
            ></textarea>
        </div>

        <input type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 font-bold cursor-pointer transition-all"
        value={paciente.id? 'Editar': 'Enviar Paciente'}/>
      </form>
    </div>
  );
};

export default Formulario;
