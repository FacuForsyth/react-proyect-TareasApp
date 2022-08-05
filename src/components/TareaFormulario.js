import React, { useState } from "react";
import '../styles/tareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props){

  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();  //para que no se vuelva a cargar toda la app cuando envie el formulario
    const tareaNew = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    props.onSubmit(tareaNew);     //atraves de props envia al formulario
  };

  return(
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio} >
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribir una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar tarea
      </button>
    </form>
  );
};

export default TareaFormulario;