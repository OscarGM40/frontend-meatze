import { API, option_GET, option_POST, option_PUT } from "./server.config";

/**
 * Con este método accedemos al End-Point de la API getPantallas
 * @returns @pantallas
 */
export const getPantallas = async () => {
  try {
    // const url = API.integrate("pantallas");
    return await (await fetch(API.integrate("pantallas"), option_GET)).json();
  } catch (error) {
    return "error en getPantallas: " + error;
  }
};

/**
 * Con este metodo accedemos al End-Point de la API getPantalla
 * @param {id} id Recibe el id de la pantalla que buscaremos
 * @returns @pantalla
 */
export const getPantalla = async (id) => {
  try {
    const url = `${API.integrate("pantallas")}/${id}`;

    const resp = await fetch(url, option_GET);
    return await resp.json();
  } catch (error) {
    return "error en getPantalla: " + error;
  }
};

/**
 * Con este metodo accedemos al End-Point de la API postPantalla
 * @param {newPantalla} newPantalla Recibe un objeto con todas las propiedades para crear una pantalla nueva
 * @returns @pantalla Si crea la pantalla retorna un objeto con la pantalla nueva
 */
export const createPantalla = async (newPantalla) => {
  try {
    const url = `${API.integrate("pantallas")}/`;
    option_POST.body = JSON.stringify(newPantalla);
    console.log(option_POST, url);

    const resp = await fetch(url, option_POST);
    return await resp.json();
  } catch (error) {
    return "error en createPantalla: " + error;
  }
};

/**
 * Con este metodo accedemos al End-Point de la API putPantallas
 * @param {id} id Recibe el id de la pantalla que buscaremos para modificar
 * @param {updatePantalla} updatePantalla Recibe las propiedades y valores a modificar
 * @returns @pantalla Si modifica la pantalla retorna un objeto con la pantalla modificada
 */
export const updatePantalla = async (id, updatePantalla) => {
  try {
    const url = `${API.integrate("pantallas")}/${id}`;
    option_PUT.body = JSON.stringify(updatePantalla);
    console.log(option_PUT, url);

    const resp = await fetch(url, option_PUT);
    return await resp.json();
  } catch (error) {
    return "error en updatePantalla: " + error;
  }
};

export const deletePantalla = async (id) => {
  try {
    const url = `${API.integrate("pantallas")}/${id}`;

    const resp = await fetch(url);
    return await resp.json();
  } catch (error) {
    return "error en deletePantalla: " + error;
  }
};
