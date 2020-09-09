/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import './App.css';

import ListOfSingleGeocode from './components/ListOfSingleGeocode';

function App() {
  const [direccion, setDireccion] = useState('Avenida de Carlos II 2 Córdoba');

  return (

    <div className="App">
      <h1>Buscador</h1>

      <button type="button" onClick={() => setDireccion('Plaza de la Corredera Córdoba')}>
        Cambiar direccion
      </button>
      <ul className="listing">
        <ListOfSingleGeocode direccion={direccion} />
      </ul>

    </div>

  );
}

export default App;
