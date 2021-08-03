import React, { useContext, useEffect, useState } from 'react';

import { makeStyles, 
         Typography, 
         TextField,
         Button} from '@material-ui/core';

import { Titulos } from './Titulos';
import { GetWeather } from '../helpers/API';
import { UserContext } from '../UserContext';

const useStyles = makeStyles({
    title: {
        fontSize: 32,
    },
    entrada: {
        marginBottom: 20,
        marginTop: 4
    },
});

export const TypeCard = () => {

    const [city, setCity] = useState('London');

    const { clima } = useContext(UserContext);

    const getData = async() => {
        try {
            
            const data = await GetWeather(city);
            clima( data );

        } catch (error) {
            console.log(error);
        }

    }

    // Prevenimos que recargue al pulsar enter
    const handleEnviar = (e) => {

        e.preventDefault();
        getData();

    }

    useEffect(() => {
        
        getData();

    }, [])

    const classes = useStyles();
    
    return (
        <form autoComplete="off" onSubmit={ handleEnviar}>
            <div>

                <Typography className={ classes.title } color="textPrimary" align="center" gutterBottom >
                    Weather App
                </Typography>

                <Typography variant="h5" component="h2" >
                    Nombre del país:  
                </Typography>

                <TextField 
                    id="standard-basic standard-error" 
                    className={ classes.entrada } 
                    label="Nombre" 
                    margin="normal" 
                    fullWidth={true} 
                    helperText="El campo es obligatorio"
                    onChange={ (e) => setCity(e.target.value) }
                    name="city"
                />     

               <Titulos />

                <Button 
                    variant="contained" 
                    fullWidth 
                    color="primary"
                    onClick={ () => getData() }
                >
                Buscar
                </Button>
            </div>
        </form>
    )
}
