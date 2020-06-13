import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/AuthContext'

const Prueba = () => {
    const {token, setToken} = useContext(AuthContext);
    return(
        <h2>Contenido</h2>
        <input type="text" onChange={ (e) => setToken(e.data.ta)}/>
    )
}