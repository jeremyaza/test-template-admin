import React from "react";
import logo_administracion from '../../resources/images/logo_administracion.svg';
import "./homeStyle.scss"
function Home() {
    return (
     <div className="row">
         <div className="col-2 color ">
            <img src={logo_administracion} className="logo_hackademy" alt="logo de hackademy"/>
            <div className="side">
                <p className="bold">INICIO</p>
                <p className="bold"> SOLICITUDES</p>
                <p className="option">Prepadawans</p>
                <p className="option">Entrevistas</p>
                <p className="option">Club</p>
                <p className="option">No admitidos</p>
                <p className="bold">CATÁLOGO</p>
                <p className="option">Batch</p>
                <p className="option">Ejercicios</p>
                <p className="option">Generaciones</p>
                <p className="option">Proyectos</p>
                <p className="option">Programas</p>
                <p className="option">Mentores</p>
                <p className="option">Aprendizaje</p>
            </div>
         </div>
         <div className="col-10">

         </div>

     </div>
    );
  }
  
  export default Home;