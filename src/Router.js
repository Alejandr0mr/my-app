import './Router.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Registro from './componentes/Registro';
import Inicio from './componentes/Inicio';
import NotFound from './componentes/NotFound';
import Tutoriales from './componentes/Tutoriales';
import Referencias from './componentes/Referencias';
import Recursos from './componentes/Recursos';
import Contacto from './componentes/Contacto';
import Login from './componentes/Login';
import UsuariosRegistrados from './componentes/UsuariosRegistrados';
import Slider from './componentes/slider/slider';
import InicioSesionIniciada from './componentes/InicioSesionIniciada';




function Router() {
  return (

    <HashRouter>

      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/registro' element={<Registro />}/>
        <Route exact path="*" element={<NotFound/>}/>
        <Route exact path="/tutoriales" element={<Tutoriales/>}/>
        <Route exact path="/referencias" element={<Referencias/>}/>
        <Route exact path="/recursos" element={<Recursos/>}/>
        <Route exact path="/contacto" element={<Contacto/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/usuarios-registrados" element={<UsuariosRegistrados/>}/>
        <Route exact path="/slider" element={<Slider/>}/>
        <Route exact path = '/sesion' element={<InicioSesionIniciada/>}/>
  
      </Routes>

    </HashRouter>

  );
}

export default Router;