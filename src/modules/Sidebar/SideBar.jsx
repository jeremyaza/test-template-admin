import React from "react";
import { Link } from "react-router-dom";
import logo_administracion from '../../resources/images/logo_white.png';
import "./SideBar.scss"
function SideBar() {
    return (
    <div className="col-4 col-sm-2 nav col min-vh-100 fixed-top list-group list-group-flush">         
        <img src={logo_administracion} className="m-2 w-75 img-fluid" alt="admin logo"/>

        <p className="m-2 fw-bold fs-6 text-light">INICIO</p>

        <div className="w-100">
            <Link className="text-decoration-none"><a className="m-2 ml-4 fs-6 text-light">Dashboard</a></Link>                         
        </div>
        <p className="m-2 fw-bold fs-6 text-light">SOLICITUDES</p>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Prepadawans</a></Link>
        </div>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Entrevistas</a></Link>
        </div>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Club</a></Link>
        </div>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">No admitidos</a></Link>
        </div>

        <p className="m-2 fw-bold fs-6 text-light">CATÁLOGO</p>

        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Batch</a></Link>
        </div>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Ejercicios</a></Link>
        </div>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Generaciones</a></Link>
        </div>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Proyectos</a></Link>
        </div>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Programas</a></Link>
        </div>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Entrevistas</a></Link>
        </div>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Mentores</a></Link>
        </div>
        <div className="">
            <Link className="text-decoration-none"><a  className="m-2 ml-4 fs-6 text-light">Aprendizaje</a></Link>
        </div>            
    </div>
/*
         <div className="nav">
            
            <div className="side">
                <a href="/#/home"><p className="bold">INICIO</p></a>
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
         */
    );
  }
  
  export default SideBar;