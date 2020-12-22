export const getPantallas = async ( category ) => {

       const url = `http://localhost:4000/api/pantallas`;
       const resp = await fetch( url );
       const data = await resp.json();

    const pantallas = data.map(pantalla => {
        return {
            id: pantalla._id,
            nombre: pantalla.nombre,
            descripcion: pantalla.descripcion,
            marca: pantalla.marca,
            modelo: pantalla.modelo
        }
    })
    
    return pantallas;
}