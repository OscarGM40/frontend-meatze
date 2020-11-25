import React from 'react';
import { useForm } from 'react-hook-form';
import './../css/signup.css';



const SignUp = () => {

    const {register,errors,handleSubmit} = useForm();

    // const getData = (e) => {
    //     e.preventDefault();
    //     let formData  = new FormData(document.getElementById('formularioRegistro'));
    //     const datos = {
    //         username: formData.get('username'),
    //         email: formData.get('email'),
    //         password: formData.get('password'),
    //         tipo: formData.get('tipo'),
    //     }
    //     console.log(formData.getAll('username'));
    //     console.log(datos);
    // }

    const login = async (data)=>{
      const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjM5OWQwYjkxNjA3MjMwYzM5OTI1NiIsImVtYWlsIjoib3NjYXJAZ21haWwuY29tIiwidGlwbyI6IkFETUlOIiwiaWF0IjoxNjA1NzgyMjYxLCJleHAiOjE2MDU4Njg2NjF9.XMaABiAOLGnUjAXCiE-KZ3TzOiriQZ9xs2ETT5SfjqI';
      let myHeaders = new Headers({        
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':token
      });      

      let HOST = `http://localhost`;
      let PORT = ':4000';
      let URL = `/api/usuarios/signup`;
      let PETICION = `${HOST}${PORT}${URL}`;

      try {
        const respuesta = await fetch(PETICION, {
          method: 'POST',
          body:JSON.stringify(data),
          headers:myHeaders
        })
        if(respuesta.status === 201) {
          const usuario = await respuesta.json();
          console.log(usuario);
        }     
        if(respuesta.status === 500) {
          const usuario = await respuesta.json();
          console.error(usuario)
        }
      } catch (error) {
        console.error(error)
      }
 
    }
    
    const handleThisForm = (data,event) => {    
        console.log(data); 
        login(data);      
         event.target.reset();
     }

    return (
     <div className="container-fluid">
         <div className="row">
              <div className="card col-md-4 mx-auto mt-4">
                  <div className="card-header mt-3">
                      <h1 className="card-title text-center py-2">Nuevo Usuario</h1>
                  </div>
       
                  {/* <form className="card-body" id="formularioRegistro" onSubmit={getData}> */}
                  <form className="card-body"  onSubmit={handleSubmit(handleThisForm)}>
                 
                  <div className="form-group">
                    <label htmlFor="username">Nombre de Usuario</label>
                    <input type="text"      className="form-control" name="userName" id="username"  placeholder="Ingresar Nombre de Usuario" 
                      ref = {
                          register({
                              required:{value:true,message:'Campo requerido'},
                              minLength:{value:6, message:'Longitud mínima de 6 caracteres'},
                              maxLength:{value:30, message:'Longitud máxima de 30 caracteres'}
                          })
                      } 
                      />
                       <span className="text-danger text-small d-block mb-2">
                       {errors?.userName?.message}
                  </span>
                  </div>        
             
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                      className="form-control" name="email" id="email"  placeholder="Ingresa tu email"
                      ref = {
                        register({
                            required:{value:true,message:'Campo requerido'},
                            pattern:{value:"/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/",
                            message:"Debe ingresar un email con formato válido"}
                        })
                    } />
                     <span className="text-danger text-small d-block mb-2">
                       {errors?.email?.message}
                  </span>
                  </div>                 
             
                  <div className="form-group">
                    <label htmlFor="password"></label>
                    <input type="password"
                      className="form-control" name="password" id="password"
                       placeholder="Ingresar Password" 
                       ref = {
                        register({
                            required:{value:true,message:'Campo requerido'},
                            minLength:{value:6,message:'Debe contener 6 caracteres minimo'},
                            maxLength:{value:25,message:'Debe contener 25 caracteres máximo'}
                        })
                    } />
                        <span className="text-danger text-small d-block mb-2">
                       {errors?.password?.message}
                  </span>
                  </div>      
             
                  <div class="form-group">
                  <label htmlFor="tipo">Tipo</label>
                    <select className="form-control" id="tipo" name="fdfads" ref={register}>
                      <option defaultValue="ADMIN" id='opt' name="tipo">Administrador</option>
                      <option defaultValue="USER" selected name="tipo">Usuario</option>
                    </select>
                  </div>
       
                <div className="form-group">
                      <button type="submit" class="btn btn-primary btn-block py-2">Registrar Usuario</button>
                </div>
             
                  </form>
             
      {/* button onClick={login}>Mandar</button> */}
       
              </div>        
            
         </div>
     </div>
    )
}

export default SignUp;
