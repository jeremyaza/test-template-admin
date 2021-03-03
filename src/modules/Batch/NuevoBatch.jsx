import React from "react";
import "./batchStyle.scss"
import { Link } from "react-router-dom";

const NuevoBatch = () => {
  return (
    <div className="m-5" >
        <div className="d-flex flex-row justify-content-right mt-5 mb-3">
          <h1>Nuevo batch</h1>
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
        <div className="d-flex flex-row justify-content-left align-items-center p-2">
            
            <label className="col-form-label fs-6">Estado:</label>
            <div class="form-check form-check-inline ml-2">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label class="form-check-label" for="inlineRadio1">Activo</label>
            </div>
            <div class="form-check form-check-inline ml-2">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label class="form-check-label" for="inlineRadio1">Inactivo</label>
            </div>
            
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center mt-2 p-2">
            <h3>Ejercicios:</h3>           
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center p-2">
            <h5>Seleccionados: 0</h5>           
        </div>
        <div className="d-flex flex-row">
            <table className="table table-bordered">
                    <thead class="headt">
                        <tr>
                            <th scope="col" className="text-center">Nombre</th>                            
                            <th scope="col" className="text-center">Lenguaje</th>
                            <th className="text-center">Descripción</th>
                            <th scope="col" className="text-center">Selecionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center align-middle">Hola Mundo</td>                            
                            <td className="text-center align-middle">JavaScript</td>
                            <td className="text-center align-middle">Realizar un hola mundo en javascript</td>
                            <td className="text-center align-middle"><input type="checkbox" id="cbox2" value="second_checkbox" className="fs-4 checkbox"/></td>                            
                        </tr>
                    </tbody>
            </table>
        </div>

        <div className="d-flex flex-row ">
                <button type="button" class="btn m-1 nuevoBatch">Crear</button>
                <Link type="button" to="/batch" class="btn m-1 btn btn-danger">Cancelar</Link>
        </div>
       
   </div>
   
    );
};

export default NuevoBatch;