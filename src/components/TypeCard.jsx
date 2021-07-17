import React, { useState } from 'react';

import { makeStyles, 
         Typography, 
         TextField} from '@material-ui/core';

import { Titulos } from './Titulos';
import { Datos } from './Datos';

const useStyles = makeStyles({
    title: {
        fontSize: 32,
    },
    entrada: {
        marginBottom: 20,
        marginTop: 4
    },
});

//TODO: Capturar evento del text field
//TODO: Agregar el useForm para manejo de formulario

export const TypeCard = () => {

    const [empty, setEmpty] = useState(false);
    const classes = useStyles();

    if( null ) {
        setEmpty( !empty );
    } 
    
    return (
        <form autoComplete="off">
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
                    error={empty}
                    helperText="El campo es obligatorio"
                />     

               
                <Titulos />
                <Datos />
                

            </div>
        </form>
    )
}
