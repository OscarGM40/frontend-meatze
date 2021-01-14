import { useState, useEffect } from "react";
import { updatePantalla } from "../helpers/pantallas.api";

export const useFetchUpdatePantalla = (id, newDatos) => {
  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    updatePantalla(id, newDatos).then((resp) => {
      setState({
        data: resp,
        loading: false,
      });
    });
  }, [newDatos]);

  return state;
};
