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
```

- Instalado el complemento ESLint