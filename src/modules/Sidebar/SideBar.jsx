import React from "react";
import { Link } from "react-router-dom";
import logo_administracion from '../../resources/images/logo_white.png';
import "./SideBar.scss"
function SideBar() {
    return (
    <div className="col-4 col-sm-2 colside min-vh-100 fixed-top list-group list-group-flush p-0">         
        <img src={logo_administracion} className="m-2 w-75 img-fluid" alt="admin logo"/>

        <p className="m-3 fw-bold fs-6 text-light">INICIO</p>
        <Link to="/home" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Dashboard</span>                         
        </Link>

        <p className="m-3 fw-bold fs-6 text-light">SOLICITUDES</p>
        <Link to="/prepadawans" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Prepadawans</span>                         
        </Link>
        <Link to="/entrevistas" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Entrevistas</span>                         
        </Link>
        <Link to="/club" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Club</span>                         
        </Link>
        <Link to="/noadmitidos" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">No admitidos</span>                         
        </Link>

        <p className="m-3 fw-bold fs-6 text-light">CATÁLOGO</p>
        <Link to="/batch" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Batch</span>                         
        </Link>
        <Link to="/ejercicio" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Ejercicios</span>                         
        </Link>
        <Link to="/generaciones" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Generaciones</span>                         
        </Link>
        <Link to="/proyectos" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Proyectos</span>                         
        </Link>
        <Link to="/programas" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Programas</span>                         
        </Link>
        <Link to="/mentores" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Mentores</span>                         
        </Link>
        <Link to="/aprendizaje" className="w-100 opt text-decoration-none">
            <span className="ml-5 fs-6">Aprendizaje</span>                         
        </Link>           
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