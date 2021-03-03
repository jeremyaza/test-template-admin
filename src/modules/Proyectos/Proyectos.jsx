import React from 'react'
import SideBar from "../Sidebar/SideBar";
import "./proyectosStyle.scss"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Proyectos = () => {
    return (
        <div className="d-flex flex-row-reverse">
        <SideBar/>  
        <div className="col-8 col-sm-10 p-4">
            <h1>Proyectos</h1>
            <Link type="button" class="btn nuevoProyecto mt-4 mb-4" to="/nuevoproyecto">Nuevo Proyecto</Link>
            <table className="table table-bordered">
                <thead class="headt">
                    <tr>
                        <th scope="col" className="text-center">Nombre</th>
                        <th scope="col" className="text-center">Descripción</th>
                        <th scope="col" className="text-center">Tecnologías</th>
                        <th scope="col" className="text-center">Generacion</th>
                        <th scope="col" className="text-center">Editar</th>
                        <th scope="col" className="text-center">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center align-middle">Camino del padawan</td>
                        <td className="text-center align-middle">Proyecto del camino del padawan</td>
                        <td className="text-center align-middle">ReactJS y NodeJS</td>
                        <td className="text-center align-middle">Generación 11</td>
                        <td className="text-center align-middle"><Link className="btn btn-primary" to="/editarproyecto"><FontAwesomeIcon icon={faEdit} size="lg" /></Link></td>
                        <td className="text-center align-middle"><Link className="btn btn-primary"><FontAwesomeIcon icon={faTrashAlt} size="lg" /></Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Proyectos
