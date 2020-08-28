import axios from 'axios';

const baseURL = process.env.REACT_APP_API;

// eslint-disable-next-line no-alert
if (!baseURL) alert('Você precisa configurar o arquivo .env!');

const api = axios.create({
  baseURL,
});

export default api;
