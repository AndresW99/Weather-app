import React, { useEffect, useState } from 'react'
import axios from 'axios';

// let name = '';
const key = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=5b650e7b1c6e1b7c81864c30f068ff07&units=metric`;

export const API = () => {
    
    const [, setClima] = useState([]);
    useEffect(() => {

        axios.get(key)
            .then(( response) => {
            console.log(response.data);
            setClima(response.data);
        })
        .catch( err => {
            console.log(err);
        });
        
    }, []);

    return (
        <div>

        </div>
    )
}
