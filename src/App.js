import './App.css';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Perfil from './componentes/Perfil';
import Proyectos from './componentes/Proyectos';
import Tecnologias from './componentes/Tecnologias';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Inicio />
      <Perfil />
      <Proyectos />
      <Tecnologias />
      <Footer />
    </div>
  );
}

export default App;
