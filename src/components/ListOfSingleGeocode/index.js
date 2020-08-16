import React from 'react';
import SingleGeocode from '../SingleGeocode';

export default function ListOfSingleGeocode({ geocoders }) {
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
