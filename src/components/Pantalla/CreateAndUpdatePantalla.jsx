import {
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    "& .MuiGrid-container .MuiFormHelperText-root": {
      position: "absolute",
      width: "400px",
      bottom: "-20px",
    },
  },
/*   'miclase::before, miclase::after':{
     content:'none',
  } */
}));

const CreateAndUpdatePantalla = () => {
  const classes = useStyle();
  return (
    <Paper elevation={2} className={classes.root}>
      <CardHeader title="Meatze Barakaldo" subheader="Centro formativo" />
      <CardContent>
        <form>
          <FormControl fullWidth>
            <TextField variant="outlined"  label="Nombre" helperText="Ingrese su nombre" 
            className={classes['miclase::before, miclase::after']}/>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              rows="3"
              multiline
              label="Descripción"
              helperText="Describe un resumen de uso de esta pantalla"
            />
          </FormControl>
          <Grid container style={{paddingBottom: 25}}>
            <Grid item xs={6}>
              <FormControl>
                <TextField
                  label="Marca"
                  helperText="Datos requeridos al equipo físico"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <TextField label="Modelo"  />
              </FormControl>
            </Grid>
          </Grid>
          
          <FormControl fullWidth>
            <TextField variant="outlined" select label="Orientación" helperText="Seleciione el tipo de orientación">
                <MenuItem selected value="HORIZONTAL">Horizontal</MenuItem>
                <MenuItem value="VERTICAL">Vertical</MenuItem>
                </TextField>
          </FormControl>

          <Grid container style={{paddingBottom: 25}}>
            <Grid item xs={6}>
              <FormControl>
                <TextField
                  label="Ancho"
                  helperText="Resolución en pixeles"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <TextField label="Alto"  />
              </FormControl>
            </Grid>
          </Grid>

        </form>
      </CardContent>
    </Paper>
  );
};

export default CreateAndUpdatePantalla;
