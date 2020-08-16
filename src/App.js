/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import getGeocoders from './services/getCartociudadCandidates';
import './App.css';

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
        {
      geocoders.map((singleGeocode) => (
        <li key={singleGeocode.id}>
          <p className="address">{singleGeocode.address}</p>
          <div className="body">
            <p> {singleGeocode.stateMsg} </p>
            <p> {singleGeocode.type} </p>
            <p> {singleGeocode.type} </p>
          </div>
          <div className="cta"><a href="/">Mapa</a></div>
        </li>

      ))
    }
      </ul>

    </div>

  );
}

export default App;
