import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
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

export const DialogPantalla = ({ openModal, closeModal }) => {
  const classes = useStyles();

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
            <Button autoFocus color="inherit" onClick={closeModal}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <CreateAndUpdatePantalla />

      </Dialog>
    </>
  );
};
