import { useState, useEffect } from "react";
import { deletePantalla } from "../helpers/pantallas.api";

export const useFetchDeletePantalla = (id) => {
  const [state, setState] = useState({
    data: {},
    loading: true,
    deletable:false

  });

  useEffect(() => {

   state.deletable && deletePantalla(id).then((pantalla) => {
      setState({
        data: pantalla,
        loading: false,
        deletable:false
      });
    });
  }, [id,state.deletable]);

  return {
     state,
     setState
   };
};
