import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/employee',
    timeout: 5000
});




export const getAllEmployee = () => api.get('/all');
export const getEmployee = (empId) => api.get(`/${empId}`);
export const createEmployee = (payload) => api.post('/create', payload);
export const updateEmployee = (empId, payload) => api.put(`/${empId}`,payload);
export const deleteEmployee = (empId) => api.delete(`/${empId}`);

const apis = {
    getAllEmployee,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
};

export default apis;


