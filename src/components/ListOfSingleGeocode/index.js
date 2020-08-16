import React, { useState, useEffect } from 'react';
import getGeocoders from '../../services/getCartociudadCandidates';
import SingleGeocode from '../SingleGeocode';

export default function ListOfSingleGeocode({ direccion }) {
  const [geocoders, setGeocoders] = useState([]);

  useEffect(() => {
    getGeocoders({ direccion })
      .then((geocoders) => setGeocoders(geocoders));
  }, []);

  return (

    geocoders.map((singleGeocode) => (
      <SingleGeocode
        key={singleGeocode.id}
        address={singleGeocode.address}
        stateMsg={singleGeocode.stateMsg}
      />
    ))

  );
}
