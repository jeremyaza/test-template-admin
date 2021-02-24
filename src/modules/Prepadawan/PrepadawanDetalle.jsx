import React from "react";
import "./prepadawans.scss"
import { Link } from "react-router-dom";

const PrepadawanDetalle = () => {
  return (
    <div >
        <div className="d-flex flex-row justify-content-end">
          <Link to="/prepadawans" className="fs-6 m-3 text-decoration-none">&lt; Volver</Link>
        </div>        
        <div className="d-flex flex-row justify-content-center m-5">
          <div className="m-3 fw-bold fs-6">
            <p>Nombre:</p>
            <p>Correo:</p>
            <p>Contraseña:</p>
            <p>Celular:</p>
          </div>
          <div className="m-3 fs-6">
            <p>Usuario1</p>
            <p>Usuario1@email.com</p>
            <p>55555</p>
            <p>+34 56446168</p>
          </div>
          <div className="m-3 fw-bold fs-6">
            <p>País:</p>
            <p>Ciudad:</p>
            <p>Ocupación:</p>
            <p>Usuario GitHub:</p>
          </div>
          <div className="m-3 fs-6">
            <p>México</p>
            <p>CDM</p>
            <p>Estudiante</p>
            <p>GitUser1</p>
          </div>          
        </div>
        <div className="d-flex flex-column m-5">
          <h3>Ejercicios</h3>
          <table class="table table-bordered">
            
            <thead class="headt">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Intentos</th>
                <th scope="col">Estado</th>
                <th scope="col">Tiempo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ejercicio1</td>
                <td>1</td>
                <td>Completo</td>
                <td>5 minutos</td>            
              </tr>
            </tbody>
          </table>
          <div className="d-flex flex-row">
            <Link type="button" class="btn m-1 butPrepadawan">Enviar correo</Link>
            <button type="button" class="btn m-1 butPrepadawan">Agendar Cita</button>
          </div>
        </div>
        
   </div>
    );
};

export default PrepadawanDetalle;
