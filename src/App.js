import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Titulo from './components/Titulo';
import Prueba from './components/Prueba';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Saludo nombre="Carlos" />
        <Titulo titulo="Hola mundo desde el componente titulo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Prueba />
    </div>
  );
}

export default App;
