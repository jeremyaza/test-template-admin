import React from "react";
import { Link } from "react-router-dom";
import send_email from '../../resoruces/images/send_mail.svg';
import "./recuperarStyle.scss"


function Recuperar1() {
    return (
      <div className="color">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-11 col-12 mt-5 text-center">
            <div>
              <img src={send_email} className="send_email" alt="enviar email"/>
              <br/>
              <h2 className="">¡Hola administrador!, ¿has olvidado tu contraseña?</h2>        
              <h5>Ingresa tu correo y te enviaremos un enlace para que puedas restaurarla</h5>
              <br/>
            </div>
            <form className="formulario">
              <input type="email" name="email" class="form-control" placeholder="Correo" required/>
              <br/>  
              <button type="submit" className="cambiar">Cambiar contraseña</button>              
            </form>
            <br/>
            <Link to="/">Iniciar sesión</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Recuperar1;