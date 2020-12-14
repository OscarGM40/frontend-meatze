import {  Dialog, Hidden, makeStyles } from "@material-ui/core";
import Drawer from './Drawer'
import React, { useState } from "react";
import NavBarTop from "./NavBarTop";
import  NavBarBottom  from "./NavBarBottom";
import { DialogPantalla } from "../Pantalla/DialogPantalla";

const estilos = makeStyles(theme => ({
    root:{
       display:'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },



   }));


const Dashboard = () => {
    const classes = estilos();
    const accionAbrir = () => {
        setAbrir(!abrir);
    }

    const [abrir, setAbrir] = useState(false);
    const [abrirModal,setAbrirModal] = useState(false);
   
  /* cerrarModal va para el DialogPantalla,para que se pueda cerrar*/
  const cerrarModal = () => {
    setAbrirModal(false);
  }

     /*manejarModal va para el boton en la NavBarBottom,es un ToogleButton */
     const manejarModal = () => {
        setAbrirModal(true)
      }

    
  return (
  <div className={classes.root}>
    <NavBarTop  accionAbrir={accionAbrir} />
    <Hidden xsDown> 
        <Drawer variant="permanent" open={true}/>
    </Hidden> 

    <Hidden smUp>
        <Drawer variant="temporary"
        open={abrir} 
        onClose={accionAbrir}
        />
    </Hidden>
     <DialogPantalla openModal={abrirModal} closeModal={cerrarModal}/>
    <NavBarBottom onHandleModal={manejarModal}/>
  </div>
  );
};

export default Dashboard;
