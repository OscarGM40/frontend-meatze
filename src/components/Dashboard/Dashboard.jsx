import {  CircularProgress, Dialog, Hidden, makeStyles, Typography } from "@material-ui/core";
import Drawer from './Drawer'
import React, { useEffect, useState } from "react";
import NavBarTop from "./NavBarTop";
import  NavBarBottom  from "./NavBarBottom";
import { DialogPantalla } from "../Pantalla/DialogPantalla";
import ListarPantallas from "../Pantalla/ListarPantallas";
import {getPantallas} from './../../helpers/getPantallas';
import { useFetchPantallas } from "../../hooks/useFetchPantallas";
import NoMatch from "../utils/NoMatch";
import Loading from "../utils/Loading";


const estilos = makeStyles(theme => ({

    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
   }));


const Dashboard = () => {
    const classes = estilos();

    const { data, loading } = useFetchPantallas();

useEffect(() => {
    const mifuncion = async()=>{
        const objetos = await getPantallas()

        console.log(objetos,"Dashboard")
    }
    
    mifuncion();

},[])

    const accionAbrir = () => {
        setAbrir(!abrir);
    }

    const [abrir, setAbrir] = useState(false);
    const [abrirModal,setAbrirModal] = useState(false);
    const [modificar, setModificar] = useState(false)
    const [state,setState] = useState({
       modificar:false,
        valueId:"",
    })
   
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

    { loading && (<>
        <Loading />
    </>
     ) }
     {(data.length === 0 && !loading) && (
         <NoMatch/>
     )}
   {
       data.map(
           (data) =>
               
                   <ListarPantallas key={data.id} data={data}
                   setModificar={setModificar} modificar={modificar} onHandleModal={manejarModal} setState={setState}
                   />
       )
   }


          
     <DialogPantalla openModal={abrirModal} closeModal={cerrarModal} modificar={modificar} setState={setState}/>
   

    <NavBarBottom onHandleModal={manejarModal} setState={setState}/>
  </div>
  );
};

export default Dashboard;
