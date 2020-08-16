# Objetivo

Crear una aplicación web que use los servicios API REST de Cartociudad para
- Buscar una dirección y muestre kis resultados
- Ver una dirección en un mapa
- Buscar por coordenadas y presentarla en un mapa.
- Hacer click en un mapa y obtener la dirección.
- Calcular las distancias de dos puntos y pintarla en un mapa

https://www.cartociudad.es/portal/web/guest/calculos

- Usar React y en concreto Hooks
- CSS
- Realizar test
- Openlayers

Para la part de React y Hooks he seguido los interesantes videotutoriales de Miguel Ángel Durán [@midudev](https://twitter.com/midudev) en concreto el [curso de ReactJS2020](https://midu.dev/curso-gratis-react-2020/)

📹 Vídeos ▸ http://youtube.com/c/midudev

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

## Creamos componente

- SingleGeocoders
- ListofGeocoders

Usamos ustesate y useEfect


En primer lugar para que no haya loop infnit se usan []

Luego está asociado a un botón con un useStae de dirección.





## service

o archivo para obtener los datos de la api

Estára en una capa de servicios


Documentación de referencia de la api nos dice los siguiente

usamo sla librería fetch.jsonp ya que es el formato que nos devuelve los datos la aplicación

Por reglea general devolvería un json, pero en escat ocasión en un jsonp ...qué es un jsonp superar temas de CORS
# Grid de resutados

https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df