import React from "react";
import "./prepadawans.scss";
import SideBar from "../Sidebar/SideBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Prepadawan = () => {
  return (
    <div className="d-flex flex-row-reverse">
      <SideBar/>  
      <div className="col-8 col-sm-10 p-4">
        <h1>Prepadawans</h1>
        <select class="form-select batch-selector mt-4 mb-4" aria-label="Default select example">
          <option selected>Batch 1</option>
          <option value="1">Batch 2</option>
          <option value="2">Batch 3</option>
          <option value="3">Batch 4</option>
        </select>
        <table class="table table-bordered">
          <thead class="headt">
            <tr>
              <th scope="col" className="text-center">Nombre</th>
              <th scope="col" className="text-center">País-Ciudad</th>
              <th scope="col" className="text-center">GitHub</th>
              <th scope="col" className="text-center">Ejercicios</th>
              <th scope="col" className="text-center">Entrevista</th>
              <th scope="col" className="text-center">Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center align-middle">Usuario1</td>
              <td className="text-center align-middle">México, CDM</td>
              <td className="text-center align-middle">GitUser1</td>
              <td className="text-center align-middle">1/1</td>
              <td className="text-center align-middle">Sin asignar</td>
              <td className="text-center align-middle"><Link to="/prepadawandetalle" className="btn btn-primary"><FontAwesomeIcon icon={faAddressCard} size="lg" /></Link></td>
            </tr>
          </tbody>
        </table>
        
      </div>
              
   </div>
    );
};

export default Prepadawan;
