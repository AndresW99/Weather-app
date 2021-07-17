import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export const Titulos = () => {


    return (

        <Grid container justifyContent="space-between">

            <Grid item xs={12} sm="auto" >

                <Typography variant="h6" component="h2" gutterBottom>
                    Clima
                </Typography>

            </Grid>

            <Grid item xs={12} sm="auto">

                <Typography variant="h6" component="h2" >
                    Temperatura 
                </Typography>

            </Grid>

            <Grid item xs={12} sm="auto">

                <Typography variant="h6" component="h2" gutterBottom>
                    Maxima 
                </Typography>

            </Grid>

            <Grid item xs={12} sm="auto">

                <Typography variant="h6" component="h2" gutterBottom>
                    Minima 
                </Typography>

            </Grid>

        </Grid>
    )
}
