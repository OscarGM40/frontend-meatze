import { Card, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root:{
    margin: theme.spacing(3),
    padding: theme.spacing(4.1),
    textAlign:'center'
    }
}))


const NoMatch = () => {
const classes = useStyles();
    return (
          <Card elevation={2} className={classes.root}>
              <Typography  component="span">
                No se ha encontrado contenido para mostrar
              </Typography>
              </Card>  
    )
}

export default NoMatch
