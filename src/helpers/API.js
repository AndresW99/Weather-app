import axios from 'axios';

const key = `5b650e7b1c6e1b7c81864c30f068ff07`;

export const GetWeather = async( ciudad ) => {

    try {
        
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ ciudad }&appid=${ key }&units=metric`);
        return data;

    } catch (error) {
        throw error
    }
}
