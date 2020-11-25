/*Forma válida de hacer un POST */

const login = async ()=>{
      let myHeaders = new Headers({        
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      });
      

      let HOST = `http://localhost`;
      let PORT = ':4000';
      let URL = `/api/usuarios/signin`;
      let PETICION = `${HOST}${PORT}${URL}`;

      const respuesta = await fetch(PETICION, {
        method: 'POST',
        body:JSON.stringify({userName:'oscar',password:'1234'}),
        headers:myHeaders
      })
      .then((res)=>{
        if(res.status === 200 ){
          console.log(res,'1');         
          return res.json();

        }
      })
      .then((res)=>{
        console.log(res,'2');
      })
     .catch((err)=>{
              console.error(err,'3');
            })
      console.log(respuesta)
    }
    const handleThisForm = (data,event) => {    
        // console.log(data);       
         event.target.reset();
     }
