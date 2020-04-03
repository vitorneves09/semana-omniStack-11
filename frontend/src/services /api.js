import axios from 'axios';

const api = axios.create({
    baseURL : 'http://http://localhost:3000'
});


export default api;