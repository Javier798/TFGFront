import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Campeones from './campeones/Campeones';
import Usuario from './usuario/Usuario';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/usuario">
            usuario
          </Link>
          <Link to="/">
            home
          </Link>
          <Link to="/campeones">
            campeones
          </Link>
        </header>
        <Routes>
          <Route path="/usuario" element={<Usuario/>} />
          <Route path="/" element={<p>Home</p>} />
          <Route path="/campeones/*" element={<Campeones></Campeones>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
