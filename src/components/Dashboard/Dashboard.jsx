import {
  CircularProgress,
  Dialog,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Drawer from "./Drawer";
import React, { useEffect, useState } from "react";
import NavBarTop from "./NavBarTop";
import NavBarBottom from "./NavBarBottom";
import { DialogPantalla } from "../Pantalla/DialogPantalla";
import ListarPantallas from "../Pantalla/ListarPantallas";
// import {getPantallas} from './../../helpers/getPantallas';
import { getPantallas } from "./../../helpers/pantallas.api";
import { useFetchPantallas } from "../../hooks/useFetchPantallas";
import NoMatch from "../utils/NoMatch";
import Loading from "../utils/Loading";

//BORRARLO
/* localStorage.setItem(
  "token",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZmVkYTc1Zjc1YWRiN2U0MjA4N2NlZiIsImVtYWlsIjoiZ2FicmllbEBnbWFpbC5jb20iLCJ0aXBvIjoiQURNSU4iLCJpYXQiOjE2MTA2MTI2NDQsImV4cCI6MTYxMDY5OTA0NH0.UUJzbjNxV1p0g8KPmZub-rvTM16oA0kTCqG96mihT20"
); */

const estilos = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = estilos();

  const [abrir, setAbrir] = useState(false);
  const [abrirModal, setAbrirModal] = useState(false);
  const [modificar, setModificar] = useState(false);
  const [state, setState] = useState({
    modificar: false,
    valueId: "",
  });

  const { data, loading } = useFetchPantallas(state);

/*   useEffect(() => {
    const mifuncion = async () => {
      const objetos = await getPantallas();

      console.log(objetos, "Dashboard");
    };

    mifuncion();
  }, []); */

  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  /* cerrarModal va para el DialogPantalla,para que se pueda cerrar*/
  const cerrarModal = () => {
    setAbrirModal(false);
  };

  /*manejarModal va para el boton en la NavBarBottom,es un ToogleButton */
  const manejarModal = () => {
    setAbrirModal(true);
  };

  return (
    <div className={classes.root}>
      <NavBarTop accionAbrir={accionAbrir} />
      <Hidden xsDown>
        <Drawer variant="permanent" open={true} />
      </Hidden>

      <Hidden smUp>
        <Drawer variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>

      {loading && (
        <>
          <Loading />
        </>
      )}
      {data.length === 0 ? <NoMatch />
      : (data.length !== 0 && data.map((data) => (
        <ListarPantallas
          key={data._id}
          data={data}
          setModificar={setModificar}
          modificar={modificar}
          onHandleModal={manejarModal}
          setState={setState}
        />
      )))}

      <DialogPantalla
        openModal={abrirModal}
        closeModal={cerrarModal}
        modificar={modificar}
        setState={setState}
      />

      <NavBarBottom onHandleModal={manejarModal} setState={setState} />
    </div>
  );
};

export default Dashboard;
