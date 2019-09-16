import axios from 'axios';
import { API_URI, ROUTES } from '../constants';

export const getAllTasks = () => axios.get(`${API_URI}${ROUTES.TASK}`);
export const createTask = (payload) => axios.post(`${API_URI}${ROUTES.TASK}`, payload);
export const deleteTaskById = (id) => axios.delete(`${API_URI}${ROUTES.TASK}/${id}`);
export const updateTaskById = (id, payload) => axios.patch(`${API_URI}${ROUTES.TASK}/${id}`, payload);
