import React from 'react';
import {useForm} from 'react-hook-form'

const SignIn = () => {

    const {register,errors,handleSubmit} = useForm();

    const onSubmit = (data,evt)=>{
        console.log(data);
        login(data);
        evt.target.reset();
    }

    const login = async (data)=>{
        const header = new Headers({
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
        })

        let HOST = `http://localhost`;
        let PORT = ':4000';
        let URL = `/api/usuarios/signin`;
        let PETICION = `${HOST}${PORT}${URL}`;

        try {
            const respuesta = await fetch(PETICION, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: header
            })

            if (respuesta.status === 200){
                const {token} = await respuesta.json();
                console.log(token)
                localStorage.setItem('token',`Bearer ${token}`);
                console.log('====================================');
                console.log(localStorage.getItem('token'));
                console.log('====================================');
            }
        } catch (error) {
            console.error(error, 'nuestro error')
        }
    }

    return (
       
           <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="card mt-4">
                            
                            <div className="card-header">
                                <h2 className="card-title text-center">Ingresar</h2>
                            </div>
               
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div class="form-group">
                                  <label for="userName">Nombre de usuario:</label>
                                  <input type="text" ref={register({
                                      required: {value:true,message:'Debe ingresar un nombre de usuario'},
                                      minLength:{value:4, message:'Longitud mínima de 6 caracteres'},
                                      maxLength:{value:30, message:'Longitud máxima de 30 caracteres'}
                                  })}
                                    class="form-control" id="userName" name="userName" placeholder="Nombre de usuario" />
                                    <span className="text-danger text-small d-block mb-2">
                                        {errors?.userName?.message}
                                    </span>
                                </div>
               
                                <div class="form-group">
                                  <label for="password">Contraseña:</label>
                                  <input type="password" ref={register({
                                      required:{value: true, message:'Debe ingresar una contraseña'},
                                      minLength:{value:4, message:'Longitud mínima de 6 caracteres'},
                                      maxLength:{value:25, message:'Longitud máxima de 25 caracteres'}
                                  })}
                                    class="form-control" name="password" id="password" placeholder="Contraseña"/>
                                    <span className="text-danger text-small d-block mb-2">
                                        {errors?.password?.message}
                                    </span>
                                </div>
               
                                <button type="submit" class="btn btn-primary btn-block">Ingresar</button>
                                
                             </form>
                             </div>
                        </div>
                    </div>
           </div>
       
    )
}

export default SignIn;
