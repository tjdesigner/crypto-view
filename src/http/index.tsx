import axios from "axios";

const apiKey = 'ef31ff8d1b90ed57dd9c9f17f99949713e6bd2a7ea0a92670892c3bd48d2f8b2';

export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `apikey ${apiKey}`
    }
});