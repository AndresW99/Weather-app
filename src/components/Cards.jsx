import React from 'react';

import { makeStyles, 
         Card, 
         CardContent,  
         CardActions, 
         Button, } from '@material-ui/core';
         
import { TypeCard } from './TypeCard';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 100
    },
});

export const Cards = () => {

    const classes = useStyles();

    return (
        <Card className={ classes.root } variant="outlined">
            <CardContent>
              
              <TypeCard />

            </CardContent>

            <CardActions>
                <Button size="small">Open Weather Map</Button>
            </CardActions>

        </Card>
    )
}
