import Paciente from "./Paciente";

const ListadoPacientes = ({eliminarPaciente, pacientes, setPaciente}) => {


  
  return ( <>
    {pacientes && pacientes.length ?  ( <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
    <h2 className="font-black text-3xl text-center">Listado pacientes</h2>

    <p className="text-xl mt-5 mb-10 text-center">
      {" "}
      Admnistra tus {""}
      <span className="text-indigo-600">Pacientes y Citas</span>
    </p>

    {pacientes.map(((paciente, index) => {
      return(
   
        
         <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}></Paciente> 
     
       
        
      )
    }))}
    
  </div> ) : ( <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        {" "}
        Agrega a tus pacientes y  {""}
        <span className="text-indigo-600">apareceran aqui</span>
      </p>

  
      
    </div> ) }
</>
    
  );
};

export default ListadoPacientes;
