# Sprint 1

- Crear repositorio en Github y clonar

Como es debido en primer luagr vamos a crear el repositorio en Github para tener una copia del proyecto y usar Git como control de versiones.

https://github.com/sigdeletras/react_map_hooks

- CRA

Usamos CRA para crear la estructura base de nuestro proyecto.


```
npx create-react-app react_map_hooks
```

Aplicando guía de estilos Javascript al proyecto. 

Vamos a usar la guía [AirBnB](https://github.com/airbnb/javascript). No he usado ninguna guia anteriormente y tampoco tengo un conjunto de reglas propias tan amplia para usar un estilo personalizado, por lo que me parece una buena idea probar con la la de AirBnB.

Para aplicar la guía vamos a añadir como dependencias de desarrollo el paquete ESLint.

```
npm install eslint --save-dev
```

Seguidamete inicialimos eslint para generar el archivo de configuración.

```
npx eslint --init
npx eslint .
npx eslint . --fix
```

Se ha creado un script dentro de package.json para ejecutar 
npx eslint . --fix

- Instalado el complemento ESLint


Para activar la opción de fix onsave seguir el siguiente [enlace](https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting#:~:text=If%20you%20have%20the%20ESLint,fixable%20Problems%E2%80%9D%20and%20press%20enter.&text=Beautiful!)

Crea una nueva carpeta .vscode y dentro e archivo setting.json con la configuracion. Solo se aplica para el workspace

```json
{    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "eslint.validate": ["javascript"]
}
```

## Crear estructura de directorios
- pages
- components
- services

## service

const APIURL = 'http://www.cartociudad.es/CartoGeocoder/Geocode?address=calle%20pons%201%20barcelona%20barcelona&max_results=50';

  // const [geocoders, getGeocoders] = useState([]);

  // useEffect(() => {
  //   fetch(APIURL)
  //     .then((res) => res.json)
  //     .then((response) => {
  //       console.log(response);
  //     });
  // });


# Grid de resutados

https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df