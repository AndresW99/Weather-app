import React, { useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { UserContext } from '../UserContext';

export const Titulos = () => {

    const context = useContext(UserContext);

    return (
        <>
            { context !== null ? (

                <div>
                    <Grid container justifyContent="space-around">

                        <Grid container justifyContent="space-around">
                            <Grid item xs={6} sm="auto">

                                <Typography variant="h6" component="h2" align="left" gutterBottom>
                                    País: 
                                </Typography>

                            </Grid>


                            <Grid item xs={6} sm="auto" >

                                <Typography variant="subtitle1" component="h6" align="right" gutterBottom>
                                    { context.guardarClima.result.name } / { context.guardarClima.result.sys.country } 
                                </Typography>

                            </Grid>

                        </Grid>   

                        <Grid item xs={6} sm="auto" >

                            <Typography variant="h6" component="h2" gutterBottom>
                                Clima:
                            </Typography>

                        </Grid>

                        <Grid item xs={6} sm="auto" >

                            <Typography 
                                variant="subtitle1" 
                                component="h2" 
                                align="right" 
                                gutterBottom
                            >
                                { context.guardarClima.result.weather[0].main }
                            </Typography>

                        </Grid>

                    </Grid>

                    <Grid container justifyContent="space-around">
                        <Grid item xs={6} sm="auto">

                            <Typography variant="h6" component="h2" gutterBottom>
                                Temp: 
                            </Typography>

                        </Grid>


                        <Grid item xs={6} sm="auto" >

                            {/* Con el parse reducimos los decimales a 1 */}
                            <Typography variant="subtitle1" component="h2" align="right" gutterBottom>
                                { parseFloat(context.guardarClima.result.main.temp).toFixed(1) } °C
                            </Typography>

                        </Grid>

                    </Grid>   

                    <Grid container justifyContent="space-around">
                        <Grid item xs={6} sm="auto">

                            <Typography variant="h6" component="h2" gutterBottom>
                                Maxima: 
                            </Typography>

                        </Grid>
                        
                        <Grid item xs={6} sm="auto">

                            <Typography variant="subtitle1" component="h2" align="right" gutterBottom>
                                { parseFloat(context.guardarClima.result.main.temp_max).toFixed(1) } °C
                            </Typography>

                        </Grid>
                    </Grid>

                    <Grid container justifyContent="space-around">
                        <Grid item xs={6} sm="auto">

                            <Typography variant="h6" component="h2" gutterBottom>
                                Minima: 
                            </Typography>

                        </Grid>

                        <Grid item xs={6} sm="auto">

                            <Typography variant="subtitle1" component="h2" align="right" gutterBottom>
                                { parseFloat(context.guardarClima.result.main.temp_min).toFixed(1) } °C
                            </Typography>

                        </Grid>
                    </Grid>
                </div>
            ) : null }
        </>
    )
}
