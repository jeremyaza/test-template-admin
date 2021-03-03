import React from "react";
import new_password from '../../resources/images/new_password.svg';
import "./recuperarStyle.scss"
import { Link } from "react-router-dom";


function Recuperar2() {
    return (
      <div className="color">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-11 col-12 mt-5 text-center">
            <div>
              <img src={new_password} className="send_email" alt="nueva contraseña"/>
              <br/>
              <br/>
              <h2 className="">Cambiar contraseña</h2>                      
              <br/>
            </div>
            <form className="formulario">
              <input type="email" name="email" class="form-control" placeholder="Nueva contraseña" required/>
              <br/>
              <input type="email" name="email" class="form-control" placeholder="Repetir nueva contraseña" required/>
              <br/>  
              <Link type="submit" className="cambiar" to="/nuevacontraseña">Cambiar mi contraseña</Link>              
            </form>
            <br/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Recuperar2;