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
import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useFetchPantalla } from "../../hooks/useFetchPantalla";
import { useFetchCreatePantalla } from "../../hooks/useFetchCreatePantalla";
import { useFetchUpdatePantalla } from "../../hooks/useFetchUpdatePantalla";

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
  buttonGhost: {
    display: "none",
  },
}));

/*Funcion que declara el componente */
const CreateAndUpdatePantalla = ({ enviado, setState }) => {
  const [idTarjeta, setIdTarjeta] = useState("");
  const [modificar, setModificar] = useState(false);
  const [newPantalla, setNewPantalla] = useState(false);
  const [updatePantalla, setUpdatePantalla] = useState(false);

  let { data, loading } = useFetchPantalla(idTarjeta);
  let { data: respNewPantalla, respLoadingPantalla } = useFetchCreatePantalla(
    newPantalla
  );
  let {
    data: respUpdatePantalla,
    respLoadingUpdatePantalla,
  } = useFetchUpdatePantalla(idTarjeta, updatePantalla);

  useEffect(() => {
    !!data.resolucion &&
      (data = {
        ...data,
        alto: data.resolucion.height,
        ancho: data.resolucion.width,
        latitud: data.location.coordinates[0],
        longitud: data.location.coordinates[1],
      });
  }, [data]);

  console.log(data, "data recibida");
  const classes = useStyle();
  const papel = useRef(null);
  const btnEnviar = useRef();

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
  console.log(idTarjeta, "idTarjeta");

  useEffect(() => {
    if (enviado) {
      btnEnviar.current.click();
    }
  }, [enviado]);

  useEffect(() => {
    setState((state) => {
      setIdTarjeta(state.valueId);
      setModificar(state.modificar);
    });
  }, [setState]);

  //console.log(datos.id,'create id')

  const { control, errors, handleSubmit, reset } = useForm({
    defaultValues: data,
  });

  useEffect(() => {
    papel.current.scrollTop = 0;
    reset(data);
  }, [reset, data]);

  const CrearPantalla = (data, event) => {
    // console.log(data, "data");
    data = {
      ...data,
      location: {
        type: "Point",
        coordinates: [data.latitud, data.longitud],
      },
      resolucion: {
        height: data.alto,
        width: data.ancho,
      },
    };

    if (!modificar) {
      let resp = setNewPantalla(data);
      console.log(resp, "respuesta al crear");
      setState((state) => {
        return {
          ...state,
          modificar: false,
        };
      });
      reset(estadoFormulario);

      console.log(respNewPantalla, "respuesta de pantalla nueva");

      return;
    }

    console.log("esto modifica una pantalla existente");
    // console.log(data, "data");
    let resp = setUpdatePantalla(data);
    console.log(resp, "respuesta al UPDATE");
    setState((state) => {
      return {
        ...state,
        modificar: false,
      };
    });
    reset(estadoFormulario);
  };

  const resetearScroll = () => {
    // const papel = document.querySelector('#papel');
    papel.current.scrollTop = 0;
  };

  return (
    <Paper
      // id="papel"
      ref={papel}
      elevation={2}
      className={classes.root}
      style={{ overflowX: "hidden", scrollBehavior: "smooth" }}
    >
      <CardHeader
        title="Meatze Barakaldo"
        subheader="Centro formativo"
        className={classes.alineacionHeader}
      />
      <CardContent>
        <form onSubmit={handleSubmit(CrearPantalla)} autoComplete="off">
          <FormControl fullWidth>
            <Controller
              name="nombre"
              defaultValue=""
              as={
                <TextField
                  variant="outlined"
                  autoComplete="on"
                  label="Nombre"
                  margin="dense"
                  helperText={
                    errors.nombre ? errors.nombre.message : "Ingrese su nombre"
                  }
                  error={!!errors.nombre}
                />
              }
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Requerido",
                },
                minLength: {
                  value: 8,
                  message: "Minimo 8 caracteres",
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <Controller
              name="descripcion"
              as={
                <TextField
                  variant="outlined"
                  margin="dense"
                  rows="3"
                  multiline
                  label="Descripción"
                  helperText={
                    errors.descripcion
                      ? errors.descripcion.message
                      : "Describe un resumen de uso de esta data"
                  }
                  error={!!errors.descripcion}
                />
              }
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Requerido",
                },
                minLength: {
                  value: 8,
                  message: "Minimo 8 caracteres",
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
                  defaultValue=""
                  as={
                    <TextField
                      label="Modelo"
                      className={classes.controlDerecho}
                      variant="outlined"
                      margin="dense"
                      error={!!errors.modelo}
                    />
                  }
                  control={control}
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
                  defaultValue=""
                  variant="outlined"
                  margin="dense"
                  select
                  label="Orientación"
                  helperText={
                    errors.orientacion
                      ? errors.orientacion.message
                      : "Seleccione el tipo de orientación"
                  }
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
                  message: "Requerido seleccionar la orientacion de la data",
                },
              }}
            />
          </FormControl>

          <Grid container style={{ paddingBottom: 25 }}>
            <Grid item xs={6}>
              <FormControl>
                <Controller
                  name="ancho"
                  as={
                    <TextField
                      margin="dense"
                      label="Ancho"
                      autoComplete="off"
                      className={classes.controlIzquierdo}
                      variant="outlined"
                      helperText={
                        errors.ancho || errors.alto
                          ? `${
                              errors.ancho ? `${errors.ancho.message}` : ""
                            }  ${errors.alto ? ` ${errors.alto.message}` : ""}`
                          : "Resolución en pixeles(inserte 3 ó 4 digitos)"
                      }
                      error={!!errors.ancho || !!errors.alto}
                    />
                  }
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "Seleccione un ancho",
                    },
                    pattern: {
                      value: /^[0-9]{3,4}$/,
                      message: "Debe ingresar 3 ó 4 digitos(Ancho)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <Controller
                  name="alto"
                  as={
                    <TextField
                      label="Alto"
                      autoComplete="off"
                      variant="outlined"
                      className={classes.controlDerecho}
                      margin="dense"
                      error={!!errors.alto}
                    />
                  }
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "Seleccione un alto",
                    },
                    pattern: {
                      value: /^\d{3,4}$/,
                      message: "Debe ingresar 3 ó 4 digitos(alto)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>

          {/* Latitud y longitud */}
          <Grid container style={{ paddingBottom: 25 }}>
            <Grid item xs={6}>
              <FormControl>
                <Controller
                  name="latitud"
                  error={!!errors.latitud || !!errors.longitud}
                  as={
                    <TextField
                      margin="dense"
                      label="Latitud"
                      className={classes.controlIzquierdo}
                      variant="outlined"
                      helperText={
                        errors.latitud || errors.longitud
                          ? `${
                              errors.latitud ? `${errors.latitud.message}` : ""
                            }  ${
                              errors.longitud
                                ? ` ${errors.longitud.message}`
                                : ""
                            }`
                          : "Coordenadas de ubicación"
                      }
                    />
                  }
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: false,
                      message: "",
                    },
                    // Latitud +- 90 y longitud es +- 180
                    pattern: {
                      // value:/^-?\d{1,3}\.\d{5,12}$/,
                      value: /^-?([0-1]{0,1}[0-8]{0,1}[0-9]{0,1})\.\d{1,12}$/,
                      message: "Formato de latitud incorrecto(Ej:124.4)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <Controller
                  name="longitud"
                  error={!!errors.latitud}
                  as={
                    <TextField
                      label="Longitud"
                      variant="outlined"
                      className={classes.controlDerecho}
                      margin="dense"
                    />
                  }
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: false,
                      message: "",
                    },
                    pattern: {
                      value: /^-?\d{1,3}\.\d{1,12}$/,
                      message: "Formato de longitud incorrecto(Ej:124.4)",
                    },
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>

          <FormControl fullWidth>
            <Controller
              name="lista"
              error={!!errors.lista}
              as={
                <TextField
                  variant="outlined"
                  margin="dense"
                  select
                  label="Lista"
                  helperText="Seleccione la lista a reproducir"
                >
                  <MenuItem selected value="LISTA 1">
                    Lista 1
                  </MenuItem>
                  <MenuItem value="LISTA 2">Lista 2</MenuItem>
                </TextField>
              }
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: false,
                  message: "",
                },
              }}
            />
          </FormControl>

          <Button
            ref={btnEnviar}
            autoFocus
            variant="contained"
            // id="btn-enviar"
            color="inherit"
            type="submit"
            className={classes.buttonGhost}
          >
            save Pantalla
          </Button>

          <FormControl fullWidth>
            <IconButton
              className={classes.botonScroll}
              onClick={resetearScroll}
            >
              <ExpandLessIcon fontSize="large" />
            </IconButton>
          </FormControl>
        </form>
      </CardContent>
    </Paper>
  );
};

export default CreateAndUpdatePantalla;
