import React from 'react';

import { makeStyles, 
         Card, 
         CardContent,  
         CardActions, 
         Button,
         CardMedia, } from '@material-ui/core';

import WbSunnyIcon from '@material-ui/icons/WbSunny';

import { TypeCard } from './TypeCard';
import { API } from '../helpers/API';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 30,
        backgroundColor: '#FAC07C'
    },
    media: {
        height: 140,
    }
});

export const Cards = () => {

    const classes = useStyles();
  
    return (


        <Card className={ classes.root } variant="outlined">
            <CardMedia 
                className={ classes.media } 
                image="https://nayturr.com/wp-content/uploads/2020/06/cumulus-clouds-june122020-min.jpg" 
                title="Clouds"
            />

            <CardContent>
              
              <TypeCard />

            </CardContent>


            <Button variant="contained" fullWidth color="primary">
              Buscar
            </Button>

            <CardActions>
                <Button 
                    size="small" 
                    href="https://openweathermap.org/" 
                    target="_blank"
                    startIcon={ <WbSunnyIcon /> }
                >
                    Open Weather Map
                </Button>
            </CardActions>

            <API />

        </Card>
    )
}
