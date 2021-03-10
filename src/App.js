import React from 'react';
import Aprendizaje from './modules/Aprendizaje/Aprendizaje'

import Batch from './modules/Batch/Batch'
import EditarBatch from './modules/Batch/EditarBatch'
import NuevoBatch from './modules/Batch/NuevoBatch'

import Club from './modules/Club/Club'

import Ejercicios from './modules/Ejercicios/Ejercicios'
import EditarEjercicios from './modules/Ejercicios/EditarEjercicio'
import NuevoEjercicio from './modules/Ejercicios/NuevoEjercicio'

import Entrevistas from './modules/Entrevistas/Entrevistas'

import Generaciones from './modules/Generaciones/Generaciones'
import NuevaGeneracion from './modules/Generaciones/NuevaGeneracion'
import EditarGeneracion from './modules/Generaciones/EditarGeneracion'

import Home from './modules/Home/home'

import Login from './modules/Login/Login'

import Mentores from './modules/Mentores/Mentores'

import No_admitidos from './modules/No_admitidos/NoAdmitidos'

import Prepadawan from './modules/Prepadawan/Prepadawan'
import PrepadawanDetalle from './modules/Prepadawan/PrepadawanDetalle'

import Programas from './modules/Programas/Programas'

import Proyectos from './modules/Proyectos/Proyectos'
import NuevoProyecto from './modules/Proyectos/NuevoProyecto'
import EditarProyecto from './modules/Proyectos/EditarProyecto'

import Recuperar1 from './modules/Recuperar_contraseña/Recuperar1'
import Recuperar2 from './modules/Recuperar_contraseña/Recuperar2'



import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/batch" component={Batch}/>
        <Route exact path="/editarbatch" component={EditarBatch}/>
        <Route exact path="/nuevobatch" component={NuevoBatch}/>
        <Route exact path="/club" component={Club}/>
        <Route exact path="/ejercicios" component={Ejercicios}/>
        <Route exact path="/editarejercicio" component={EditarEjercicios}/>
        <Route exact path="/nuevoejercicio" component={NuevoEjercicio}/>
        <Route exact path="/entrevistas" component={Entrevistas}/>
        <Route exact path="/generaciones" component={Generaciones}/>
        <Route exact path="/nuevageneracion" component={NuevaGeneracion}/>
        <Route exact path="/editargeneracion" component={EditarGeneracion}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/mentores" component={Mentores}/>
        <Route exact path="/aprendizaje" component={Aprendizaje}/>
        <Route exact path="/noadmitidos" component={No_admitidos}/>
        <Route exact path="/prepadawans" component={Prepadawan}/>
        <Route exact path="/prepadawandetalle" component={PrepadawanDetalle}/>
        <Route exact path="/programas" component={Programas}/>
        <Route exact path="/proyectos" component={Proyectos}/>
        <Route exact path="/nuevoproyecto" component={NuevoProyecto}/>
        <Route exact path="/editarproyecto" component={EditarProyecto}/>
        <Route exact path="/recuperar" component={Recuperar1}/>
        <Route exact path="/nuevacontraseña" component={Recuperar2}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
