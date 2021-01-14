import { useState, useEffect } from "react";
import { getPantallas } from "./../helpers/pantallas.api";

export const useFetchPantallas = (st) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getPantallas().then((pantallas) => {

      setState({
        data: () => {
          return pantallas.status === 404 ? [] : pantallas
        },
        loading: false,
      });
    });
  }, [st]);

  return state;
};
