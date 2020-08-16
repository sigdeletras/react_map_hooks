/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { getAPICandidates } from './services/getCartociudadCandidadtes';
import './App.css';

const address = 'Avenida Gran Vía Parque 4 córdoba';
const MAX_RESULTS = 10;

const APIURL = `http://www.cartociudad.es/CartoGeocoder/Geocode?address=${address}&max_results=${MAX_RESULTS}`;

function App() {
  const [geocoders, setGeocoders] = useState([]);

  // useEffect(() => {
  //   fetch(APIURL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const { result } = data;
  //       console.log(result);
  //       // const geocoders = data.map((latitude) => result.latitude);
  //       // console.log(geocoders);
  //       setGeocoders(data.result);
  //     });
  // }, []);

  useEffect(() => {
    const datos = getAPICandidates();
    console.log('---------useEffect-----');
    console.log(datos);
    setGeocoders(datos);
  }, []);

  return (
    <div className="App">
      <ul className="listing">
        {/* {
       geocoders.map((singleGeocode) => (
         <li key={singleGeocode.id}>
           <p className="address">{singleGeocode.road_name} {singleGeocode.numpk_name}, {singleGeocode.road_type}</p>
           <p className="address">{singleGeocode.municipality}, {singleGeocode.province}</p>
           <div className="body"><p> {singleGeocode.address} </p></div>
           <div className="cta"><a href="/">Mapa</a></div>
         </li>

       ))
      } */

}

      </ul>

    </div>

  );
}

export default App;
