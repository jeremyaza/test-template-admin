import React from 'react'
import SideBar from "../Sidebar/SideBar";
import "./batchStyle.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Batch = () => {
    return (
        <div className="d-flex flex-row-reverse">
            <SideBar/>  
            <div className="col-8 col-sm-10 p-4">
                <h1>Batch</h1>
                <Link type="button" to="/nuevobatch" class="btn nuevoBatch mt-4 mb-4">Nuevo Batch</Link>
                <table className="table table-bordered">
                    <thead class="headt">
                        <tr>
                            <th scope="col" className="text-center">Nombre</th>
                            <th scope="col" className="text-center">Fecha de inicio</th>
                            <th scope="col" className="text-center">Fecha de fin</th>
                            <th scope="col" className="text-center">Estado</th>
                            <th scope="col" className="text-center">Editar</th>
                            <th scope="col" className="text-center">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center align-middle">Batch1</td>
                            <td className="text-center align-middle">1/1/21</td>
                            <td className="text-center align-middle">15/1/21</td>
                            <td className="text-center align-middle">Activo</td>
                            <td className="text-center align-middle"><Link className="btn btn-primary" to="/editarbatch"><FontAwesomeIcon icon={faEdit} size="lg" /></Link></td>
                            <td className="text-center align-middle"><Link className="btn btn-primary"><FontAwesomeIcon icon={faTrashAlt} size="lg" /></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Batch
