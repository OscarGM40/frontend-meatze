import {
  Button,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

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
  alineacionHeader: {
    paddingBottom: 0,
    paddingTop: "4px",
  },
  controlIzquierdo: {
    marginRight: 5,
  },
  controlDerecho: {
    marginLeft: 5,
  },
  botonScroll: {
    paddingBottom: 0,
  },

  "miclase::before, miclase::after": {
    content: "none",
  },
}));

/*Funcion que declara el componente */
const CreateAndUpdatePantalla = (props) => {
  const classes = useStyle();

  const estadoFormulario = {
    nombre: "",
    descripcion: "",
    marca: "",
    modelo: "",
    orientacion: "",
    ancho: "",
    alto: "",
    latitud: "",
    longitud: "",
    lista: "",
  };

  const [datosPantalla, setDatosPantalla] = useState(estadoFormulario);

  useEffect(() => {
    if (props.enviado) {
      let boton = document.getElementById("btn-enviar");
      boton.click();
    }
  }, [props.enviado]);

  const { control, errors, handleSubmit, register } = useForm();

  const handleChange = (event) => {
    setDatosPantalla({
      ...datosPantalla,
      [event.target.name]: event.target.value,
    });
  };

  const crearPantalla = (data, event) => {
    console.log(data, "data");
    console.log(datosPantalla, "estado");
  };

  return (
    <Paper
      elevation={2}
      className={classes.root}
      style={{ overflowX: "hidden" }}
    >
      <CardHeader
        title="Meatze Barakaldo"
        subheader="Centro formativo"
        className={classes.alineacionHeader}
      />
      <CardContent>
        <form onSubmit={handleSubmit(crearPantalla)}>
          <FormControl fullWidth>
            <Controller
              name="nombre"
              as={
                <TextField
                  name="nombre"
                  variant="outlined"
                  label="Nombre"
                  margin="dense"
                  helperText={
                    errors.nombre ? errors.nombre.message : "Ingrese su nombre"
                  }
                  onChange={handleChange}
                  value={datosPantalla.nombre}
                  error={!!errors.nombre}
                />
              }
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "requerido",
                },
                minLength: {
                  value: 8,
                  message: "minimo 8 caracteres",
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <Controller
              name="descripcion"
              as={
                <TextField
                  name="descripcion"
                  variant="outlined"
                  margin="dense"
                  rows="3"
                  multiline
                  label="Descripción"
                  helperText={
                    errors.descripcion
                      ? errors.descripcion.message
                      : "Describe un resumen de uso de esta pantalla"
                  }
                  onChange={handleChange}
                  value={datosPantalla.descripcion}
                  error={!!errors.descripcion}
                />
              }
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "requerido",
                },
                minLength: {
                  value: 8,
                  message: "minimo 8 caracteres",
                },
              }}
            />
          </FormControl>

          <Grid container style={{ paddingBottom: 25 }}>
            <Grid item xs={6}>
              <FormControl>
                <Controller
                  name="marca"
                  as={
                    <TextField
                      variant="outlined"
                      className={classes.controlIzquierdo}
                      margin="dense"
                      autoComplete="off"
                      name="marca"
                      label="Marca"
                      helperText={
                        errors.marca || errors.modelo
                          ? `${
                              errors.marca ? `${errors.marca.message}` : ""
                            }  ${
                              errors.modelo ? ` ${errors.modelo.message}` : ""
                            }`
                          : "Datos referidos al equipo físico"
                      }
                      onChange={handleChange}
                      value={datosPantalla.marca}
                      error={!!errors.marca}
                    />
                  }
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: false,
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <Controller
                  name="modelo"
                  as={
                    <TextField
                      label="Modelo"
                      name="modelo"
                      className={classes.controlDerecho}
                      variant="outlined"
                      margin="dense"
                      onChange={handleChange}
                      value={datosPantalla.modelo}
                      error={!!errors.modelo}
                    />
                  }
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: false,
                      message: "Modelo requerido",
                    },
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>

          <FormControl fullWidth>
            <Controller
              name="orientacion"
              as={
                <TextField
                  variant="outlined"
                  margin="dense"
                  select
                  name="orientacion"
                  label="Orientación"
                  helperText={
                    errors.orientacion
                      ? errors.orientacion.message
                      : "Seleciione el tipo de orientación"
                  }
                  onChange={handleChange}
                  value={datosPantalla.orientacion}
                  error={!!errors.orientacion}
                >
                  <MenuItem selected value="HORIZONTAL">
                    Horizontal
                  </MenuItem>
                  <MenuItem value="VERTICAL">Vertical</MenuItem>
                </TextField>
              }
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message:
                    "Requerido seleccionar la orientacion de la pantalla",
                },
              }}
            />
          </FormControl>

          <Grid container style={{ paddingBottom: 25 }}>
            <Grid item xs={6}>
              <FormControl>
                <TextField
                  margin="dense"
                  name="ancho"
                  label="Ancho"
                  className={classes.controlIzquierdo}
                  variant="outlined"
                  helperText="Resolución en pixeles"
                  onChange={handleChange}
                  value={datosPantalla.ancho}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <TextField
                  name="alto"
                  label="Alto"
                  variant="outlined"
                  className={classes.controlDerecho}
                  margin="dense"
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
          </Grid>

          {/* Latitud y longitud */}
          <Grid container style={{ paddingBottom: 25 }}>
            <Grid item xs={6}>
              <FormControl>
                <TextField
                  margin="dense"
                  name="latitud"
                  label="Latitud"
                  className={classes.controlIzquierdo}
                  variant="outlined"
                  helperText="Coordenadas de ubicación"
                  onChange={handleChange}
                  value={datosPantalla.latitud}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <TextField
                  name="longitud"
                  label="Longitud"
                  variant="outlined"
                  className={classes.controlDerecho}
                  margin="dense"
                  onChange={handleChange}
                  value={datosPantalla.longitud}
                />
              </FormControl>
            </Grid>
          </Grid>

          <FormControl fullWidth>
            <TextField
              variant="outlined"
              margin="dense"
              select
              name="lista"
              label="Lista"
              helperText="Seleccione la lista a reproducir"
              onChange={handleChange}
              value={datosPantalla.lista}
            >
              <MenuItem selected value="LISTA 1">
                Lista 1
              </MenuItem>
              <MenuItem value="LISTA 2">Lista 2</MenuItem>
            </TextField>
          </FormControl>

          <Button
            autoFocus
            variant="contained"
            id="btn-enviar"
            color="inherit"
            type="submit"
          >
            save Pantalla
          </Button>

          <FormControl fullWidth>
            <IconButton className={classes.botonScroll}>
              <ExpandLessIcon fontSize="large" />
            </IconButton>
          </FormControl>
        </form>
      </CardContent>
    </Paper>
  );
};

export default CreateAndUpdatePantalla;
