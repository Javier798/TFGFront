import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Campeones from './campeones/Campeones';
import Usuario from './usuario/Usuario';
import Inicio from './Inicio';
import Campeon from './campeon/Campeon';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/usuario">
            usuario
          </Link>
          <Link to="/inicio">
            home
          </Link>
          <Link to="/campeones">
            campeones
          </Link>
          <Link to="/campeon">
            campeon
          </Link>
        </header>
        <Routes>
          <Route path="/usuario/:summonername" element={<Usuario/>} />
          <Route path="/" element={<Inicio></Inicio>} />
          <Route path="/campeones/*" element={<Campeones></Campeones>} />
          <Route path="/campeon/:id" element={<Campeon></Campeon>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

