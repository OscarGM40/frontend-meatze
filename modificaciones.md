01 - EL FORMULARIO DE PANTALLAS NO RECIBE LAS PROPIEDADES ANCHO, ALTO, LATITUD, LONGITUD
Estas deberían mostrarse en el componente CreateAndUpdatePantalla al momento de modificar una pantalla listada.
El problema es que para asignarle valores a cada input éstos deben estar dentro de un objeto con el nombre de la propiedad conincidente con el nombre del input.

    En este caso puntual cuando creamos en el useFetchPantalla.js el state, lo hacemos a travez de una peticion Fetch a getPantalla, y este no devuelve un objeto con todas las propiedades en la raiz del objeto, las mensionadas más arriba se encuentra por arriba del segundo nivel.

    El arreglo se logra haciendo una reestructuracion del objeto devuelto por la llamada del fetch y se asegura que se devuelva un estado con todas las propiedades en la raiz del objeto. De esta manera el problema es resuelto

    Codigo principal modificado
        --> useFetchPantalla
            import { useState, useEffect } from "react";
            import { getPantalla } from "./../helpers/getPantalla";

            export const useFetchPantalla = (id) => {
            const [state, setState] = useState({
                data: {},
                loading: true,
            });

            useEffect(() => {
                getPantalla(id).then((pantalla) => {

                !!pantalla.resolucion &&
                    (pantalla = {
                    ...pantalla,
                    alto: pantalla.resolucion.height,
                    ancho: pantalla.resolucion.width,
                    latitud: pantalla.location.coordinates[0],
                    longitud: pantalla.location.coordinates[1],
                    });
                setState({
                    data: pantalla,
                    loading: false,
                });
                });
            }, [id]);
            //   console.log(state, "estado general");

            return state;
            };

    Luego de esta opcion se analiza una segunda posibilidad, a mi criterio un poco más clara, ya que no tenemos que modificar el useFetchPantalla, sino que esperamos que nos devuelva la data y dentro del mismo componente CreateAndUpdatePantalla, personalizamos la data devuelta por el useFetchPantalla con el formato que neceistamos.

    Esta modificacion la pondremos dentro de un useEffect para poder controlar cuando debe ejecutarse, definimos como observable a la misma data, de esta manera cada que vez que cambie la data se ejecutará este efecto y nos volverá a formatear el objeto recibido.

    Notar que cuando hacemos el destructuring ya no lo hacemos sobre una const, sino sobre un let, porque luego lo modificaremos.

    Codigo modificado en CreateAndUpdatePantalla.jsx

        <code>
            let { data, loading } = useFetchPantalla(idTarjeta);
            useEffect(() => {
                !!data.resolucion &&
                (data = {
                    ...data,
                    alto: data.resolucion.height,
                    ancho: data.resolucion.width,
                    latitud: data.location.coordinates[0],
                    longitud: data.location.coordinates[1],
                });
            }, [data]);
        </code>

02 - CREAMOS UN SOLO ARCHIVO pantallas.api.js para manejar todas las peticiones de pantallas en un solo archivo ubicado en la carpeta helpers

    Lo primero que hacemos es integrar el codigo /helpers/getPantallas.js como un nuevo metodo de /helpers/getPantalla.js

    Luego renombramos el archivo /helpers/getPantalla.js a /helpers/pantallas.api.js

    Este será el archivo que contenga todas las peticions a la API de pantallas y devolverá un metodo por cada peticion. Por ejemplo cuando queramos pedir una pantalla especifica deberemos importar la siguiente linea
        --> import { getPantalla } from "../helpers/pantallas.api";
            Esto nos devolverá el metodo getPantalla que lo podremos utilizar de la siguiente manera.

            --> useEffect(() => {
                    getPantalla(id).then((pantalla) => {
                        setState({
                            data: pantalla,
                            loading: false,
                        });
                    });
                }, [id]);


