import React from 'react';

export default function SingleGeocode({ id, address, stateMsg }) {
  return (
    <li key={id}>
      <p className="address">{address}</p>
      <div className="body">
        <p>
          {stateMsg}
        </p>
      </div>
      <div className="cta"><a href="/">Mapa</a></div>
    </li>
  );
}
