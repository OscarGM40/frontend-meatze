import { useState, useEffect } from "react";
import { getPantalla } from "../helpers/pantallas.api";

export const useFetchPantalla = (id) => {
  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    getPantalla(id).then((pantalla) => {
      /*   !!pantalla.resolucion &&
        (pantalla = {
          ...pantalla,
          alto: pantalla.resolucion.height,
          ancho: pantalla.resolucion.width,
          latitud: pantalla.location.coordinates[0],
          longitud: pantalla.location.coordinates[1],
        }); */
      setState({
        data: pantalla,
        loading: false,
      });
    });
  }, [id]);
  //   console.log(state, "estado general");

  return state;
};
