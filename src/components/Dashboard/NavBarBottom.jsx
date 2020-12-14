import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import PersonIcon from "@material-ui/icons/Person";

import AddIcon from "@material-ui/icons/Add";

const useStyle = makeStyles((theme) => {
  return {
    posicion: {
      bottom: "0",
      top: "auto",
    },

    addButton: {
      width: "fit-content",
      position: "absolute",
      right: "15px",
      top: -theme.mixins.toolbar.minHeight / 2,
      padding: "5px",
      borderRadius: "50%",
      "& .MuiButtonBase-root": {
        backgroundColor: theme.palette.primary.main,
      },
      "& .MuiButtonBase-root:hover": {
        backgroundColor: theme.palette.warning.main,
      },
    },
  };
});

 const NavBarBottom = ({onHandleModal}) => {
    
  const classes = useStyle();

  return (
    <AppBar position="fixed" color="primary" className={classes.posicion}>
      <Toolbar>
     
             <IconButton selected>
                <OndemandVideoIcon/>
            </IconButton>
            <IconButton>
                <ListAltIcon/>
            </IconButton>
            <IconButton>
                <PermMediaIcon/>
            </IconButton>
            <IconButton>
                <PersonIcon/>
            </IconButton> 
        
      </Toolbar>
      <Box bgcolor="common.white" className={classes.addButton}>
        <IconButton color="inherit" onClick={onHandleModal}>
          <AddIcon />
        </IconButton>
      </Box>
    </AppBar>
  );
};

export default NavBarBottom