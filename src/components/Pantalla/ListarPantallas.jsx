import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import React from "react";
import { useFetchPantalla } from "../../hooks/useFetchPantalla";
import Fade from "@material-ui/core/Fade";
import { useFetchDeletePantalla } from "../../hooks/useFetchDeletePantalla";

const useStyle = makeStyles((theme) => ({
  mainCard: {
    margin: 10,
  },
  contentCard: {
    paddingTop: 0,
  },
  headerCard: {
    paddingBottom: 0,
  },
}));

const ListarPantallas = ({
  data: { nombre, descripcion, marca, modelo, _id: id },
  state,
  modificar,
  setModificar,
  setState,
  onHandleModal,
}) => {
  const classes = useStyle();

    const { data, loading } = useFetchPantalla(id);
    const { state:{data:dataEliminar,loading:loadingEliminar,deletable} , setState:setStateEliminar } = useFetchDeletePantalla(id)



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  
  const open = Boolean(anchorEl);
  const openDialog = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleClose();
    setAnchorEl2(true);
  }

  const confirmarEliminar = () => {

    setStateEliminar(s => ({...s,deletable:true}));
    setAnchorEl2(false);
  }

  const handleModificar = () => {
    setModificar(true);
    onHandleModal();
  };
// jfklsdf
  return (
    <Card elevation={3} className={classes.mainCard}>
      <CardHeader
        className={classes.headerCard}
        avatar={
          <IconButton>
            <OndemandVideoIcon />
          </IconButton>
        }
        action={
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={nombre}
        subheader={`${marca} ${modelo}`}
      />
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem 
        onClick={handleDelete}
        >Eliminar</MenuItem>
      
        <Dialog
        open={openDialog}
        onClose={handleClose}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Está seguro de querer eliminar esta pantalla? La acción no se podrá restablecer
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAnchorEl2(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmarEliminar} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>

        <MenuItem
          onClick={() => {
            handleClose();
            handleModificar();
            setState((state) => ({
              ...state,
              modificar: true,
              valueId: id,
            }));
          }}
        >
          Modificar
        </MenuItem>
      </Menu>
      <CardContent className={classes.contentCard}>
        <Typography variant="body2" color="textSecondary" component="p">
          {descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ListarPantallas;
