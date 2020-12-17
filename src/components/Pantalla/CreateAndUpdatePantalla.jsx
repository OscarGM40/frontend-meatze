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
import React, { useEffect } from "react";
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

 /*  const [datosPantalla, setDatosPantalla] = useState(estadoFormulario);
 */

  useEffect(() => {
    if (props.enviado) {
      let boton = document.getElementById("btn-enviar");
      boton.click();
      
    }
    
  }, [props.enviado]);

  const { control, errors, handleSubmit,reset } = useForm({defaultValues:{ nombre: "",
  descripcion: "",
  marca: "",
  modelo: "",
  orientacion: "VERTICAL",
  ancho: "",
  alto: "",
  latitud: "",
  longitud: "",
  lista: "",}});


  const crearPantalla = (data, event) => {
    console.log(data, "data");
    reset(estadoFormulario);
   
   
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
                  variant="outlined"
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
                  defaultValue="HORIZONTAL"
                  variant="outlined"
                  margin="dense"
                  select
                  label="Orientación"
                  helperText={
                    errors.orientacion
                      ? errors.orientacion.message
                      : "Seleccione el tipo de orientación"
                  }
                  // error={!!errors.orientacion}
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
                
              <Controller
              name="ancho"
              as={
                <TextField
                  margin="dense"
                  label="Ancho"
                  className={classes.controlIzquierdo}
                  variant="outlined"
                  helperText={
                    errors.ancho || errors.alto
                      ? `${
                          errors.ancho ? `${errors.ancho.message}` : ""
                        }  ${
                          errors.alto ? ` ${errors.alto.message}` : ""
                        }`
                      : "Resolución en pixeles"
                  }
                  error={!!errors.ancho}
                />

              }
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message:
                    "Seleccione un ancho",
                  },
                  pattern:{
                    value:/^[0-9]*$/,
                    message:"Debe ingresar un número"
                  }
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
                  message:
                    "Seleccione un alto",
                },
                pattern:{
                  value:/^[0-9]*$/,
                  message:"Debe ingresar un número"
                }
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
              error={!!errors.latitud}
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
                          errors.longitud ? ` ${errors.longitud.message}` : ""
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
                  message:
                    "",
                },
                pattern:{
                  value:/^[.0-9]*$/,
                  message:"Formato de latitud incorrecto"
                }
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
                  message:
                    "",
                },
                pattern:{
                  value:/^[.0-9]*$/,
                  message:"Formato de longitud incorrecto"
                }
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
                    message:
                      "",
                  }
                }}
                />
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
