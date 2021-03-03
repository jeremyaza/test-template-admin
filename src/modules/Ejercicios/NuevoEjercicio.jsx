import React from "react";
import "./ejerciciosStyle.scss"
import { Link } from "react-router-dom";

const NuevoEjercicio = () => {
  return (
    <div >
        <div className="d-flex flex-row justify-content-right m-5">
          <h1>Nuevo ejercicio</h1>
        </div>
        <form class="row w-75 m-5">
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Nombre:</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Descripción:</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Problem Statement</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Input format</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Constraints</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Output format</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Categoría</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Lenguaje</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <div className="d-flex flex-row">
                <button type="button" class="btn m-1 nuevoEjercicio">Crear</button>
                <Link type="button" to="/ejercicios" class="btn m-1 btn btn-danger">Cancelar</Link>
            </div>
        </form>
        
   </div>
   
    );
};

export default NuevoEjercicio;
