/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

const APIURL = 'http://www.cartociudad.es/CartoGeocoder/Geocode?address=calle%20pons%201%20barcelona%20barcelona&max_results=50';

const RESULT = [
  {
    priority: 1,
    status: 1,
    comments: 'Portal/Pk encontrado.',
    province: 'Barcelona',
    municipality: 'Barcelona',
    road_type: 'CALLE',
    road_name: 'PONS',
    road_fid: '80190002613',
    numpk_name: '1',
    zip: '08016',
    numpk_fid: '80190114908',
    longitude: 2.17991076207015988,
    latitude: 41.4439341260532998,
  },
  {
    priority: 2,
    status: 1,
    comments: 'Portal/Pk encontrado.',
    province: 'Barcelona',
    municipality: 'Barcelona',
    road_type: 'CALLE',
    road_name: 'COPONS',
    road_fid: '80190000850',
    numpk_name: '1',
    zip: '08002',
    numpk_fid: '80190162451',
    longitude: 2.17514140455209359,
    latitude: 41.3855749765574359,
  },
  {
    priority: 3,
    status: 1,
    comments: 'Portal/Pk encontrado.',
    province: 'Barcelona',
    municipality: 'Barcelona',
    road_type: 'CALLE',
    road_name: 'MASPONS',
    road_fid: '80190003024',
    numpk_name: '1',
    zip: '08012',
    numpk_fid: '80190067365',
    longitude: 2.15587617526434849,
    latitude: 41.4008682303229776,
  }];

function App() {
  const [geocoders, setGeocoders] = useState(RESULT);

  useEffect(() => {
    fetch(APIURL)
      .then((response) => response.json())
      .then((data) => {
        const { result } = data;
        console.log(result);
        // const geocoders = data.map((latitude) => result.latitude);
        // console.log(geocoders);
        setGeocoders(data.result);
      });
  }, []);
  return (
    <div className="App">
      <div>{
       geocoders.map((singleGeocode) => <p key={singleGeocode.road_fid}>{singleGeocode.latitude} {singleGeocode.latitude}</p>)
      }
      </div>

    </div>

  );
}

export default App;
