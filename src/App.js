/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './App.css';

import ListOfSingleGeocode from './components/ListOfSingleGeocode';

function App() {
  return (
    <div className="App">
      <p>Hola</p>
      <ul className="listing">
        <ListOfSingleGeocode direccion="Plaza de la Corredera" />

      </ul>

    </div>

  );
}

export default App;
