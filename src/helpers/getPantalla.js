export const getPantalla = async ( id ) => {

  //console.log(id,"id")
    const url = `http://localhost:4000/api/pantallas/${id}`;
 const resp = await fetch( url );
 const pantalla = await resp.json();
  // console.log(pantalla,"pantalla")
 

 
 return pantalla;
}