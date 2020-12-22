import { useState, useEffect } from 'react'
import {getPantalla} from './../helpers/getPantalla';

export const useFetchPantalla = ( id )=>{

    const [state, setState] = useState({
        data: {},
        loading: true
    })

    useEffect(() => {
       getPantalla(id)
        .then( pantalla =>{ 
      
            setState({
                data: pantalla,
                loading: false
            })
        })
    }, [id])

    return state; 
}

