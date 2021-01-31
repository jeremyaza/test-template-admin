import React, { useState, useContext, useEffect } from "react";
import logo_hackademy from '../../resoruces/images/hackademy-logo.svg';
import "./loginStyle.scss"


function Login() {
 
  
    return (
      <div className="container" className="color">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-11 col-12 mt-5 align-self-center content_form text-center">
            <div>
              <img src={logo_hackademy} className="logo_hackademy"/>
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
              <button type="submit" className="ingresar">Ingresar</button>              
            </form>
            <br/>
            <a>¿Olvidaste tu contraseña?</a>
          </div>
          
        </div>
       
       
        
        
      </div>
    );
  }
  
  export default Login;