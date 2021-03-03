import React from "react";
import "./proyectosStyle.scss"
import { Link } from "react-router-dom";

const NuevoProyecto = () => {
  return (
    <div className="m-5" >
        <div className="d-flex flex-row justify-content-right mt-5 mb-3">
          <h1>Editar proyecto</h1>
        </div>
        <div className="d-flex flex-row justify-content-left p-2">
            <label className="col-form-label fs-6">Nombre:</label>
            <input type="text" class="form-control w-25 ml-2" id="inputPassword" value="Camino del padawan"/>
           
        </div>
        <div className="d-flex flex-row justify-content-left p-2">
            <label className="col-form-label fs-6">Descripción:</label>
            <input type="text" class="form-control w-25 ml-2" id="inputPassword" value="Proyecto del camino del padawan"/>
           
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center p-2">
            <label className="col-form-label fs-6">Tecnología:</label>
            <select class="form-select w-25 ml-2" aria-label="Default select example">
            <option selected>JavaScript</option>
            <option>Java</option>
            <option>Go</option>
            </select>
           
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center p-2">
            <label className="col-form-label fs-6">Generación:</label>
            <select class="form-select w-25 ml-2" aria-label="Default select example">
            <option selected>Generación 11</option>
            </select>
           
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center mt-2 p-2">
            <h3>Padawans:</h3>           
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center ">
            <h5>Seleccionados: 0</h5>           
        </div>
        <div className="d-flex flex-row">
            <table className="table table-bordered">
                    <thead class="headt">
                        <tr>
                            <th scope="col" className="text-center">Nombre</th>                            
                            <th scope="col" className="text-center">País, Ciudad</th>
                            <th className="text-center">Preferencias</th>
                            <th scope="col" className="text-center">Selecionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center align-middle">Padawan1</td>                            
                            <td className="text-center align-middle">México,CDM</td>
                            <td className="text-center align-middle">Backend node</td>
                            <td className="text-center align-middle"><input type="checkbox" id="cbox2" value="second_checkbox" className="fs-4 checkbox" checked/></td>                            
                        </tr>
                    </tbody>
            </table>
        </div>
        <div className="d-flex flex-row ">
                <button type="button" class="btn m-1 nuevoProyecto">Crear</button>
                <Link type="button" to="/proyectos" class="btn m-1 btn btn-danger">Cancelar</Link>
        </div>
       
   </div>
   
    );
};

export default NuevoProyecto;