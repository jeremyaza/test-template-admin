import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Pages
const Login = React.lazy(() => import("./modules/Login/Login"));
const Recuperar1 = React.lazy(() => import("./modules/Recuperar_contraseña/Recuperar1"));
const Recuperar2 = React.lazy(() => import("./modules/Recuperar_contraseña/Recuperar2"));
const Home = React.lazy(() => import("./modules/Home/home"));
const Prepadawan = React.lazy(() => import("./modules/Prepadawan/Prepadawan"));
const PrepadawanDetalle = React.lazy(() => import("./modules/Prepadawan/PrepadawanDetalle"));
const Batch = React.lazy(() => import("./modules/Batch/Batch"));
const NuevoBatch = React.lazy(() => import("./modules/Batch/NuevoBatch"));
const EditarBatch = React.lazy(() => import("./modules/Batch/EditarBatch"));
const Entrevistas = React.lazy(() => import("./modules/Entrevistas/Entrevistas"));
const Club = React.lazy(() => import("./modules/Club/Club"));
const NoAdmitidos = React.lazy(() => import("./modules/No_admitidos/NoAdmitidos"));
const Ejercicios = React.lazy(() => import("./modules/Ejercicios/Ejercicios"));
const NuevoEjercicio = React.lazy(() => import("./modules/Ejercicios/NuevoEjercicio"));
const EditarEjercicio = React.lazy(() => import("./modules/Ejercicios/EditarEjercicio"));
const Generaciones = React.lazy(() => import("./modules/Generaciones/Generaciones"));
const NuevaGeneracion = React.lazy(() => import("./modules/Generaciones/NuevaGeneracion"));
const EditarGeneracion = React.lazy(() => import("./modules/Generaciones/EditarGeneracion"));
const Proyectos = React.lazy(() => import("./modules/Proyectos/Proyectos"));
const NuevoProyecto = React.lazy(() => import("./modules/Proyectos/NuevoProyecto"));
const EditarProyecto = React.lazy(() => import("./modules/Proyectos/EditarProyecto"));
const Programas = React.lazy(() => import("./modules/Programas/Programas"));
const Mentores = React.lazy(() => import("./modules/Mentores/Mentores"));
const Aprendizaje = React.lazy(() => import("./modules/Aprendizaje/Aprendizaje"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/recuperar"
              name="Recovery password Page"
              render={(props) => <Recuperar1 {...props} />}
            />
            <Route
              exact
              path="/nuevacontraseña"
              name="Recovery password Page"
              render={(props) => <Recuperar2 {...props} />}
            />
            <Route
              exact
              path="/home"
              name="Home"
              render={(props) => <Home {...props} />}
            />
            <Route
              exact
              path="/prepadawans"
              name="Prepadawan"
              render={(props) => <Prepadawan {...props} />}
            />
            <Route
              exact
              path="/prepadawandetalle"
              name="PrepadawanDetalle"
              render={(props) => <PrepadawanDetalle {...props} />}
            />
            <Route
              exact
              path="/batch"
              name="Batch"
              render={(props) => <Batch {...props} />}
            />
            <Route
              exact
              path="/nuevobatch"
              name="NuevoBatch"
              render={(props) => <NuevoBatch {...props} />}
            />
            <Route
              exact
              path="/editarbatch"
              name="EditarBatch"
              render={(props) => <EditarBatch {...props} />}
            />
            <Route
              exact
              path="/entrevistas"
              name="Etrevistas"
              render={(props) => <Entrevistas {...props} />}
            />
            <Route
              exact
              path="/club"
              name="Club"
              render={(props) => <Club {...props} />}
            />
            <Route
              exact
              path="/noadmitidos"
              name="NoAdmitidos"
              render={(props) => <NoAdmitidos {...props} />}
            />
            <Route
              exact
              path="/ejercicios"
              name="Ejercicios"
              render={(props) => <Ejercicios {...props} />}
            />
            <Route
              exact
              path="/nuevoejercicio"
              name="NuevoEjercicio"
              render={(props) => <NuevoEjercicio {...props} />}
            />
            <Route
              exact
              path="/editarejercicio"
              name="EditarEjercicio"
              render={(props) => <EditarEjercicio {...props} />}
            />
            <Route
              exact
              path="/generaciones"
              name="Generaciones"
              render={(props) => <Generaciones {...props} />}
            />
            <Route
              exact
              path="/nuevageneracion"
              name="NuevaGeneracion"
              render={(props) => <NuevaGeneracion {...props} />}
            />
            <Route
              exact
              path="/editargeneracion"
              name="EditarGeneraciones"
              render={(props) => <EditarGeneracion {...props} />}
            />
            <Route
              exact
              path="/proyectos"
              name="Proyectos"
              render={(props) => <Proyectos {...props} />}
            />
            <Route
              exact
              path="/nuevoproyecto"
              name="NuevoProyecto"
              render={(props) => <NuevoProyecto {...props} />}
            />
            <Route
              exact
              path="/editarproyecto"
              name="EditarProyecto"
              render={(props) => <EditarProyecto {...props} />}
            />
            <Route
              exact
              path="/programas"
              name="Programas"
              render={(props) => <Programas {...props} />}
            />
            <Route
              exact
              path="/mentores"
              name="Mentores"
              render={(props) => <Mentores {...props} />}
            />
            <Route
              exact
              path="/aprendizaje"
              name="Aprendizaje"
              render={(props) => <Aprendizaje {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
