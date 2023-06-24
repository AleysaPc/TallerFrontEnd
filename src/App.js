import logo from './logo.svg';
import './App.css';
import User from './user/index';
import Rest from './rest/index';
import Hora from './ejemplos/hora';
import Hook from './ejemplos/hook';
import Array from './ejemplos/array';

import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  /*[user, setUser] se llama en parrafo a la variable que se declara en este caso user*/
  /*se declara funciones en el medio antes de return
  en llaves para llavar a la variable, bajo de p
  const no permite cambiar el valor =const igual a constatne
  let permite el cambio*/

 

  return (
    <div className="App">
      <header className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
         
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <h3>Ejemplo  Hook</h3>
      <Hook/>
      <br/><hr/>
      <h3>Ejemplo Hora</h3>
      <Hora/>
      <h3>Ejemplo Array</h3>
      <Array/>
      <h3>Ejemplo Rest</h3>
      <Rest/>
      <br/><hr/>
    </div>
  );
}

export default App;
