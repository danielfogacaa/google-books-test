import axios from 'axios';

export const Api = axios.create({ baseURL: 'https://www.googleapis.com/books/v1/' });