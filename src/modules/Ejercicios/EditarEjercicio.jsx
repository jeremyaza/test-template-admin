import React from "react";
import "./ejerciciosStyle.scss"
import { Link } from "react-router-dom";

const EditarEjercicio = () => {
  return (
    <div >
        <div className="d-flex flex-row justify-content-right m-5">
          <h1>Editar ejercicio</h1>
        </div>
        <form class="row w-75 m-5">
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Nombre:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" value="Hola Mundo"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Descripción:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" value="Realizar un hola mundo en javascript"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Problem Statement</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Input format</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Constraints</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Output format</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Categoría</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" value="Ejercicio"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Lenguaje</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" value="JavaScript"/>
                </div>
            </div>
            <div className="d-flex flex-row">
                <button type="button" class="btn m-1 nuevoEjercicio">Guardar</button>
                <Link type="button" to="/ejercicios" class="btn m-1 btn btn-danger">Cancelar</Link>
            </div>
        </form>
        
   </div>
   
    );
};

export default EditarEjercicio;
