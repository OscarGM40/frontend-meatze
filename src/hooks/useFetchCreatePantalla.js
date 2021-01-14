import { useState, useEffect } from "react";
import { createPantalla } from "../helpers/pantallas.api";

export const useFetchCreatePantalla = (newPantalla) => {
  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    createPantalla(newPantalla).then((resp) => {
      setState({
        data: resp,
        loading: false,
      });
    });
  }, [newPantalla]);

  return state;
};
