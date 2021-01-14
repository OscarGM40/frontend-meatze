import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import CreateAndUpdatePantalla from "./CreateAndUpdatePantalla";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export const DialogPantalla = ({ openModal, closeModal,setState }) => {
 
  const classes = useStyles();
  const [enviado, setEnviado] = useState(false)
  

  const enviar = ()=>{
    setEnviado(true);
  
    setTimeout(() => {

      setEnviado(false);
    }, 500);
  }

  return (
    <>
      <Dialog
        open={openModal}
        fullScreen
        TransitionComponent={Transition}
        transitionDuration={{ enter: 300, exit: 300 }}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={closeModal}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={enviar} type="submit">
              save
            </Button>
          </Toolbar>
        </AppBar>

        <CreateAndUpdatePantalla enviado={enviado} setState={setState}/>

      </Dialog>
    </>
  );
};
