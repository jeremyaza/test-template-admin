import React from "react";
import "./generacionesStyle.scss"
import { Link } from "react-router-dom";

const NuevaGeneracion = () => {
  return (
    <div className="m-5" >
        <div className="d-flex flex-row justify-content-right mt-5 mb-3">
          <h1>Nueva generación</h1>
        </div>
        <div className="d-flex flex-row justify-content-left p-2">
            <label className="col-form-label fs-6">Nombre:</label>
            <input type="text" class="form-control w-25 ml-2" id="inputPassword"/>
           
        </div>
        <div className="d-flex flex-row justify-content-left  p-2">
        <label className="col-form-label fs-6">Fecha de inicio:</label>
        <input type="date" className="ml-2"/>
           
        </div>
        <div className="d-flex flex-row justify-content-left p-2">
            <label className="col-form-label fs-6">Fecha de fin:</label>
            <input type="date" className="ml-2"/>
           
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center mt-2 p-2">
            <h3>Proyectos:</h3>           
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center">
            <h5>Seleccionados: 0</h5>           
        </div>

        <div className="d-flex flex-row">
            <table className="table table-bordered">
                    <thead class="headt">
                        <tr>
                            <th scope="col" className="text-center">Nombre</th>                            
                            <th className="text-center">Descripción</th>
                            <th scope="col" className="text-center">Selecionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center align-middle">Camino del padawan</td>                            
                            <td className="text-center align-middle">Proyecto del camino del padawan</td>                            
                            <td className="text-center align-middle"><input type="checkbox" id="cbox2" value="second_checkbox" className="fs-4 checkbox"/></td>                            
                        </tr>
                    </tbody>
            </table>
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
                            <td className="text-center align-middle"><input type="checkbox" id="cbox2" value="second_checkbox" className="fs-4 checkbox"/></td>                            
                        </tr>
                    </tbody>
            </table>
        </div>

        <div className="d-flex flex-row ">
                <button type="button" class="btn m-1 nuevaGeneracion">Crear</button>
                <Link type="button" to="/generaciones" class="btn m-1 btn btn-danger">Cancelar</Link>
        </div>
       
   </div>
   
    );
};

export default NuevaGeneracion;