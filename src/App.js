import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Titulo from './components/Titulo';
import Prueba from './components/Prueba';
import Card from './Card';

import Tarjeta from './components/Tarjeta';
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
        <Card imageUrl="https://www.infobae.com/resizer/v2/4JWGAYUG7VGG7CCFRR4OLCY3UU.jpg?auth=b478a1cb2722c55c2e9f14a52b644653ff862912652d52a42b5e0b259c92f356&smart=true&width=992&height=558&quality=85"/>
        <Tarjeta nombre="Rafael" descripcion="Esta es un descripción de prueba"/>

      </header>
      <Prueba />
    </div>
  );
}

export default App;
