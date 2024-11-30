import axios from 'axios';
const categoryApi = axios.create({
    baseURL: 'https://whole-phones-march.loca.lt/category',
});
export const searchCategories = () => categoryApi.get('/get');