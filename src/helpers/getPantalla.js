export const getPantalla = async ( id  ) => {
  
   const token =localStorage.getItem('token');

    const url = `http://localhost:4000/api/pantallas/${id}`;
    const resp = await fetch( url,{
      method: 'GET',
      headers:{
          "Content-Type": "application/json",
          "Authorization": token
      }

  });
    const pantalla = await resp.json();

 return pantalla;
}
