import logo from './logo.svg';
import './App.css';

import './Style/upnfm.css'
import Header from './Componentes/Header'
import Presentador from './Componentes/Presentador'
import Busqueda from './Componentes/Busqueda';
import Informacion from './Componentes/Informacion';
import Footer from './Componentes/Footer'
function App() {
  return (
    <div className="App">
    <Header/>
    <Presentador/>
    <Busqueda/>
    <Informacion/>
    <Footer/>
    </div>
  );
}

export default App;
