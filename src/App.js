import logo from './logo.svg';
import CardWelcome from './components/cardwelcome';
import './App.css';
import Tarjeta from './components/Tarjeta';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CardWelcome />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Tarjeta nombre="Rafael" descripcion="Esta es un descripción de prueba"/>

      </header>
    </div>
  );
}

export default App;
