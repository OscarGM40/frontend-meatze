import {
  Card,
  CardContent,
  CardHeader,
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
import Fade from '@material-ui/core/Fade';

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
  data: { nombre, descripcion, marca, modelo, id },modificar,setModificar, onHandleModal
}) => {
  const classes = useStyle();

  const { data, loading } = useFetchPantalla(id);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {

    setAnchorEl(null);
  };
  const handleModificar = () => {
    //console.log("ejecutando modificar")
    setModificar(true);
    onHandleModal();
    console.log(id,"id")
  }

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
        <MenuItem onClick={handleClose} >Eliminar</MenuItem>
        <MenuItem onClick={()=>{
          handleClose();
        handleModificar();}} >Modificar</MenuItem>
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
