import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./modules/Login/Login"));
const Recuperar1 = React.lazy(() => import("./modules/Recuperar_contraseña/Recuperar1"));
const Recuperar2 = React.lazy(() => import("./modules/Recuperar_contraseña/Recuperar2"));
const Home = React.lazy(() => import("./modules/Home/home"));
const Prepadawan = React.lazy(() => import("./modules/Prepadawan/Prepadawan"));
const PrepadawanDetalle = React.lazy(() => import("./modules/Prepadawan/PrepadawanDetalle"));
const Batch = React.lazy(() => import("./modules/Batch/Batch"));
const Entrevistas = React.lazy(() => import("./modules/Entrevistas/Entrevistas"));
const Club = React.lazy(() => import("./modules/Club/Club"));
const No_admitidos = React.lazy(() => import("./modules/No_admitidos/NoAdmitidos"));
const Ejercicios = React.lazy(() => import("./modules/Ejercicios/Ejercicios"));
const Genereaciones = React.lazy(() => import("./modules/Generaciones/Generaciones"));
const Proyectos = React.lazy(() => import("./modules/Proyectos/Proyectos"));
const Programas = React.lazy(() => import("./modules/Programas/Programas"));
const Mentores = React.lazy(() => import("./modules/Mentores/Mentores"));
const Aprendizaje = React.lazy(() => import("./modules/Aprendizaje/Aprendizaje"));




const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

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
              name="No_admitidos"
              render={(props) => <No_admitidos {...props} />}
            />
            <Route
              exact
              path="/ejercicios"
              name="Ejercicios"
              render={(props) => <Ejercicios {...props} />}
            />
            <Route
              exact
              path="/generaciones"
              name="Genereaciones"
              render={(props) => <Genereaciones {...props} />}
            />
            <Route
              exact
              path="/proyectos"
              name="Proyectos"
              render={(props) => <Proyectos {...props} />}
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
            



            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
