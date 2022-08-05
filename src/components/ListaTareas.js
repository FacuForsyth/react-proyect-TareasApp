import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../styles/listaTareas.css';
import Tarea from "./Tarea";

function ListaTareas() {

  const [tareas, setTareas] = useState([]);   //es un arreglo de objetos con cada tarea

  const agregarTarea = (tarea) => {
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim()  //para sacar espacios en blanco adelante y al final
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    };
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea)=> tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea)=> {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada    //cambia a true xq es false
      };
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return(
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tarea-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto} 
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
};

export default ListaTareas;