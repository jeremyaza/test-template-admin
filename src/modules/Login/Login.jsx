import React from "react";
import { Link } from "react-router-dom";
import logo_hackademy from '../../resources/images/hackademy-logo.svg';
import "./loginStyle.scss"


function Login() {
    return (
      <div className="color screen">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-11 col-12 mt-5 text-center">
            <div>
              <img src={logo_hackademy} className="logo_hackademy" alt="logo de hackademy"/>
              <br/>
              <p className="titulo">Administración</p>
              <h2 className="">Iniciar sesión</h2>
              <br/>
            </div>
            <form className="formulario">
              <input type="email" name="email" class="form-control" placeholder="Correo" required/> 
              <br/>          
              <input type="password" name="password" class="form-control" placeholder="Contraseña" required/>
              <br/>  
              <Link type="submit" className="ingresar" to="/home">Ingresar</Link>           
            </form>
            <br/>
            <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;