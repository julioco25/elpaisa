import './Style/style.css';
import Busqueda from './components/Busqueda';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Productos from './components/Productos';

function App() {
  return (
    <main className="react-elpaisa">
      <Busqueda/>
      <Header/>
      <Slider/>
      <Productos/>
      <Footer/>
    </main>
  );
}

export default App;