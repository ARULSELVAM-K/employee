import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL + "/all");
};

export const createEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL + "/create", employee);
};
export const getEmployee = (id) => {
    return axios.get(REST_API_BASE_URL + "/id/"+ id);
};
export const updateEmployee = (id, employee) => {
    employee.id = id;
    return axios.put(REST_API_BASE_URL + "/update", employee);
};
export const deleteEmployee = (id) => {
    return axios.delete(REST_API_BASE_URL + "/delete/"+ id);
};
