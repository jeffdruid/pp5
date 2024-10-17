import axios from 'axios';

axios.defaults.baseURL = 'https://drf-api-jeff-00b8a22f06d7.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();