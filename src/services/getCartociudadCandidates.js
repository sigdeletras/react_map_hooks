import fetchJsonp from 'fetch-jsonp';

const API = 'http://www.cartociudad.es/geocoder/api/geocoder';

export default function getGeocoders({ direccion = 'machado granada' } = {}) {
  return fetchJsonp(`${API}/candidatesJsonp?q=${direccion}&limit=20`)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      if (Array.isArray(data)) {
        // const apiGeocoders = data.map((dato) => {
        //   const { id, address } = dato;
        //   return { id, address };
        // });
        const apiGeocoders = data;
        console.log(apiGeocoders);
        return apiGeocoders;
      }
    });
}
