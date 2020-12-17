import { Divider, makeStyles,Drawer as MuiDrawer } from '@material-ui/core';
import React from 'react'
import Lista from './Lista';


const drawerWidth = 240;

const estilosCajon = makeStyles(theme => {
 
    return( { drawer:{
        width:drawerWidth,
        flexShrink:0,
    },
    drawerPaper:{
        width:drawerWidth,
    },
    toolbar: {
        maxHeight: theme.mixins.toolbar.minHeight},
    logo:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }}

  )
});

const Drawer = (props) => {

    const classes = estilosCajon();

    return (
        <MuiDrawer 
          className={classes.drawer}
          variant={props.variant}
          classes={{
            paper:classes.drawerPaper,
        }}
        anchor="left"
        open={props.open}
        onClose={props.onClose ? props.onClose : null}>

            <div className={classes.toolbar}>
                <img src={require('../../assets/LogoAgilucho.png').default} alt="logo" 
            className={classes.logo} />
        
            </div>

            <Divider />
            <Lista />
        </MuiDrawer>
    )
}

export default Drawer;