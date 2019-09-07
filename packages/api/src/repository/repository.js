import axios from 'axios';

const API_URL = `${process.env.API_URL}:${process.env.API_PORT}`;

export const getApiDetails = axios.get(`${API_URL}/about`);