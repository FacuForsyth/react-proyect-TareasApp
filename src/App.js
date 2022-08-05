import './App.css';
import ListaTareas from './components/ListaTareas';
//import Tarea from './components/Tarea.js';
//import TareaFormulario from './components/TareaFormulario';
import imagenFacundo from './img/imagenFacundo.png';

function App() {
  return (
    <div className="App">
      <div className='facundo-logo-contenedor'>
        <img 
          src={imagenFacundo}
          className='facundo-logo'
          alt=''
          />
      </div>
      <div className='lista-tareas'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
