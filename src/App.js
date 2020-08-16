/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import getGeocoders from './services/getCartociudadCandidates';
import './App.css';

import ListOfSingleGeocode from './components/ListOfSingleGeocode';

function App() {
  const [geocoders, setGeocoders] = useState([]);

  useEffect(() => {
    getGeocoders({ direccion: 'plaza corredera 2 córdoba' })
      .then((geocoders) => setGeocoders(geocoders));
  }, []);

  return (
    <div className="App">
      <p>Hola</p>
      <ul className="listing">
        <ListOfSingleGeocode geocoders={geocoders} />

      </ul>

    </div>

  );
}

export default App;
