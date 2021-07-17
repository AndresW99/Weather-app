import { Grid, Typography } from '@material-ui/core'
import React from 'react'



export const Datos = () => {;


    return (
        <Grid container justifyContent="space-between">

            <Grid item xs={12} sm="auto">

                <Typography variant="h6" component="h2" align="right" gutterBottom>
                    Clima
                </Typography>

            </Grid>

            <Grid item xs={12} sm="auto">

                <Typography variant="h6" component="h2" align="right" gutterBottom>
                    Temperatura
                </Typography>

            </Grid>

            <Grid item xs={12} sm="auto">

                <Typography variant="h6" component="h2" align="right" gutterBottom>
                    Maxima 
                </Typography>

            </Grid>

            <Grid item xs={12} sm="auto">

                <Typography variant="h6" component="h2" align="right" gutterBottom>
                    Minima 
                </Typography>

            </Grid>

        </Grid>
    )
}
