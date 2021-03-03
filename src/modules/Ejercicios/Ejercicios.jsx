import React from 'react'
import SideBar from "../Sidebar/SideBar";
import "./ejerciciosStyle.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Ejercicios = () => {
    return (
        <div className="d-flex flex-row-reverse">
            <SideBar/>  
            <div className="col-8 col-sm-10 p-4">
                <h1>Ejercicios</h1>
                <Link type="button" to="/nuevoejercicio" class="btn nuevoEjercicio mt-4 mb-4">Nuevo Ejercicio</Link>
                <table className="table table-bordered">
                    <thead class="headt">
                        <tr>
                            <th scope="col" className="text-center">Nombre</th>
                            <th scope="col" className="text-center">Descripción</th>
                            <th scope="col" className="text-center">Lenguaje</th>
                            <th scope="col" className="text-center">Categoria</th>
                            <th scope="col" className="text-center">Editar</th>
                            <th scope="col" className="text-center">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center align-middle">Hola Mundo</td>
                            <td className="text-center align-middle">Realizar un hola mundo en javascript</td>
                            <td className="text-center align-middle">JavaScript</td>
                            <td className="text-center align-middle">Ejercicio</td>
                            <td className="text-center align-middle"><Link className="btn btn-primary" to="/editarejercicio"><FontAwesomeIcon icon={faEdit} size="lg" /></Link></td>
                            <td className="text-center align-middle"><Link className="btn btn-primary"><FontAwesomeIcon icon={faTrashAlt} size="lg" /></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ejercicios
