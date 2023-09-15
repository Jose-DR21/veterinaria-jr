
const Paciente = ( { eliminarPaciente, paciente, setPaciente } ) => {

    


  return (
    <div className="mx-5 my-10  px-5 py-10 rounded-lg bg-white shadow-md">
        
        <p className="font-bold mb-3 text-gray-700 uppercase text-right">
        <span className="font-bold normal-case text-indigo-600 underline p-1">{paciente.id}</span>
       
      </p>
   <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Nombre: {""}
        <span className="font-normal normal-case">{paciente.mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Fecha Alta: {""}
        <span className="font-normal normal-case">{paciente.alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Sintomas: {""}
        <span className="font-normal normal-case">{paciente.sintomas}</span></p>

        <div className="flex justify-between mt-10">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
            onClick={()=>{setPaciente(paciente)}}>Editar</button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
            onClick={()=>{eliminarPaciente(paciente.id)}}>Eliminar</button>

        </div>
    </div>
  )
}

export default Paciente
