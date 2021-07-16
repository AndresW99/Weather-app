import React from 'react';

import { makeStyles, 
         Typography, 
         TextField} from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        fontSize: 32,
    },
    entrada: {
        marginBottom: 20,
        marginTop: 4
    }
});

export const TypeCard = () => {

    const classes = useStyles();
    
    return (
        <div>

            <Typography className={ classes.title } color="textPrimary" align="center" gutterBottom >
                App de clima
            </Typography>

            <Typography variant="h5" component="h2" >
                Nombre del país: 
            </Typography>

            <TextField id="standard-basic" className={ classes.entrada } label="Nombre" margin="normal" fullWidth={true} />

            <Typography variant="h6" component="h2" gutterBottom>
                Clima: 
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
                Temperatura: 
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
                Maxima: 
            </Typography>

            <Typography variant="h6" component="h2" gutterBottom>
                Minima: 
            </Typography>
            
        </div>
    )
}
